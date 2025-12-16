import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiLeafLine, RiFireLine, RiHeartLine, RiRestaurant2Line } from 'react-icons/ri';
import headerImg from '../../assets/header_img.png';
import { masalaChaiImg, tandooriPlatterImg } from '../../assets/foodImages';

const About = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { label: "Years of Service", value: "10+" },
        { label: "Happy Customers", value: "50k+" },
        { label: "Authentic Dishes", value: "100+" },
        { label: "Chefs", value: "15+" }
    ];

    return (
        <div className="w-full min-h-screen bg-white">
            {/* Hero Section */}
            <div className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${headerImg})` }}
                />
                <div className="absolute inset-0 bg-black/60" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center px-4 max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-['Montserrat',sans-serif] font-bold text-white mb-6 tracking-wide drop-shadow-lg">
                        Our Story
                    </h1>
                    <p className="text-xl md:text-2xl text-orange-100 font-light leading-relaxed">
                        Bringing the authentic soul of Indian culinary traditions to your plate since 2013.
                    </p>
                </motion.div>
            </div>

            {/* The Journey Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl z-10">
                            <img src={tandooriPlatterImg} alt="Our Kitchen" className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700" />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl -z-0"></div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-50 rounded-full blur-3xl -z-0"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">Who We Are</h2>
                        <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Rooted in Tradition, <br />Driven by Passion</h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            Go Annapurna wasn't just built to sell food; it was created to share a culture. Founded by a family of passionate food lovers, we believed that authentic Indian cuisine is an art form that deserves to be experienced in its purest form.
                        </p>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            From the bustling streets of Mumbai via our Vada Pav to the royal kitchens of Lucknow via our Biryanis, every dish we serve tells a story of heritage, spices, and love.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, idx) => (
                                <div key={idx} className="border-l-4 border-orange-500 pl-4">
                                    <h4 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h4>
                                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wide">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">The Go Annapurna Standard</h2>
                        <p className="text-lg text-gray-600">We refuse to compromise on quality. Here is what makes every bite special.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: <RiLeafLine />, title: "Fresh Ingredients", desc: "We source our produce daily from local farmers to ensure peak freshness and flavor in every meal." },
                            { icon: <RiFireLine />, title: "Traditional Methods", desc: "No shortcuts. We slow-cook our curries and roast our spices just like it's done in traditional home kitchens." },
                            { icon: <RiHeartLine />, title: "Made with Love", desc: "Our chefs treat every dish as a masterpiece, pouring passion and dedication into every recipe." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 text-center group border border-gray-100"
                            >
                                <div className="w-16 h-16 mx-auto bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="relative py-24 px-4 overflow-hidden bg-orange-600">
                <div
                    className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
                    style={{ backgroundImage: `url(${masalaChaiImg})` }}
                />
                <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Come Taste the Authenticity</h2>
                    <p className="text-xl text-orange-100 mb-10">Whether it's a quick snack or a grand feast, we are ready to serve you.</p>
                    <a
                        href="/menu"
                        className="inline-flex items-center gap-2 bg-white text-orange-600 px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-orange-50 transition-all hover:scale-105 transform"
                    >
                        <RiRestaurant2Line /> Explore Our Menu
                    </a>
                </div>
            </section>
        </div>
    );
};

export default About;
