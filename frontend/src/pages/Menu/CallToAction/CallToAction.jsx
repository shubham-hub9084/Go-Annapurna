import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RiShoppingCart2Line, RiPhoneFill } from "react-icons/ri";
import { motion } from "framer-motion";

const CallToAction = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight"
        >
          Ready to Order Your Favorites?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-orange-100 mb-10 max-w-2xl mx-auto"
        >
          Experience the authentic taste of India delivered fresh to your doorstep. Satisfy your cravings now!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-col gap-4 justify-center items-center sm:flex-row"
        >
          <button
            className="py-4 px-8 text-lg font-bold rounded-xl border-none cursor-pointer shadow-lg transition-all duration-300 hover:scale-105 bg-white text-orange-600 hover:shadow-xl flex items-center gap-2"
            onClick={() => navigate('/cart')}
          >
            <RiShoppingCart2Line className="text-xl" /> View Cart ({cartItems.length})
          </button>

          <button
            className="py-4 px-8 text-lg font-bold rounded-xl cursor-pointer shadow-lg transition-all duration-300 hover:scale-105 bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 flex items-center gap-2"
            onClick={() => window.location.href = 'tel:+919876543210'}
          >
            <RiPhoneFill className="text-xl" /> Call to Order
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
