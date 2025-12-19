import React from "react";
import { motion } from "framer-motion";
import { RiPhoneFill, RiMailFill, RiMapPin2Fill, RiFacebookFill, RiInstagramFill } from "react-icons/ri";

function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#242a36] dark:bg-card text-[#e4ecf6] dark:text-foreground w-full font-sans pt-16 pb-8"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-[#33384b] dark:border-border pb-12">
                    {/* Brand Section */}
                    <div className="flex flex-col items-start gap-4">
                        <span className="text-3xl font-extrabold text-[#f46a1c] select-none">
                            Go Annapurna
                        </span>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            Bringing authentic Indian flavors to your doorstep with traditional recipes and fresh ingredients. Experience the true taste of India.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold text-white relative flex flex-col gap-2">
                            Quick Links
                            <span className="w-12 h-1 bg-[#f46a1c] rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {['Home', 'Menu', 'About Us', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-gray-300 dark:text-muted-foreground hover:text-[#f46a1c] transition-colors duration-200 text-sm font-medium flex items-center gap-2 group"
                                    >
                                        <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300">›</span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold text-white relative flex flex-col gap-2">
                            Contact Info
                            <span className="w-12 h-1 bg-[#f46a1c] rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300 text-sm">
                                <RiPhoneFill className="text-[#f46a1c] text-lg shrink-0 mt-0.5" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 text-sm">
                                <RiMailFill className="text-[#f46a1c] text-lg shrink-0 mt-0.5" />
                                <span>info@goannapurna.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 text-sm">
                                <RiMapPin2Fill className="text-[#f46a1c] text-lg shrink-0 mt-0.5" />
                                <span>E-10, Uttrakhand, India</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col gap-6">
                        <h4 className="text-lg font-bold text-white relative flex flex-col gap-2">
                            Follow Us
                            <span className="w-12 h-1 bg-[#f46a1c] rounded-full"></span>
                        </h4>
                        <p className="text-gray-300 text-sm mb-2">Stay connected with us for new updates and offers.</p>
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                aria-label="Facebook"
                                className="bg-gray-700/50 hover:bg-[#f46a1c] text-white p-3 rounded-full transition-all duration-300"
                            >
                                <RiFacebookFill className="text-xl" />
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                href="#"
                                aria-label="Instagram"
                                className="bg-gray-700/50 hover:bg-[#f46a1c] text-white p-3 rounded-full transition-all duration-300"
                            >
                                <RiInstagramFill className="text-xl" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 text-center text-gray-400 text-sm">
                    <p>© 2025 Go Annapurna. All rights reserved. | Made with <span className="text-red-500 animate-pulse">❤️</span> for food lovers</p>
                </div>
            </div>
        </motion.footer>
    );
}

export default Footer;
