import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { RiShoppingBag3Line, RiMenu3Line, RiCloseLine, RiRestaurant2Line, RiHeartLine, RiUserLine } from 'react-icons/ri';
import { ModeToggle } from "@/Components/ui/mode-toggle"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const user = useSelector((state) => state.auth.user);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass border-b border-orange-100 dark:border-white/5 shadow-sm sticky top-0 z-[1000] w-full"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMenuOpen(false)}>
            <RiRestaurant2Line className="text-4xl text-orange-600 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-2xl font-bold text-orange-600 tracking-wide group-hover:text-orange-700 transition-colors">Go Annapurna</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {['Home', 'Menu', 'Cakes', 'Restaurants', 'About', 'Contact'].map((item) => (
              <NavLink
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `text-base font-semibold py-2 relative transition-colors duration-300 hover:text-orange-600 group ${isActive ? 'text-orange-600' : 'text-foreground/80'}`
                }
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-orange-600 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Right Side: Cart + Mobile Toggle */}
          <div className="flex items-center gap-4 sm:gap-6">
            <ModeToggle />


            <Link
              to="/wishlist"
              className="relative text-2xl text-foreground transition-all duration-300 hover:text-red-500"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <RiHeartLine />
              </motion.div>
            </Link>

            <Link
              to="/cart"
              className="relative text-2xl text-foreground transition-all duration-300 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <RiShoppingBag3Line />
              </motion.div>
              {totalQuantity > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-2 bg-orange-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {totalQuantity}
                </motion.span>
              )}
            </Link>
            {user ? (
              <div className="hidden md:flex items-center gap-4">
                <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-full border border-orange-100 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                    <RiUserLine className="text-lg" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold leading-none">Welcome</span>
                    <span className="text-sm font-bold text-gray-800 leading-none">{user.name}</span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    localStorage.removeItem('user');
                    window.location.reload();
                  }}
                  title="Logout"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all"
                >
                  <RiCloseLine className="text-xl" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-900 text-white font-bold text-sm hover:bg-orange-600 transition-colors shadow-lg shadow-gray-200 dark:shadow-none hover:shadow-orange-200 dark:hover:shadow-none"
              >
                Sign In
              </Link>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-2xl text-foreground focus:outline-none hover:text-orange-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <RiCloseLine /> : <RiMenu3Line />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-background border-t border-orange-100 dark:border-muted shadow-lg"
          >
            <div className="px-4 pb-4 pt-2 space-y-2">
              {/* Mobile User Profile */}
              {user && (
                <div className="mb-4 p-3 bg-orange-50 rounded-xl border border-orange-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                      <RiUserLine />
                    </div>
                    <span className="font-bold text-gray-800">{user.name}</span>
                  </div>
                  <button
                    onClick={() => {
                      localStorage.removeItem('user');
                      window.location.reload();
                    }}
                    className="text-xs font-bold text-red-500 bg-white px-3 py-1.5 rounded-full border border-red-100 shadow-sm"
                  >
                    Logout
                  </button>
                </div>
              )}

              {['Home', 'Menu', 'Cakes', 'Restaurants', 'About', 'Contact'].map((item) => (
                <NavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-orange-50 hover:text-orange-600 dark:hover:bg-muted ${isActive ? 'text-orange-600 bg-orange-50 dark:bg-muted' : 'text-foreground'}`
                  }
                >
                  {item}
                </NavLink>
              ))}

              {!user && (
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center mt-4 px-4 py-3 rounded-xl bg-gray-900 text-white font-bold"
                >
                  Sign In
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav >
  );
};

export default Navbar;
