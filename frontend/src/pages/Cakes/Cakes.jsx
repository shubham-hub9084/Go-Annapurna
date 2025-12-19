import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RiShoppingBag3Line, RiCake3Line, RiHeartLine, RiHeartFill } from 'react-icons/ri';
import { menuItems } from '../../assets/foodImages';
import { addToCart } from '../../store/cartSlice';
import { toggleWishlist } from '../../store/wishlistSlice';
import FoodModal from '../../Components/FoodModal/FoodModal';

const Cakes = () => {
    const dispatch = useDispatch();
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const [selectedCake, setSelectedCake] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const cakes = menuItems.filter(item => item.category === 'cakes');

    const handleAddToCart = (cake) => {
        if ((cake.variants && cake.variants.length > 0) || (cake.addons && cake.addons.length > 0)) {
            setSelectedCake(cake);
            setIsModalOpen(true);
        } else {
            dispatch(addToCart(cake));
        }
    };

    const handleToggleWishlist = (cake) => {
        dispatch(toggleWishlist(cake));
    };

    const isInWishlist = (id) => {
        return wishlistItems.some((item) => item.id === id);
    };

    return (
        <div className="min-h-screen bg-pink-50/30 dark:bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto mb-12 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                    <RiCake3Line className="text-3xl text-pink-600 dark:text-pink-400" />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold text-gray-900 dark:text-foreground mb-4"
                >
                    Celebration Cakes
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-600 dark:text-muted-foreground max-w-2xl mx-auto"
                >
                    Handcrafted with love, perfected with passion. Make every moment sweeter with our premium cake collection.
                </motion.p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {cakes.map((cake, index) => (
                    <motion.div
                        key={cake.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 dark:border-pink-900/20 group"
                    >
                        <div className="relative h-64 overflow-hidden bg-pink-50 dark:bg-muted">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6 }}
                                src={cake.image}
                                alt={cake.name}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={() => handleToggleWishlist(cake)}
                                className="absolute top-3 right-3 w-10 h-10 rounded-full bg-white/90 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform z-10"
                            >
                                {isInWishlist(cake.id) ? (
                                    <RiHeartFill className="text-red-500 text-xl" />
                                ) : (
                                    <RiHeartLine className="text-gray-400 dark:text-gray-300 text-xl hover:text-red-500" />
                                )}
                            </button>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 dark:text-foreground mb-2 truncate">{cake.name}</h3>
                            <p className="text-gray-500 dark:text-muted-foreground text-sm mb-4 line-clamp-2 h-10">{cake.description}</p>

                            <div className="flex items-center justify-between pt-4 border-t border-pink-50 dark:border-pink-900/20">
                                <div>
                                    <span className="text-xs text-gray-500 dark:text-muted-foreground uppercase font-semibold">Starts from</span>
                                    <div className="text-xl font-bold text-pink-600 dark:text-pink-400">₹{cake.price}</div>
                                </div>
                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleAddToCart(cake)}
                                    className="px-6 py-2.5 bg-gray-900 dark:bg-pink-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-gray-200 dark:shadow-none hover:bg-pink-600 dark:hover:bg-pink-700 hover:shadow-pink-200 transition-all flex items-center gap-2"
                                >
                                    <span>ADD</span>
                                    <RiShoppingBag3Line />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <FoodModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                item={selectedCake}
                onAddToBag={(item) => dispatch(addToCart(item))}
            />
        </div>
    );
};

export default Cakes;
