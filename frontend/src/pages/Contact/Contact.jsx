import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiMapPinLine, RiPhoneLine, RiMailLine, RiTimeLine, RiSendPlaneFill } from 'react-icons/ri';
import headerImg from '../../assets/header_img.png';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full min-h-screen bg-background">
            {/* Hero Section */}
            <div className="relative h-[50vh] w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${headerImg})` }}
                />
                <div className="absolute inset-0 bg-black/70" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4"
                >
                    <h1 className="text-5xl md:text-7xl font-['Montserrat',sans-serif] font-bold text-white mb-4 tracking-wide">
                        Get, In Touch
                    </h1>
                    <p className="text-xl text-orange-100 font-light">
                        We'd love to hear from you.
                    </p>
                </motion.div>
            </div>

            {/* Contact Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12"
                    >
                        <div>
                            <h2 className="text-4xl font-bold text-foreground mb-6">Visit Our Kitchen</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                                Experience the aroma of fresh spices and the warmth of our hospitality. Drop by for a meal or just say hello!
                            </p>
                        </div>

                        <div className="grid gap-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-full flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                    <RiMapPinLine />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
                                    <p className="text-muted-foreground">123 Marvel , <br />Thanos Home, Titan - 560038</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-full flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                    <RiPhoneLine />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
                                    <p className="text-muted-foreground cursor-pointer hover:text-orange-600 transition-colors">+91 98765 43210</p>
                                    <p className="text-muted-foreground cursor-pointer hover:text-orange-600 transition-colors">+91 80 1234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-full flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                    <RiMailLine />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
                                    <p className="text-muted-foreground cursor-pointer hover:text-orange-600 transition-colors">hello@goannapurna.com</p>
                                    <p className="text-muted-foreground cursor-pointer hover:text-orange-600 transition-colors">bookings@goannapurna.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-full flex items-center justify-center text-2xl group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300 shrink-0">
                                    <RiTimeLine />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-2">Opening Hours</h3>
                                    <p className="text-muted-foreground">Mon - Sun: 11:00 AM - 11:00 PM</p>
                                    <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Open Now</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-gray-50 dark:bg-muted/10 p-10 rounded-3xl border border-gray-100 dark:border-border shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-8">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-card border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Shubham" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-card border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="Sahu" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-muted-foreground">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-card border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all" placeholder="shahu@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-muted-foreground">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-white dark:bg-card border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all resize-none" placeholder=" Tell us about your experience..." />
                            </div>

                            <button className="w-full bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-700 hover:shadow-xl transition-all flex items-center justify-center gap-2">
                                Send Message <RiSendPlaneFill />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[400px] bg-gray-200 filter grayscale hover:grayscale-0 transition-all duration-700">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124440.093409192!2d77.580643!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1683456789012!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Contact;
