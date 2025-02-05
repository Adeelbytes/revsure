import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { PhoneCall, Mail, X, Menu } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // Import animations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services", dropdown: ["Web Development", "SEO", "Marketing"] },
    { name: "Clients", path: "/clients", dropdown: ["Enterprise", "Startups", "Freelancers"] },
    { name: "Contact", path: "/contact" },
  ];

  const handleMouseEnter = (name) => setOpenDropdown(name);
  const handleMouseLeave = () => setTimeout(() => setOpenDropdown(null), 100); // Small delay before hiding dropdown

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Contact Information */}
          <div className="flex space-x-6">
            <div className="flex items-center space-x-2">
              <PhoneCall size={16} />
              <span className="text-sm">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} />
              <span className="text-sm">contact@revsure.com</span>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-600"><FaFacebookF size={16} /></a>
            <a href="https://instagram.com" className="hover:text-pink-500"><FaInstagram size={16} /></a>
            <a href="https://linkedin.com" className="hover:text-blue-700"><FaLinkedinIn size={16} /></a>
            <a href="https://twitter.com" className="hover:text-blue-400"><FaTwitter size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <img src="logo.png" alt="RevSure Logo" className="h-16 w-auto" />
            </Link>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-secondary"}`}
                    onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                  >
                    {link.name}
                  </Link>

                  {/* Animated Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-52 bg-white border rounded-lg shadow-lg"
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {link.dropdown.map((item, index) => (
                          <Link
                            key={index}
                            to={`${link.path}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                          >
                            {item}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-secondary" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-secondary"}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>

                  {/* Dropdown for mobile */}
                  {link.dropdown && (
                    <div className="pl-5 mt-1 space-y-1">
                      {link.dropdown.map((item, index) => (
                        <Link key={index} to={`${link.path}/${item.toLowerCase().replace(/\s+/g, "-")}`} className="block text-gray-600 hover:text-primary">
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;