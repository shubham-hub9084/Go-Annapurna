import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RiMapPinLine, RiSecurePaymentLine, RiCheckLine, RiMoneyDollarCircleLine, RiBankCardLine } from "react-icons/ri";

const Checkout = () => {
    const { items, totalAmount } = useSelector((state) => state.cart);
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState("card");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (items.length === 0) {
        navigate("/cart");
        return null;
    }

    const calculateTax = (amount) => amount * 0.05;
    const shippingCost = totalAmount > 500 ? 0 : 40;
    const finalTotal = totalAmount + calculateTax(totalAmount) + shippingCost;

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            navigate("/order-success");
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-background py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-foreground">Checkout</h1>
                    <button
                        onClick={() => navigate('/cart')}
                        className="text-orange-600 hover:text-orange-700 font-semibold text-sm flex items-center gap-1 transition-colors"
                    >
                        ← Back to Cart
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Forms */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Delivery Address */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-border"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/20 text-orange-600 rounded-full flex items-center justify-center text-xl">
                                    <RiMapPinLine />
                                </div>
                                <h2 className="text-xl font-bold text-foreground">Delivery Address</h2>
                            </div>

                            <form id="checkout-form" onSubmit={handlePlaceOrder} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground">First Name</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-muted border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground">Last Name</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-muted border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground">Street Address</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-muted border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="House No, Street Name" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground">City</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-muted border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground">Pincode</label>
                                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-muted border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground">Phone Number</label>
                                    <input required type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-muted border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" />
                                </div>
                            </form>
                        </motion.div>

                        {/* Payment Method */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="bg-white dark:bg-card p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-border"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center text-xl">
                                    <RiSecurePaymentLine />
                                </div>
                                <h2 className="text-xl font-bold text-foreground">Payment Method</h2>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod("card")}
                                    className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${paymentMethod === "card" ? "border-orange-500 bg-orange-50 dark:bg-orange-900/10" : "border-gray-100 dark:border-border hover:border-orange-200"}`}
                                >
                                    <div className="w-10 h-10 bg-white dark:bg-muted rounded-full flex items-center justify-center text-orange-600 text-xl shadow-sm">
                                        <RiBankCardLine />
                                    </div>
                                    <div className="text-left">
                                        <span className="block font-bold text-foreground">UPI / Card</span>
                                        <span className="text-xs text-muted-foreground">Fast & Secure</span>
                                    </div>
                                    {paymentMethod === "card" && <RiCheckLine className="ml-auto text-orange-600 text-xl" />}
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setPaymentMethod("cod")}
                                    className={`p-4 rounded-xl border-2 flex items-center gap-3 transition-all ${paymentMethod === "cod" ? "border-orange-500 bg-orange-50 dark:bg-orange-900/10" : "border-gray-100 dark:border-border hover:border-orange-200"}`}
                                >
                                    <div className="w-10 h-10 bg-white dark:bg-muted rounded-full flex items-center justify-center text-green-600 text-xl shadow-sm">
                                        <RiMoneyDollarCircleLine />
                                    </div>
                                    <div className="text-left">
                                        <span className="block font-bold text-foreground">Cash on Delivery</span>
                                        <span className="text-xs text-muted-foreground">Pay when you get it</span>
                                    </div>
                                    {paymentMethod === "cod" && <RiCheckLine className="ml-auto text-orange-600 text-xl" />}
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-1">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-white dark:bg-card p-6 rounded-2xl shadow-lg border border-orange-100 dark:border-border sticky top-24"
                        >
                            <h2 className="text-xl font-bold text-foreground mb-6">Order Summary</h2>

                            <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                                {items.map((item) => (
                                    <div key={item.id} className="flex gap-3 text-sm">
                                        <div className="w-12 h-12 bg-gray-100 dark:bg-muted rounded-lg overflow-hidden shrink-0">
                                            <img src={item.image?.default || item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow">
                                            <p className="font-bold text-foreground line-clamp-1">{item.name}</p>
                                            <p className="text-muted-foreground">Qty: {item.quantity}</p>
                                        </div>
                                        <span className="font-bold text-foreground">₹{item.totalPrice}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-gray-100 dark:border-border pt-4 space-y-3 mb-6">
                                <div className="flex justify-between text-muted-foreground text-sm">
                                    <span>Subtotal</span>
                                    <span>₹{totalAmount}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground text-sm">
                                    <span>Tax (5%)</span>
                                    <span>₹{calculateTax(totalAmount).toFixed(0)}</span>
                                </div>
                                <div className="flex justify-between text-muted-foreground text-sm">
                                    <span>Delivery</span>
                                    <span>{shippingCost === 0 ? "FREE" : `₹${shippingCost}`}</span>
                                </div>
                                <div className="flex justify-between items-center pt-2 border-t border-dashed border-gray-200 dark:border-border">
                                    <span className="text-lg font-bold text-foreground">Total</span>
                                    <span className="text-2xl font-bold text-orange-600">₹{finalTotal.toFixed(0)}</span>
                                </div>
                            </div>

                            <button
                                form="checkout-form"
                                disabled={loading}
                                className="w-full py-4 bg-orange-600 text-white rounded-xl font-bold text-lg hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
                            >
                                {loading ? (
                                    <span className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                ) : (
                                    `Place Order - ₹${finalTotal.toFixed(0)}`
                                )}
                            </button>
                            <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground text-xs text-center">
                                <RiSecurePaymentLine />
                                <p>SSL Secured Checkout</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
