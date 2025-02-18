import bg from '/src/assets/bg.jpg';
import logo from "/src/assets/logo.png";
import { ChevronDown, PhoneCall, Mail, X, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ClientBase from "../components/home_components/ClientsBase"
import FeatureSection from "../components/home_components/FeatureSection"
import ServicesSection from "../components/home_components/ServicesSection";
import TestimonialSection from "../components/home_components/TestimonialSection";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [mobileDropdown, setMobileDropdown] = useState(null);
    const location = useLocation();
  
    useEffect(() => {
      const handleScroll = () => setScrolled(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const navLinks = [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
      {
        name: "Services",
        path: "/services",
        dropdown: [
          { name: "Medical Billing Services", path: "/MedicalBilling" },
          { name: "Medical Coding Services", path: "/MedicalCoding" },
          { name: "Credentialing Services", path: "/CredentialingPage" },
          { name: "Denial Management", path: "/DenialManagementPage" },
          { name: "Eligibility Verification", path: "/EligibilityVerification" },
          { name: "Revenue Cycle Management", path: "/RCMServices" },
        ],
      },
      {
        name: "Clients",
        path: "/clients",
        dropdown: [
          { name: "Healthcare Systems", path: "/healthcare-systems" },
          { name: "Emergency Rooms", path: "/emergency-rooms" },
          { name: "Urgent Cares", path: "/urgent-cares" },
          { name: "Hospitals", path: "/hospitals" },
          { name: "Private Practices", path: "/private-practices" },
          { name: "Clinics & Imaging Centers", path: "/clinics-imaging-centers" },
        ],
      },
      { name: "Contact", path: "/contact" },
    ];
  
    const handleMouseEnter = (name) => setOpenDropdown(name);
    const handleMouseLeave = () => setTimeout(() => setOpenDropdown(null), 200);
  
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <div className="bg-primary text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center sm:justify-between items-center gap-4">
          {/* Contact Information */}
          <div className="flex flex-wrap justify-center sm:justify-start space-x-4 sm:space-x-6">
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
          <div className="flex space-x-4 justify-center sm:justify-end">
            <a href="https://facebook.com" className="hover:text-blue-600">
              <FaFacebookF size={16} />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500">
              <FaInstagram size={16} />
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-700">
              <FaLinkedinIn size={16} />
            </a>
            <a href="https://twitter.com" className="hover:text-blue-400">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex flex-col items-center text-white bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <nav className={`fixed ${!scrolled?'top-10':'top-0'}  left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-primary backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="RevSure Logo" className={`transition-all duration-300 ${scrolled ? "h-16 w-auto" : "h-24 w-auto"}`} />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:justify-between md:gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.path}
                    className={`text-sm font-medium flex items-center gap-1 min-w-max transition-colors hover:text-primary ${
                      location.pathname === link.path ? "text-secondary" : "text-white"
                    }`}
                    onMouseEnter={() => link.dropdown && handleMouseEnter(link.name)}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && openDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute -right-20 transform translate-x-full mt-2 w-52 bg-white border rounded-lg shadow-lg"
                        onMouseEnter={() => handleMouseEnter(link.name)}
                        onMouseLeave={handleMouseLeave}
                      >

                        {link.dropdown.map((item, index) => (
                          <Link key={index} to={item.path} className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-all duration-200">
                            {item.name}
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

        {/* Mobile Navigation */}
        {/* Mobile menu */}
{isOpen && (
  <div className="md:hidden bg-white/95 backdrop-blur-md">
    <div className="px-2 pt-2 pb-3 space-y-1">
      {navLinks.map((link) => (
        <div key={link.name} className="relative">
          <Link
            to={link.path}
            className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-secondary"}`}
            onClick={() => setIsOpen(false)} // Close menu when a link is clicked
          >
            {link.name}
          </Link>

          {/* Dropdown for mobile */}
          {link.dropdown && (
            <div className="pl-5 mt-1 space-y-1">
              {link.dropdown.map((item, index) => (
                <Link 
                  key={index} 
                  to={item.path} // Fix incorrect path reference
                  className="block text-gray-600 hover:text-primary"
                  onClick={() => setIsOpen(false)} // Close menu when a dropdown item is clicked
                >
                  {item.name}
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
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative mt-20 max-w-7xl mx-auto px-6 lg:px-8 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 uppercase tracking-widest">
              Maximize Your Revenue, Minimize Your Hassles
            </h2>
            <h1 className="text-6xl md:text-8xl font-extrabold text-white">
              REVSURE
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Expert medical billing services tailored to your practice's needs.
              Focus on your patients while we handle the rest.
            </p>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-secondary rounded-lg hover:bg-primary/90 transition"
            >
              Get Free Consultation →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-primary text-white py-10 relative">
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 
            border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent 
            border-t-[25px] border-t-primary">
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold">1200+</p>
              <p className="text-lg">Providers Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold">100+</p>
              <p className="text-lg">Medical Specialties</p>
            </div>
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-lg">Certified Coders & Billers</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50</p>
              <p className="text-lg">States Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeatureSection/>

      {/* Services Section */}
      <ServicesSection/>
      
      {/* Clients Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          <h5 className="text-lg font-bold text-gray-600 uppercase tracking-wider">
            <span className="border-b-2 border-orange-500 pb-1">Our Clients</span>
          </h5>
          </div>
          <ClientBase/>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection/>
    </div>
  );
};


export default Index;