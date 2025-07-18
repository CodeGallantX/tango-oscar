
const Signup = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            
            {/* Main Auth Container */}
            <div className="flex min-h-[70vh]">
                {/* Side Illustration - Desktop Only */}
                <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-bronze to-amber items-center justify-center p-12">
                    <div className="text-center text-white">
                        <div className="mb-8">
                            <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Join Our Community</h3>
                        <p className="text-lg opacity-90">Create your account and unlock exclusive premium travel services</p>
                    </div>
                </div>

                {/* Auth Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
                    <div className="w-full max-w-md">
                        {/* Mobile Header */}
                        <div className="lg:hidden text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                            <p className="text-gray-600">Join our premium travel community</p>
                        </div>

                        {/* Desktop Header */}
                        <div className="hidden lg:block mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-2">Create your account</h2>
                            <p className="text-gray-600">Start your journey with premium travel services</p>
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
                            <form className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        id="name" 
                                        placeholder="Enter your full name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bronze focus:border-bronze transition-colors duration-200"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email address
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        id="email" 
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
                                        placeholder="Create a password"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bronze focus:border-bronze transition-colors duration-200"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                        Confirm Password
                                    </label>
                                    <input 
                                        type="password" 
                                        name="confirmPassword" 
                                        id="confirmPassword" 
                                        placeholder="Confirm your password"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bronze focus:border-bronze transition-colors duration-200"
                                        required
                                    />
                                </div>

                                <div className="flex items-center">
                                    <input 
                                        id="terms" 
                                        name="terms" 
                                        type="checkbox" 
                                        className="h-4 w-4 text-bronze focus:ring-bronze border-gray-300 rounded"
                                        required
                                    />
                                    <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                                        I agree to the{' '}
                                        <a href="#" className="text-bronze hover:text-amber-700 font-medium">Terms of Service</a>
                                        {' '}and{' '}
                                        <a href="#" className="text-bronze hover:text-amber-700 font-medium">Privacy Policy</a>
                                    </label>
                                </div>

                                <button 
                                    type="submit" 
                                    className="w-full bg-bronze text-white py-3 px-4 rounded-lg font-medium hover:bg-amber-700 focus:ring-2 focus:ring-bronze focus:ring-offset-2 transition-colors duration-200"
                                >
                                    Create Account
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
                                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <svg className="w-5 h-5" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                                            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                                        </svg>
                                    </button>
                                    <button className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-gray-600">
                                    Already have an account?{' '}
                                    <a href="/auth/login" className="font-medium text-bronze hover:text-amber-700">
                                        Sign in
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

export default Signup; 