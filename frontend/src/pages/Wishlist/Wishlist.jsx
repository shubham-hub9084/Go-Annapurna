import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { RiShoppingBag3Line, RiHeartFill, RiArrowRightLine, RiDeleteBinLine } from "react-icons/ri";
import { addToCart } from "../../store/cartSlice";
import { toggleWishlist } from "../../store/wishlistSlice";

const Wishlist = () => {
    const wishlistItems = useSelector((state) => state.wishlist.items);
    const dispatch = useDispatch();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    };

    const handleRemoveFromWishlist = (item) => {
        dispatch(toggleWishlist(item));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    if (wishlistItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500 text-4xl">
                        <RiHeartFill />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Wishlist is Empty</h2>
                    <p className="text-gray-500 mb-8">Save your favorite dishes here for quick ordering.</p>
                    <Link
                        to="/menu"
                        className="bg-orange-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-orange-700 transition-all inline-flex items-center gap-2"
                    >
                        Explore Menu <RiArrowRightLine />
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <span className="bg-red-500 text-white w-10 h-10 rounded-lg flex items-center justify-center text-xl">
                        <RiHeartFill />
                    </span>
                    Your Favorites
                </h1>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <AnimatePresence>
                        {wishlistItems.map((item) => (
                            <motion.div
                                variants={itemVariants}
                                layout
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="bg-white rounded-2xl p-3 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col group"
                                key={item.id}
                            >
                                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-50">
                                    <img
                                        src={item.image?.default || item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        onClick={() => handleRemoveFromWishlist(item)}
                                        className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md hover:bg-red-50 text-red-500 transition-colors z-10"
                                        title="Remove from Wishlist"
                                    >
                                        <RiDeleteBinLine />
                                    </button>
                                </div>

                                <div className="flex flex-col flex-grow px-1">
                                    <h3 className="font-bold text-gray-800 text-base leading-tight line-clamp-1 mb-1">{item.name}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 h-8">{item.description}</p>

                                    <div className="mt-auto flex items-center justify-between border-t border-gray-50 pt-3">
                                        <span className="text-lg font-bold text-gray-900">₹{item.price}</span>

                                        <motion.button
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => handleAddToCart(item)}
                                            className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-orange-200 hover:bg-orange-700 hover:shadow-lg transition-all flex items-center gap-1.5"
                                        >
                                            <span className="text-xs">ADD</span>
                                            <RiShoppingBag3Line className="text-sm" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Wishlist;
