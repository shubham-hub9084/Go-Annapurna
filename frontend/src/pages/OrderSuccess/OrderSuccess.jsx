import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RiCheckboxCircleFill, RiArrowRightLine, RiHome4Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
// Assuming we might want to clear cart here later, but standard practice is often to clear on 'success' action.
// For now, visual only.

const OrderSuccess = () => {
    // Ideally, clear cart here
    // const dispatch = useDispatch();
    // useEffect(() => { dispatch(clearCart()); }, []);

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="w-24 h-24 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-8"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="text-6xl text-green-500"
                >
                    <RiCheckboxCircleFill />
                </motion.div>
            </motion.div>

            <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold text-foreground mb-4 text-center"
            >
                Order Placed Successfully!
            </motion.h1>

            <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground text-lg mb-12 text-center max-w-md"
            >
                Thank you for choosing Go Annapurna. Your delicious meal is being prepared with love and will reach you shortly.
            </motion.p>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
            >
                <Link
                    to="/"
                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-gray-100 dark:border-border text-foreground font-bold hover:border-gray-200 dark:hover:border-muted hover:bg-gray-50 dark:hover:bg-muted transition-all"
                >
                    <RiHome4Line /> Return Home
                </Link>
                <Link
                    to="/menu"
                    className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-orange-600 text-white font-bold shadow-lg shadow-orange-200 dark:shadow-lg dark:shadow-black/40 hover:bg-orange-700 hover:scale-105 transition-all"
                >
                    Order More <RiArrowRightLine />
                </Link>
            </motion.div>

            <p className="mt-12 text-sm text-muted-foreground">Order ID: #GA-{Math.floor(100000 + Math.random() * 900000)}</p>
        </div>
    );
};

export default OrderSuccess;
