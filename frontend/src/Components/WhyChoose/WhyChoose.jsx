import React from 'react';
import { motion } from 'framer-motion';
import { RiLeafFill, RiTimeFill, RiHeart3Fill } from 'react-icons/ri';

const points = [
  {
    icon: <RiLeafFill />,
    title: "Fresh Ingredients",
    desc: "We source the freshest ingredients and authentic spices directly from India to ensure every dish maintains its traditional flavor and quality.",
    gradient: "from-[rgba(255,222,233,0.7)] to-[rgba(255,154,162,0.7)]",
    shadow: "shadow-[0_4px_12px_rgba(255,106,109,0.18),0_0.5px_2px_rgba(245,183,29,0.1)]",
    iconColor: "text-red-500"
  },
  {
    icon: <RiTimeFill />,
    title: "Fast Delivery",
    desc: "Quick and reliable delivery service ensures your food arrives hot and fresh at your doorstep within 30-45 minutes of ordering.",
    gradient: "from-[rgba(181,255,252,0.7)] to-[rgba(107,233,244,0.7)]",
    shadow: "shadow-[0_4px_12px_rgba(107,233,244,0.18),0_0.5px_2px_rgba(245,183,29,0.1)]",
    iconColor: "text-cyan-600"
  },
  {
    icon: <RiHeart3Fill />,
    title: "Made with Love",
    desc: "Every dish is prepared with care and passion by our experienced chefs who have mastered the art of traditional Indian cooking.",
    gradient: "from-[rgba(255,237,188,0.7)] to-[rgba(255,209,102,0.7)]",
    shadow: "shadow-[0_4px_12px_rgba(255,193,88,0.18),0_0.5px_2px_rgba(245,183,29,0.1)]",
    iconColor: "text-yellow-600"
  },
];

function WhyChoose() {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-[#FFDEE9] via-[#B5FFFC] to-[#FFEDBC] bg-[length:300%_300%] rounded-b-3xl overflow-hidden animate-[gradientAnimation_15s_ease_infinite]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight"
          >
            Why Choose Go Annapurna?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
            We bring you the authentic taste of India with quality ingredients and traditional cooking methods
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {points.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-white/50 h-full"
              key={item.title}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${item.gradient} ${item.shadow} transform rotate-3 transition-transform group-hover:rotate-6`}>
                <span className={`text-3xl ${item.iconColor}`}>
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
