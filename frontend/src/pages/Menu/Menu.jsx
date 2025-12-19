import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import FeaturedFoodSlider from './FeaturedDishesSlider/FeaturedDishesSlider';
import MainPages from './MainPages/MainPages';
import CallToAction from './CallToAction/CallToAction';
const Menu = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full min-h-screen bg-gray-50 dark:bg-background pt-20"
    >
      {/* Featured Section */}
      <FeaturedFoodSlider />

      {/* Main Menu Grid */}
      <div className="py-8">
        <MainPages />
      </div>

      {/* Bottom CTA */}
      <CallToAction />
    </motion.div>
  );
};

export default Menu;
