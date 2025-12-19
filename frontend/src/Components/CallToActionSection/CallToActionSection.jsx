import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { RiRestaurantLine, RiPhoneFill } from 'react-icons/ri';

function CallToActionSection() {
  const navigate = useNavigate();
  return (
    <section className="w-full py-20 bg-gradient-to-r from-[#fa1414] to-[#fb8c25] dark:from-background dark:to-background relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold text-white dark:text-foreground mb-6 tracking-tight drop-shadow-md"
          >
            Ready to Experience Authentic Indian Flavors?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-orange-50 dark:text-muted-foreground mb-10 max-w-2xl leading-relaxed"
          >
            Join thousands of satisfied customers who have made Go-Annapurna their favorite destination for delicious, traditional Indian cuisine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/menu')}
              className="px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <RiRestaurantLine className="text-xl" />
              View Full Menu
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
              className="px-8 py-4 bg-orange-600/20 backdrop-blur-sm border-2 border-white text-white rounded-xl font-bold text-lg shadow-lg hover:bg-white hover:text-orange-600 transition-all flex items-center justify-center gap-2"
            >
              <RiPhoneFill className="text-xl" />
              Call Now
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CallToActionSection;
