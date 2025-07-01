import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronUp, FiChevronRight } from 'react-icons/fi';

const navLinks = [
    {
        page: "Home",
        path: "/",
    },
    {
        page: "Membership",
        path: "/membership",
    },
    {
        page: "Services",
        path: "/services",
        dropdown: [
            {
                page: "VVIP Concierge",
                path: "/services/vvip-concierge",
            },
            {
                page: "VVIP Security",
                path: "/services/vvip-security",
            },
            {
                page: "Private Jet Charter",
                path: "/services/private-jet-charter",
            },
        ]
    },
    {
        page: "About",
        path: "/about",
    },
    {
        page: "Blog",
        path: "/blog",
    },
    {
        page: "Contact",
        path: "/contact",
    },
];

const Header = ({moreStyles}) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const navigate = useNavigate();

    return (
        <header className={`fixed w-full z-30 top-0 transition-all duration-300 ${moreStyles} ${isScrolled ? 'bg-black shadow-md py-2' : 'bg-none py-6'}`}>
            <div className={`px-6 md:px-16 lg:px-24 flex justify-between items-center transition-all duration-300 ${isScrolled ? 'py-2' : 'py-0'}`}>
                <div className="flex items-center">
                    <img 
                        src="/logo.png" 
                        alt="Tango Oscar logo" 
                        className={`transition-all duration-300 ${isScrolled ? 'h-12 md:h-16 lg:h-20' : 'h-24 md:h-28 lg:h-36'}`} 
                    />
                </div>

                {/* Desktop Navigation - hidden on mobile */}
                <nav className="hidden md:block">
                    <ul className="flex flex-row items-center space-x-6">
                        {navLinks.map((link, index) => (
                            <li key={index} className="relative group">
                                <a 
                                    href={link.path} 
                                    className="group flex items-center text-white hover:text-bronze transition duration-300"
                                    onClick={(e) => link.dropdown && e.preventDefault()}
                                >
                                    {link.page}
                                    {link.dropdown && (
                                        <FiChevronDown className="ml-1 text-bronze group-hover:rotate-180 transition-all duration-300 ease-in-out" size={14} />
                                    )}
                                </a>
                                {link.dropdown && (
                                    <ul className="absolute left-0 mt-2 w-40 bg-zinc-800 border-t-2 border-t-bronze rounded- py-1 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {link.dropdown.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <a 
                                                    href={item.path} 
                                                    className="flex items-center px-4 py-2 text-white hover:text-bronze transition-colors duration-300 ease-in-out"
                                                >
                                                    {item.page}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    <button onClick={() => {navigate('/auth/signup')}} className="bg-bronze px-3 py-2 rounded-md ml-4">Get Started</button>
                    </ul>
                </nav>

                {/* Mobile Menu Button - visible only on mobile */}
                <button 
                    onClick={toggleMobileMenu}
                    className="md:hidden text-white focus:outline-none z-50"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar - visible only on mobile */}
            <div 
                className={`fixed inset-y-0 left-0 w-64 bg-zinc-800 shadow-lg transform md:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="p-4 border-b border-b-zinc-600">
                    <img src="/logo.png" alt="Tango Oscar logo" className={`h-14 transition-all duration-300 ${isScrolled ? 'h-12' : 'h-24'}`} />
                </div>
                <nav className="p-4">
                    <ul className="space-y-2">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                {link.dropdown ? (
                                    <div>
                                        <button 
                                            onClick={() => toggleDropdown(index)}
                                            className="w-full flex justify-between items-center py-2 text-white hover:text-bronze"
                                        >
                                            <span>{link.page}</span>
                                            {activeDropdown === index ? (
                                                <FiChevronUp size={16} />
                                            ) : (
                                                <FiChevronDown size={16} />
                                            )}
                                        </button>
                                        {activeDropdown === index && (
                                            <ul className="pl-4 mt-1 space-y-1">
                                                {link.dropdown.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <a 
                                                            href={item.path} 
                                                            className="flex items-center py-1.5 text-gray-300 hover:text-bronze"
                                                            onClick={toggleMobileMenu}
                                                        >
                                                            {item.page}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ) : (
                                    <a 
                                        href={link.path} 
                                        className="block py-2 text-white hover:text-bronze"
                                        onClick={toggleMobileMenu}
                                    >
                                        {link.page}
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {/* Overlay for mobile menu - visible only when menu is open on mobile */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 blur-lg z-40 md:hidden"
                    onClick={toggleMobileMenu}
                />
            )}
        </header>
    );
};

export default Header;