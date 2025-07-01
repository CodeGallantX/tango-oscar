import { useState } from 'react';
import { FaLock, FaGoogle, FaTwitter, FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Validate inputs
            if (!email || !password) {
                throw new Error('Please fill in all fields');
            }

            // Show success toast
            toast.success('Login successful! Redirecting to dashboard...', {
                autoClose: 2000,
                onClose: () => navigate('/dashboard') // Redirect after toast closes
            });

        } catch (error) {
            toast.error(error.message || 'Login failed. Please try again.');
            setIsLoading(false);
        }
    };

    const handleSocialLogin = (provider) => {
        toast.info(`Redirecting to ${provider} login...`);
        // Implement actual social login logic
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Auth Container */}
            <div className="flex min-h-[70vh]">
                {/* Side Illustration - Desktop Only */}
                <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-bronze to-amber-700 items-center justify-center p-12">
                    <div className="text-center text-white">
                        <div className="mb-8">
                            <FaLock className="w-24 h-24 mx-auto mb-4" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Welcome Back</h3>
                        <p className="text-lg opacity-90">Access your premium travel services and exclusive member benefits</p>
                    </div>
                </div>

                {/* Auth Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
                    <div className="w-full max-w-lg">
                        {/* Mobile Header */}
                        <div className="lg:hidden text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                            <p className="text-gray-600">Sign in to your account</p>
                        </div>

                        {/* Desktop Header */}
                        <div className="hidden lg:block mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Sign in to your account</h2>
                            <p className="text-gray-600">Enter your credentials to access your account</p>
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email address
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bronze focus:border-bronze transition-colors duration-200"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Password
                                    </label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Enter your password"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bronze focus:border-bronze transition-colors duration-200"
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input 
                                            id="remember-me" 
                                            name="remember-me" 
                                            type="checkbox" 
                                            checked={rememberMe}
                                            onChange={(e) => setRememberMe(e.target.checked)}
                                            className="h-4 w-4 text-bronze focus:ring-bronze border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div>
                                    <a href="/forgot-password" className="text-sm text-bronze hover:text-amber-700 font-medium">
                                        Forgot password?
                                    </a>
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isLoading}
                                    className="w-full bg-bronze text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 focus:ring-2 focus:ring-bronze focus:ring-offset-2 transition-colors duration-200 flex justify-center items-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <FaSpinner className="animate-spin" />
                                            Signing in...
                                        </>
                                    ) : (
                                        'Sign in'
                                    )}
                                </button>
                            </form>

                            <div className="mt-6">
                                <div className="relative">
                                    <div className="absolute inset-0 flex items-center">
                                        <div className="w-full border-t border-gray-300" />
                                    </div>
                                    <div className="relative flex justify-center text-sm">
                                        <span className="px-2 bg-white text-gray-500">Or continue with</span>
                                    </div>
                                </div>

                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <button 
                                        type="button"
                                        onClick={() => handleSocialLogin('Google')}
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <FaGoogle className="w-5 h-5" />
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={() => handleSocialLogin('Twitter')}
                                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                                    >
                                        <FaTwitter className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Don't have an account?{' '}
                                    <a href="/auth/signup" className="font-medium text-bronze hover:text-amber-700">
                                        Sign up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;