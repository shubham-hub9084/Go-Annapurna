import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../store/cartSlice";
import { toggleWishlist } from "../../../store/wishlistSlice";
import { motion, AnimatePresence } from "framer-motion";
import { RiSearchLine, RiShoppingBag3Line, RiRestaurant2Line, RiRestaurantLine, RiSeedlingLine, RiGobletLine, RiCake3Line, RiCupLine, RiHeartLine, RiHeartFill } from "react-icons/ri";
import { menuItems } from "../../../assets/foodImages";
import FoodModal from "../../../Components/FoodModal/FoodModal";

// Helper Component for Veg/Non-Veg Icon
const VegIcon = ({ type }) => (
  <div className={`w-4 h-4 border-[2px] ${type === 'veg' ? 'border-green-600' : 'border-red-600'} p-[2px] flex items-center justify-center shrink-0`}>
    <div className={`w-full h-full rounded-full ${type === 'veg' ? 'bg-green-600' : 'bg-red-600'}`} />
  </div>
);

const MainPages = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const handleAddToCart = (dish) => {
    // If dish has variants or addons, open modal
    if ((dish.variants && dish.variants.length > 0) || (dish.addons && dish.addons.length > 0)) {
      setSelectedDish(dish);
      setIsModalOpen(true);
    } else {
      dispatch(addToCart(dish));
    }
  };

  const handleModalAddToBag = (customizedDish) => {
    dispatch(addToCart(customizedDish));
  };

  const handleToggleWishlist = (dish) => {
    dispatch(toggleWishlist(dish));
  };

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  const categories = [
    { id: "all", name: "All", icon: <RiRestaurant2Line /> },
    { id: "favorites", name: "Favorites", icon: <RiHeartLine /> },
    { id: "street-food", name: "Street Food", icon: <RiRestaurantLine /> },
    { id: "appetizers", name: "Starters", icon: <RiSeedlingLine /> },
    { id: "main-courses", name: "Main Course", icon: <RiGobletLine /> },
    { id: "desserts", name: "Desserts", icon: <RiCake3Line /> },
    { id: "beverages", name: "Drinks", icon: <RiCupLine /> },
  ];

  const filteredItems = menuItems.filter((item) => {
    let matchesCategory;
    if (selectedCategory === "favorites") {
      matchesCategory = isInWishlist(item.id);
    } else {
      matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    }

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  return (
    <div className="w-full relative min-h-screen pb-20">

      {/* Sticky Filter Bar */}
      <div className="sticky top-20 z-40 bg-white/90 dark:bg-background/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-border py-4 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Horizontal Categories */}
          <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap
                    ${selectedCategory === cat.id
                    ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg scale-105"
                    : "bg-gray-100 dark:bg-muted text-gray-600 dark:text-muted-foreground hover:bg-gray-200 dark:hover:bg-muted/80 hover:text-gray-900 dark:hover:text-foreground"}
                  `}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Compact Search */}
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-muted border-none rounded-full text-sm focus:ring-2 focus:ring-orange-500 focus:bg-white dark:focus:bg-card transition-all outline-none dark:text-foreground"
            />
            <RiSearchLine className="absolute left-3.5 top-2.5 text-gray-400 dark:text-muted-foreground" />
          </div>
        </div>
      </div>

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={selectedCategory + searchQuery}
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                variants={itemVariants}
                layout
                className="bg-white dark:bg-card rounded-2xl p-3 shadow-sm border border-gray-100/50 dark:border-border hover:shadow-xl hover:border-orange-100 dark:hover:border-orange-900/30 transition-all duration-300 group flex flex-col"
                key={item.id}
              >
                {/* Image Area */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-gray-50 dark:bg-muted">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={item.image?.default || item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/400x300?text=No+Image"; }}
                  />
                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleToggleWishlist(item);
                    }}
                    className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/90 dark:bg-black/50 backdrop-blur-sm flex items-center justify-center shadow-md hover:scale-110 transition-transform z-10"
                  >
                    {isInWishlist(item.id) ? (
                      <RiHeartFill className="text-red-500 text-lg" />
                    ) : (
                      <RiHeartLine className="text-gray-500 dark:text-muted-foreground text-lg hover:text-red-500" />
                    )}
                  </button>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow px-1">
                  <div className="flex justify-between items-start gap-2 mb-1">
                    <h3 className="font-bold text-foreground text-base leading-tight line-clamp-1">{item.name}</h3>
                    <VegIcon type={item.dietary} />
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4 h-8">{item.description}</p>

                  <div className="mt-auto flex items-center justify-between border-t border-gray-50 dark:border-border pt-3">
                    <span className="text-lg font-bold text-foreground">₹{item.price}</span>

                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleAddToCart(item)}
                      className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md shadow-orange-200 dark:shadow-lg dark:shadow-black/40 hover:bg-orange-700 hover:shadow-lg transition-all flex items-center gap-1.5"
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

        {filteredItems.length === 0 && (
          <div className="text-center py-24 opacity-60">
            <div className="text-6xl mb-4">🍽️</div>
            <p className="text-muted-foreground text-lg font-medium">No dishes found</p>
          </div>
        )}
      </div>


      <FoodModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={selectedDish}
        onAddToBag={handleModalAddToBag}
      />
    </div>
  );
};

export default MainPages;
