import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine, RiCheckboxCircleFill, RiAddLine, RiSubtractLine } from 'react-icons/ri';

const FoodModal = ({ isOpen, onClose, item, onAddToBag }) => {
    const [selectedVariant, setSelectedVariant] = useState(null);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [specialRequest, setSpecialRequest] = useState("");

    // Initialize defaults when modal opens or item changes
    useEffect(() => {
        if (item) {
            // Select first variant by default if variants exist
            if (item.variants && item.variants.length > 0) {
                setSelectedVariant(item.variants[0]);
            } else {
                setSelectedVariant(null);
            }
            setSelectedAddons([]);
            setQuantity(1);
            setSpecialRequest("");
        }
    }, [item, isOpen]);

    if (!isOpen || !item) return null;

    // Calculate Total Price
    const basePrice = selectedVariant ? selectedVariant.price : (item.price || 0);
    // Note: If variant price is 0 (like "Plain"), we might want to fall back to item.price, or assume variant price is authoritative.
    // Let's assume: If variants exist, they dictate the base price. If a variant has price 0, checking logic... 
    // In foodImages.js I set "Half: 0, Full: 180" for Dal Makhani (item price 229). 
    // This implies "Half" is Base (229) and "Full" is Base + ? Or Replacement?
    // My previous assumption was "Variant Price replaces Base Price".
    // So "Half: 0" would mean it costs 0? That's wrong.
    // Correction: In foodImages.js I should have set explicit prices.
    // Let's handle logic: If variant.price > 0, use it. If 0, use item.price.
    // Wait, "Plain Dosa: 0". Item price 129. So Plain is 129.
    // "Masala: 30". Is it 129+30? Or just 30? Usually addons are additive.
    // Let's go with ADDITIVE model for Variants if the price seems low relative to item price? No that's risky.
    // Let's go with: Variants with price > 0 REPLACE item price?
    // Or: item.price is the "Starting from" price.
    // Variant price of 0 means "Standard Price". Variant price > 0 means "Surcharge"?
    // Or Variant price IS the price.
    // Let's assume ADDITIVE for now as I put small numbers like "30".
    // So: Price = ItemPrice + VariantPrice + AddonsPrice.

    // Check Dosa: Item 129. Variant "Masala" 30. Total 159. Makes sense.
    // Check Dal Makhani: Item 229. Variant "Full" 180. Total 409. Makes sense (Large usually double).
    // Check Dal Makhani: Variant "Half" 0. Total 229. Makes sense.

    const variantPrice = selectedVariant ? selectedVariant.price : 0;
    const addonsPrice = selectedAddons.reduce((total, addon) => total + addon.price, 0);
    const finalPrice = (item.price + variantPrice + addonsPrice) * quantity;

    const handleAddonToggle = (addon) => {
        if (selectedAddons.find(a => a.name === addon.name)) {
            setSelectedAddons(selectedAddons.filter(a => a.name !== addon.name));
        } else {
            setSelectedAddons([...selectedAddons, addon]);
        }
    };

    const handleAddToBag = () => {
        // Generate unique ID
        const variantId = selectedVariant ? selectedVariant.name : 'default';
        const addonsId = selectedAddons.map(a => a.name).sort().join('-');
        const cartId = `${item.id}-${variantId}-${addonsId}`;

        onAddToBag({
            ...item,
            cartId,
            price: (item.price + variantPrice + addonsPrice), // Store unit price
            selectedVariant,
            selectedAddons,
            specialRequest,
            quantity // Initial quantity to add
        });
        onClose();
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[2000] flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                onClick={onClose}
            >
                <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="bg-white w-full max-w-lg rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col"
                    onClick={e => e.stopPropagation()}
                >
                    {/* Header Image */}
                    <div className="relative h-48 sm:h-56 bg-gray-100 shrink-0">
                        <img
                            src={item.image?.default || item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                        />
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 bg-black/30 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                        >
                            <RiCloseLine size={24} />
                        </button>
                    </div>

                    {/* Content Scrollable Area */}
                    <div className="p-6 overflow-y-auto custom-scrollbar">
                        <div className="flex justify-between items-start mb-2">
                            <h2 className="text-2xl font-bold text-gray-900">{item.name}</h2>
                            <span className="text-lg font-bold text-orange-600">₹{item.price}</span>
                        </div>
                        <p className="text-gray-500 text-sm mb-6">{item.description}</p>

                        {/* Variants (Size) */}
                        {item.variants && item.variants.length > 0 && (
                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 mb-3">Choose Size</h3>
                                <div className="space-y-2">
                                    {item.variants.map((variant) => (
                                        <label
                                            key={variant.name}
                                            className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${selectedVariant?.name === variant.name ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-gray-300'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedVariant?.name === variant.name ? 'border-orange-600' : 'border-gray-400'}`}>
                                                    {selectedVariant?.name === variant.name && <div className="w-2.5 h-2.5 rounded-full bg-orange-600" />}
                                                </div>
                                                <span className="font-medium text-gray-700">{variant.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-500">{variant.price > 0 ? `+ ₹${variant.price}` : ''}</span>
                                            <input
                                                type="radio"
                                                name="variant"
                                                className="hidden"
                                                checked={selectedVariant?.name === variant.name}
                                                onChange={() => setSelectedVariant(variant)}
                                            />
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Add-ons */}
                        {item.addons && item.addons.length > 0 && (
                            <div className="mb-6">
                                <h3 className="font-bold text-gray-900 mb-3">Add-ons</h3>
                                <div className="space-y-2">
                                    {item.addons.map((addon) => {
                                        const isSelected = selectedAddons.some(a => a.name === addon.name);
                                        return (
                                            <label
                                                key={addon.name}
                                                className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${isSelected ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-gray-300'}`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-5 h-5 rounded border flex items-center justify-center ${isSelected ? 'bg-orange-600 border-orange-600' : 'border-gray-400'}`}>
                                                        {isSelected && <RiCheckboxCircleFill className="text-white text-xs" />}
                                                    </div>
                                                    <span className="font-medium text-gray-700">{addon.name}</span>
                                                </div>
                                                <span className="text-sm text-gray-500">+ ₹{addon.price}</span>
                                                <input
                                                    type="checkbox"
                                                    className="hidden"
                                                    checked={isSelected}
                                                    onChange={() => handleAddonToggle(addon)}
                                                />
                                            </label>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Special Request */}
                        <div className="mb-6">
                            <h3 className="font-bold text-gray-900 mb-3">Special Instructions</h3>
                            <textarea
                                placeholder="E.g. Less spicy, no onions..."
                                value={specialRequest}
                                onChange={(e) => setSpecialRequest(e.target.value)}
                                className="w-full p-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 text-sm min-h-[80px]"
                            />
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-4 border-t border-gray-100 bg-white shrink-0">
                        <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-2">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-orange-600"
                                >
                                    <RiSubtractLine />
                                </button>
                                <span className="font-bold text-gray-900 w-4 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="w-8 h-8 flex items-center justify-center bg-white rounded-md shadow-sm text-gray-600 hover:text-green-600"
                                >
                                    <RiAddLine />
                                </button>
                            </div>

                            <button
                                onClick={handleAddToBag}
                                className="flex-1 bg-gray-900 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-black transition-all flex items-center justify-center gap-2"
                            >
                                <span>Add item</span>
                                <span className="bg-white/20 px-2 py-0.5 rounded text-sm">₹{finalPrice}</span>
                            </button>
                        </div>
                    </div>

                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FoodModal;
