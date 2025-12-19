import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { RiGoogleFill, RiFacebookFill, RiMailLine, RiLockPasswordLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import headerImg from "../../assets/header_img.png";
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = React.useState(false);
    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                dispatch(login(data.user)); // Dispatch login action
                alert(data.message);
                navigate("/menu");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div className="min-h-screen w-full flex bg-background">
            {/* Left Side - Image */}
            <div className="hidden lg:flex w-1/2 relative bg-gray-900 overflow-hidden items-center justify-center">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-60 mix-blend-overlay"
                    style={{ backgroundImage: `url(${headerImg})` }}
                />
                <div className="relative z-10 p-12 text-center text-white max-w-lg">
                    <h2 className="text-5xl font-['Montserrat',sans-serif] font-bold mb-6">Welcome Back</h2>
                    <p className="text-xl text-gray-200 font-light leading-relaxed">
                        Log in to continue your journey through the authentic flavors of India.
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-gray-50 dark:bg-background">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="w-full max-w-md space-y-8"
                >
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-foreground">Sign in to your account</h2>
                        <p className="mt-2 text-muted-foreground">
                            Don't have an account?{' '}
                            <Link to="/signup" className="font-bold text-orange-600 hover:text-orange-500">
                                Sign up free
                            </Link>
                        </p>
                    </div>

                    <form className="mt-8 space-y-6" onSubmit={handleLogin}>
                        <div className="space-y-4">
                            <div className="relative">
                                <label className="text-sm font-bold text-muted-foreground mb-1 block">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                                        <RiMailLine />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-card border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <div className="relative">
                                <label className="text-sm font-bold text-muted-foreground mb-1 block">Password</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-muted-foreground">
                                        <RiLockPasswordLine />
                                    </div>
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-10 pr-10 py-3 rounded-xl bg-white dark:bg-card border border-gray-200 dark:border-border text-foreground focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
                                    >
                                        {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-muted-foreground">
                                    Keep me signed in
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-orange-600 hover:text-orange-500">
                                    Forgot password?
                                </a>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-lg shadow-orange-200 text-sm font-bold text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all hover:scale-[1.02]"
                        >
                            Sign in
                        </button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-200 dark:border-border"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-gray-50 dark:bg-background text-muted-foreground">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button type="button" className="w-full inline-flex justify-center py-3 px-4 rounded-xl shadow-sm bg-white dark:bg-card text-sm font-medium text-muted-foreground border border-gray-200 dark:border-border hover:bg-gray-50 dark:hover:bg-muted transition-all">
                                <RiGoogleFill className="text-xl text-red-500 mr-2" /> Google
                            </button>
                            <button type="button" className="w-full inline-flex justify-center py-3 px-4 rounded-xl shadow-sm bg-[#1877F2] text-sm font-medium text-white hover:bg-[#166fe5] transition-all">
                                <RiFacebookFill className="text-xl text-white mr-2" /> Facebook
                            </button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
};
export default Login;
