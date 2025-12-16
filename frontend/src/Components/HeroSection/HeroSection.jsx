// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../assets/header_img.png";

const HeroSection = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat relative flex items-center justify-center overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-black/50 before:z-0 before:pointer-events-none"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <motion.div
        className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-['Montserrat',sans-serif] text-[clamp(2.5rem,6vw,3.5rem)] font-extrabold mb-4 tracking-[3px] uppercase text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.4)]"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          Go Annapurna
        </motion.h1>

        <motion.p
          className="font-['Montserrat',sans-serif] text-[clamp(1.3rem,4vw,1.7rem)] font-semibold mb-4 text-[#ffe49e] drop-shadow-[0_3px_10px_rgba(0,0,0,0.35)]"
          variants={itemVariants}
        >
          Authentic Indian Cuisine Delivered to Your Doorstep
        </motion.p>

        <motion.p
          className="font-['Montserrat',sans-serif] text-[clamp(1.1rem,3vw,1.2rem)] mb-8 leading-[1.7] text-[#eee] whitespace-pre-line"
          variants={itemVariants}
        >
          Experience the rich flavors and traditions of India with our carefully crafted dishes,<br />
          made from the finest ingredients and time-honored recipes
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-5 justify-center sm:flex-col sm:items-center"
          variants={itemVariants}
        >
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#fb6c04" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/menu')}
            className="border-0 py-[0.85rem] px-[2.4rem] text-[1.15rem] font-bold rounded-xl cursor-pointer shadow-[0_6px_18px_rgba(255,127,35,0.35)] select-none bg-[#ff7f23] text-white sm:w-full sm:max-w-[260px]"
          >
            Order Now
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#ffffff", color: "#ff7f23" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/menu')}
            className="border-2 border-white py-[0.85rem] px-[2.4rem] text-[1.15rem] font-bold rounded-xl cursor-pointer shadow-[0_4px_12px_rgba(0,0,0,0.12)] select-none bg-transparent text-white sm:w-full sm:max-w-[260px]"
          >
            Explore Menu
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
