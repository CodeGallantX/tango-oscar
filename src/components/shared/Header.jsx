import { useState } from 'react';
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
                page: "Premium",
                path: "/membership/pricing",
            },
            {
                page: "Private Jet",
                path: "/membership/quotes",
            },
            {
                page: "VVIP",
                path: "/membership/customer-bonuses",
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

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            setActiveDropdown(null);
        }
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <header className={`bg-black/80 shadow-md text-white ${moreStyles}`}>
            <div className="fixed w-full px-6 lg:px-24 py-6 flex justify-between items-start z-20 text-white">
                <div className="flex items-center">
                    <img src="/logo.png" alt="Tango Oscar logo" className="h-56" />
                </div>

                {/* Desktop Navigation - hidden on mobile */}
                <nav className="hidden md:block mt-6">
                    <ul className="flex space-x-6">
                        {navLinks.map((link, index) => (
                            <li key={index} className="relative group">
                                <a 
                                    href={link.path} 
                                    className="group flex items-center text-white hover:text-bronze transition duration-300"
                                    onClick={(e) => link.dropdown && e.preventDefault()}
                                >
                                    {link.page}
                                    {link.dropdown && (
                                        <FiChevronDown className="ml-1 group-hover:rotate-180 transition-all duration-300 ease-in-out" size={14} />
                                    )}
                                </a>
                                {link.dropdown && (
                                    <ul className="absolute left-0 mt-2 w-48 bg-black/70 border-t-2 border-t-bronze shadow-lg shadow-bronze/10 rounded- py-1 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {link.dropdown.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <a 
                                                    href={item.path} 
                                                    className="flex items-center px-4 py-2 text-white hover:bg-amber-50 hover:text-bronze"
                                                >
                                                    <FiChevronRight className="mr-2" size={12} />
                                                    {item.page}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Menu Button - visible only on mobile */}
                <button 
                    onClick={toggleMobileMenu}
                    className="md:hidden text-white focus:outline-none mt-6 z-50"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Sidebar - visible only on mobile */}
            <div 
                className={`fixed inset-y-0 left-0 w-64 bg-black/60 backdrop-blur-md border-r  border-r-bronze shadow-lg transform md:hidden ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="p-4 border-b">
                    <img src="/logo.png" alt="Tango Oscar logo" className="h-28" />
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
                                                            className="flex items-center py-1.5 text-gray-600 hover:text-bronze"
                                                            onClick={toggleMobileMenu}
                                                        >
                                                            <FiChevronRight className="mr-2" size={12} />
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