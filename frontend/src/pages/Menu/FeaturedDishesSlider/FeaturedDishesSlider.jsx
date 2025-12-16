import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import { motion, AnimatePresence } from "framer-motion";
import { RiArrowLeftSLine, RiArrowRightSLine, RiShoppingBag3Line } from "react-icons/ri";

import {
  butterChickenImg,
  chickenBiryaniImg,
  tandooriPlatterImg,
  paneerTikkaImg,
  masalaChaiImg
} from "../../../assets/foodImages";

const featuredDishes = [
  {
    id: 1,
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato and butter gravy with aromatic spices.",
    price: 349,
    image: butterChickenImg,
  },
  {
    id: 2,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with spiced chicken and saffron.",
    price: 399,
    image: chickenBiryaniImg,
  },
  {
    id: 3,
    name: "Tandoori Platter",
    description: "Assorted grilled delicacies marinated in traditional yogurt spices.",
    price: 599,
    image: tandooriPlatterImg,
  },
  {
    id: 4,
    name: "Paneer Tikka",
    description: "Chunks of paneer marinated in spices and grilled in a tandoor.",
    price: 249,
    image: paneerTikkaImg,
  },
  {
    id: 5,
    name: "Masala Chai",
    description: "Traditional Indian tea brewed with aromatic spices and herbs.",
    price: 49,
    image: masalaChaiImg,
  },
];

const FeaturedDishesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dispatch = useDispatch();

  const handleAddToCart = (dish) => {
    dispatch(addToCart(dish));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === featuredDishes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? featuredDishes.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-6 bg-transparent w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full h-[400px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl border border-gray-100/50">
          <AnimatePresence mode="wait">
            {featuredDishes.map((dish, index) => {
              let positionClass = "opacity-0 pointer-events-none z-0";
              if (index === currentSlide) {
                positionClass = "opacity-100 z-10";
              }

              return (
                <div
                  className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${positionClass}`}
                  key={dish.id}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10" />
                  <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />

                  <div className="absolute top-0 left-0 w-full h-full p-8 md:p-16 z-20 text-white flex flex-col justify-center items-start">
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={index === currentSlide ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="max-w-2xl"
                    >
                      <span className="inline-block px-4 py-1.5 bg-orange-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4 shadow-sm">
                        Featured Deal
                      </span>
                      <h3 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight drop-shadow-lg">{dish.name}</h3>
                      <p className="mb-8 text-lg text-gray-100 font-medium leading-relaxed drop-shadow-md">{dish.description}</p>

                      <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-300 uppercase tracking-widest font-semibold">Price</span>
                          <span className="text-4xl font-extrabold text-orange-400">₹{dish.price}</span>
                        </div>
                        <button
                          className="py-4 px-8 bg-white text-gray-900 rounded-xl text-base font-bold shadow-2xl hover:bg-gray-100 hover:scale-105 transition-all flex items-center gap-2 group"
                          onClick={() => handleAddToCart(dish)}
                        >
                          <RiShoppingBag3Line className="text-orange-600 text-xl group-hover:scale-110 transition-transform" /> Order Now
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              );
            })}
          </AnimatePresence>

          {/* Controls */}
          <div className="absolute bottom-8 right-8 flex gap-4 z-30">
            <button
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white text-2xl hover:bg-orange-600 hover:border-orange-600 transition-all active:scale-95"
              onClick={prevSlide}
            >
              <RiArrowLeftSLine />
            </button>
            <button
              className="w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white text-2xl hover:bg-orange-600 hover:border-orange-600 transition-all active:scale-95"
              onClick={nextSlide}
            >
              <RiArrowRightSLine />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishesSlider;
