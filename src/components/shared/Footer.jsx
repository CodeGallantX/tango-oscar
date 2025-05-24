import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black w-full py-12 px-6 md:px-24 text-white px-6 md:px-16 lg:px-24">
                {/* Main Footer Content */}
                <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
                    {/* Logo Section */}
                    <div className="w-full md:w-auto">
                        <img 
                            src="/logo.png" 
                            alt="Tango Oscar logo" 
                            className="h-40 md:h-56 w-auto" 
                        />
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full md:w-auto">
                        <div>
                            <h3 className="text-lg font-bold mb-4 text-bronze">Services</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-bronze transition">Luxury Chauffeur</a></li>
                                <li><a href="#" className="hover:text-bronze transition">VVIP Security</a></li>
                                <li><a href="#" className="hover:text-bronze transition">Private Jet Charter</a></li>
                                <li><a href="#" className="hover:text-bronze transition">Global Coverage</a></li>
                                <li><a href="#" className="hover:text-bronze transition">Concierge Services</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4 text-bronze">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-bronze transition">About Us</a></li>
                                <li><a href="#" className="hover:text-bronze transition">Our Team</a></li>
                                <li><a href="#" className="hover:text-bronze transition">Testimonials</a></li>
                                <li><a href="#" className="hover:text-bronze transition">Careers</a></li>
                                <li><a href="#" className="hover:text-bronze transition">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold mb-4 text-bronze">Legal</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-bronze transition">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-bronze transition">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-bronze transition">Cookie Policy</a></li>
                                <li><a href="#" className="hover:text-bronze transition">Security</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-gray-700 my-8" />

                {/* Bottom Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Copyright */}
                    <div className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Tango Oscar. All rights reserved.
                    </div>

                    {/* Social Media */}
                    <div className="flex space-x-4">
                        <a href="#" aria-label="Facebook" className="text-white hover:text-bronze transition">
                            <FaFacebook size={20} />
                        </a>
                        <a href="#" aria-label="Twitter" className="text-white hover:text-bronze transition">
                            <FaTwitter size={20} />
                        </a>
                        <a href="#" aria-label="Instagram" className="text-white hover:text-bronze transition">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" aria-label="LinkedIn" className="text-white hover:text-bronze transition">
                            <FaLinkedin size={20} />
                        </a>
                        <a href="#" aria-label="YouTube" className="text-white hover:text-bronze transition">
                            <FaYoutube size={20} />
                        </a>
                    </div>

                    {/* Contact Info */}
                    <div className="text-gray-400 text-sm text-center md:text-right">
                        <p>24/7 Support: <a href="tel:+1234567890" className="text-white hover:text-bronze">+1 (234) 567-890</a></p>
                        <p>Email: <a href="mailto:info@tangooscar.com" className="text-white hover:text-bronze">info@tangooscar.com</a></p>
                    </div>
            </div>
        </footer>
    )
}

export default Footer;