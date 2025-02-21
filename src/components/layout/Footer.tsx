import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

// Define TypeScript interface for props
interface SectionProps {
  section: {
    title: string;
    links: { name: string; path: string }[];
  };
  index: number;
}

const FooterSection: React.FC<SectionProps> = ({ section, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-gray-900 p-6 rounded-lg shadow-lg"
    >
      <h3 className="text-lg font-bold mb-4">{section.title}</h3>
      <ul className="space-y-2">
        {section.links.map((link, i) => (
          <li key={i}>
            <Link 
              to={link.path} 
              className="hover:text-teal-400 cursor-pointer transition-colors"
            >
              &gt; {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const footerData = [
  {
    title: "Services",
    links: [
      { name: "Medical Billing", path: "/MedicalBilling" },
      { name: "Medical Coding", path: "/MedicalCoding" },
      { name: "Credentialing", path: "/CredentialingPage" },
      { name: "Denial Management", path: "/DenialManagementPage" },
      { name: "Eligibility Verification", path: "/EligibilityVerification" },
      { name: "Revenue Cycle Management", path: "/RCMServices" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", path: "/about" },
      { name: "Our Clients", path: "/clients" },
      { name: "Services", path: "/services" },
      { name: "Contact", path: "/contact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        {/* Contact Info */}
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-primary text-2xl font-bold">REVSURE</h3>
          <p className="text-gray-400 mt-2">Engineering is our PASSION.</p>

          {/* Contact Details */}
          <div className="mt-2 flex items-center gap-2 group">
            <Phone className="text-white group-hover:text-primary transition duration-300" />
            <p className="hover:text-primary transition duration-300">051 5731544 / 2724373</p>
          </div>

          <div className="mt-2 flex items-center gap-2 group">
            <Mail className="text-white group-hover:text-primary transition duration-300" />
            <p className="hover:text-primary transition duration-300">info@revsure.com</p>
          </div>

          <div className="mt-2 flex items-center gap-2 group">
            <MapPin className="text-white group-hover:text-primary transition duration-300" />
            <p className="hover:text-primary transition duration-300">REVSURE, Bahria Town Phase 4, Islamabad</p>
          </div>

          {/* CTA Button */}
          <Link 
            to="/contact" 
            className="mt-5 px-6 py-3 border border-blue-500 text-primary font-bold rounded-lg hover:bg-primary/90 hover:text-black transition"
          >
            GET IN TOUCH
          </Link>
        </div>

        {/* Other sections */}
        {footerData.map((section, index) => (
        <div style={{ transitionDuration: '0.3s' }} className="transition-transform transform  hover:-translate-y-3   ">  <FooterSection key={index} section={section} index={index}  />
        </div>))}
        
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} REVSURE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
