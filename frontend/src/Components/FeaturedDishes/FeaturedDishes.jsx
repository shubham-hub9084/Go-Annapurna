import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import { motion } from "framer-motion";
import { RiLeafLine, RiGobletLine, RiAddLine } from "react-icons/ri";
import featuredDishes_1 from "../../assets/fd_1.jpg";
import featuredDishes_2 from "../../assets/fd_2.jpg";
import featuredDishes_3 from "../../assets/fd_3.png";
const featuredDishes = [
  {
    id: 1,
    name: "Chicken Biryani",
    description: "Aromatic basmati rice cooked with tender chicken and exotic spices.",
    price: 299,
    image: featuredDishes_1,
    veg: false,
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Grilled cottage cheese marinated in yogurt and spices.",
    price: 249,
    image: featuredDishes_2,
    veg: true,
  },
  {
    id: 3,
    name: "Masala Dosa",
    description: "Crispy crepe filled with spiced potato curry served with sambar, coconut chutney.",
    price: 179,
    image: featuredDishes_3,
    veg: true,
  },
];

const FeaturedDishes = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (dish) => {
    dispatch(addToCart(dish));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.5rem] font-bold text-foreground mb-4"
          >
            Featured Dishes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-[640px] mx-auto"
          >
            Discover our most popular authentic Indian dishes, prepared with love and traditional recipes passed down through generations
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featuredDishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="bg-card rounded-2xl overflow-hidden shadow-md group hover-lift"
              variants={cardVariants}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-64 object-cover object-top"
                />
                {dish.veg ? (
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-sm text-white flex items-center gap-1 bg-[#38a169]">
                    <RiLeafLine /> Veg
                  </div>
                ) : (
                  <div className="absolute top-4 right-4 px-2 py-1 rounded-full text-sm text-white flex items-center gap-1 bg-[#e53e3e]">
                    <RiGobletLine /> Non-Veg
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{dish.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#dd6b20]">₹{dish.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#c05621" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(dish)}
                    className="bg-[#dd6b20] text-white px-6 py-2.5 font-semibold rounded-lg cursor-pointer whitespace-nowrap transition-colors duration-300 flex items-center gap-2 border-none"
                  >
                    <RiAddLine className="mr-1" /> Add to Cart
                  </motion.button>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
