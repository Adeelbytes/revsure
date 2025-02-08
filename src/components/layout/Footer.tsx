import React from "react";
import { motion } from "framer-motion";

// Define TypeScript interface for props
interface SectionProps {
  section: {
    title: string;
    links: string[];
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
          <li key={i} className="hover:text-teal-400 cursor-pointer transition-colors">
            &gt; {link}
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
      "Medical Billing Services",
      "Medical Coding Services",
      "Credentialing Services",
      "Denial Management",
      "Eligibility Verification",
      "Revenue Cycle Management",
    ],
  },
  {
    title: "Clients",
    links: [
      "Healthcare Systems",
      "Emergency Rooms",
      "Urgent Cares",
      "Hospitals",
      "Private Practices",
      "Clinics & Imaging Centers",
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
          <p className="mt-2">📞 051 5731544 / 2724373</p>
          <p className="mt-2">📧 info@revsure.com</p>
          <p className="mt-2">📍 REVSURE, 1 Civic Center Bahria Town Phase 4, Islamabad</p>
          <button className="mt-5 px-6 py-3 border border-blue-500 text-primary font-bold rounded-lg hover:bg-primary/90 hover:text-black transition">
            GET IN TOUCH
          </button>
        </div>

        {/* Other sections */}
        {footerData.map((section, index) => (
          <FooterSection key={index} section={section} index={index} />
        ))}
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} REVSURE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
