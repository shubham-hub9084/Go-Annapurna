import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { RiDeleteBinLine, RiAddLine, RiSubtractLine, RiArrowLeftLine, RiShoppingBag3Line } from "react-icons/ri";
import { addToCart, removeFromCart } from "../../store/cartSlice";

const Cart = () => {
    const { items, totalAmount, totalQuantity } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddItem = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemoveItem = (id) => {
        dispatch(removeFromCart(id));
    };

    const calculateTax = (amount) => amount * 0.05; // 5% Tax
    const shippingCost = totalAmount > 500 ? 0 : 40; // Free shipping over 500
    const finalTotal = totalAmount + calculateTax(totalAmount) + shippingCost;

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-background flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500 text-4xl">
                        <RiShoppingBag3Line />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground mb-2">Your Cart is Empty</h2>
                    <p className="text-muted-foreground mb-8">Looks like you haven't added any authentic flavors yet.</p>
                    <Link
                        to="/menu"
                        className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-700 transition-all inline-flex items-center gap-2"
                    >
                        <RiArrowLeftLine /> Browse Menu
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-background py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                    <span className="bg-orange-600 text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">
                        {totalQuantity}
                    </span>
                    Your Cart
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-4">
                        <AnimatePresence>
                            {items.map((item) => (
                                <motion.div
                                    key={item.cartId || item.id}
                                    layout
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    className="bg-white dark:bg-card p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-border flex gap-4 items-center"
                                >
                                    <div className="w-24 h-24 shrink-0 rounded-xl overflow-hidden bg-gray-100 dark:bg-muted">
                                        <img
                                            src={item.image?.default || item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                                        {/* Customization Details */}
                                        <div className="text-sm text-muted-foreground mt-1 space-y-0.5">
                                            {item.selectedVariant && (
                                                <p><span className="font-medium text-foreground">Size:</span> {item.selectedVariant.name}</p>
                                            )}
                                            {item.selectedAddons && item.selectedAddons.length > 0 && (
                                                <p><span className="font-medium text-foreground">Add-ons:</span> {item.selectedAddons.map(a => a.name).join(", ")}</p>
                                            )}
                                            {item.specialRequest && (
                                                <p className="text-xs italic text-orange-600">Note: "{item.specialRequest}"</p>
                                            )}
                                        </div>
                                        <p className="text-foreground font-semibold text-sm mt-2">₹{item.price} / item</p>
                                    </div>

                                    <div className="flex flex-col items-end gap-2">
                                        <span className="text-lg font-bold text-foreground">₹{item.totalPrice}</span>
                                        <div className="flex items-center gap-3 bg-gray-100 dark:bg-muted rounded-lg p-1">
                                            <button
                                                onClick={() => handleRemoveItem(item.cartId || item.id)}
                                                className="w-8 h-8 flex items-center justify-center bg-white dark:bg-card rounded-md shadow-sm text-gray-600 hover:text-red-500 transition-colors"
                                            >
                                                <RiSubtractLine />
                                            </button>
                                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                                            <button
                                                onClick={() => handleAddItem(item)}
                                                className="w-8 h-8 flex items-center justify-center bg-white dark:bg-card rounded-md shadow-sm text-gray-600 hover:text-green-500 transition-colors"
                                            >
                                                <RiAddLine />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-card p-6 rounded-2xl border border-orange-100 dark:border-border sticky top-24"
                        >
                            <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Item Total</span>
                                    <span>₹{totalAmount}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Tax (5%)</span>
                                    <span>₹{calculateTax(totalAmount).toFixed(0)}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground">
                                    <span>Delivery Charges</span>
                                    <span className={shippingCost === 0 ? "text-green-600 font-bold" : ""}>
                                        {shippingCost === 0 ? "FREE" : `₹${shippingCost}`}
                                    </span>
                                </div>
                                {shippingCost > 0 && (
                                    <p className="text-xs text-orange-600 bg-orange-50 p-2 rounded-lg">
                                        Add items worth ₹{500 - totalAmount} more for Free Delivery!
                                    </p>
                                )}
                            </div>

                            <div className="border-t border-gray-100 dark:border-border pt-4 mb-8">
                                <div className="flex justify-between items-center">
                                    <span className="text-lg font-bold text-foreground">Grand Total</span>
                                    <span className="text-2xl font-bold text-orange-600">₹{finalTotal.toFixed(0)}</span>
                                </div>
                            </div>

                            <Link to="/checkout" className="block w-full py-4 bg-gray-900 dark:bg-primary text-white dark:text-primary-foreground rounded-xl font-bold text-lg hover:bg-black transition-all hover-lift active:scale-95 text-center">
                                Proceed to Checkout
                            </Link>
                            <p className="text-center text-xs text-muted-foreground mt-4">Secure Checkout Powered by Razorpay</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
