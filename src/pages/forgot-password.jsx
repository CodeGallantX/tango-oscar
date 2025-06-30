import Header from "../components/shared/Header";

const ForgotPassword = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            {/* Main Auth Container */}
            <div className="flex min-h-[70vh]">
                {/* Side Illustration - Desktop Only */}
                <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-bronze to-amber-700 items-center justify-center p-12">
                    <div className="text-center text-white">
                        <div className="mb-8">
                            <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 8A6 6 0 006 8c0 3.414 2.865 6.25 6.5 6.5V16h-1a1 1 0 100 2h4a1 1 0 100-2h-1v-1.5c3.635-.25 6.5-3.086 6.5-6.5zM8 6a4 4 0 118 0c0 2.206-1.794 4-4 4s-4-1.794-4-4z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Reset Your Password</h3>
                        <p className="text-lg opacity-90">We'll send you a secure link to reset your password</p>
                    </div>
                </div>

                {/* Auth Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
                    <div className="w-full max-w-md">
                        {/* Mobile Header */}
                        <div className="lg:hidden text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password</h2>
                            <p className="text-gray-600">Enter your email to reset your password</p>
                        </div>

                        {/* Desktop Header */}
                        <div className="hidden lg:block mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Forgot your password?</h2>
                            <p className="text-gray-600">No worries, we'll send you reset instructions</p>
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email address
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        placeholder="Enter your email address"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bronze focus:border-bronze transition-colors duration-200"
                                        required
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-bronze text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 focus:ring-2 focus:ring-bronze focus:ring-offset-2 transition-colors duration-200"
                                >
                                    Send Reset Link
                                </button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Remember your password?{' '}
                                    <a href="/login" className="font-medium text-bronze hover:text-amber-700">
                                        Back to login
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword; 