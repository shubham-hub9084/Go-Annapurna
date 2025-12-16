import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import FeaturedDishes from './Components/FeaturedDishes/FeaturedDishes';
import WhyChoose from './Components/WhyChoose/WhyChoose';
import CallToActionSection from './Components/CallToActionSection/CallToActionSection';
import Footer from './Components/Footer/Footer';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import OrderSuccess from './pages/OrderSuccess/OrderSuccess';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Wishlist from './pages/Wishlist/Wishlist';
import Restaurants from './pages/Restaurants/Restaurants';
import Cakes from './pages/Cakes/Cakes';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <FeaturedDishes />
              <WhyChoose />
              <CallToActionSection />
            </>
          }
        />

        {/* Menu Page */}
        <Route path="/menu" element={<Menu />} />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />

        {/* Restaurants Page */}
        <Route path="/restaurants" element={<Restaurants />} />

        {/* Cart Page */}
        <Route path="/cart" element={<Cart />} />

        {/* Checkout System */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        {/* Wishlist */}
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Cakes Page */}
        <Route path="/cakes" element={<Cakes />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
