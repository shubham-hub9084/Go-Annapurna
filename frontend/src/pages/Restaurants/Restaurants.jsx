import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiMapPinLine, RiStarFill, RiMoneyRupeeCircleLine } from 'react-icons/ri';
import { restaurantsData } from '../../data/restaurantsData';

const Restaurants = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-background pt-24 pb-12 px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-['Montserrat',sans-serif] font-bold text-foreground mb-4"
                >
                    Famous in Moradabad
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                    Discover the most iconic dining spots that define the culinary landscape of our city.
                </motion.p>
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {restaurantsData.map((restaurant, index) => (
                    <motion.div
                        key={restaurant.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                    >
                        {/* Image Container */}
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={restaurant.image}
                                alt={restaurant.name}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
                                <RiStarFill className="text-yellow-500" />
                                <span className="font-bold text-gray-800">{restaurant.rating}</span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-foreground mb-2 truncate">{restaurant.name}</h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{restaurant.description}</p>

                            <div className="space-y-2 mb-6">
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <RiMoneyRupeeCircleLine className="text-lg text-orange-500 mr-2" />
                                    <span>{restaurant.cost}</span>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <div className="w-5 flex justify-center mr-2">
                                        <span className="block w-2 h-2 rounded-full bg-gray-400"></span>
                                    </div>
                                    <span>{restaurant.cuisine}</span>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <RiMapPinLine className="text-lg text-orange-500 mr-2" />
                                    <span className="truncate">{restaurant.location}</span>
                                </div>
                            </div>

                            <button className="w-full py-3 bg-orange-50 text-orange-600 font-bold rounded-xl hover:bg-orange-600 hover:text-white transition-all duration-300">
                                View Menu
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Restaurants;
