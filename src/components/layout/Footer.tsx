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
    title: "About",
    links: ["The Company", "Contact", "Resources"],
  },
  {
    title: "Services",
    links: ["Consultancy", "Construction", "Chemicals"],
  },
];

const Footer = () => {
  return (
    <footer className=" flex bg-black text-white py-10 px-6">
      <div className="mt-10 text-center">
        <p className="text-gray-400">Engineering is our PASSION.</p>
        <p className="mt-2 flex justify-center items-center gap-2">
          📞 051 5731544 / 2724373
        </p>
        <p className="mt-2">📧 info@seedpk.com</p>
        <p className="mt-2">📍 SEED, 1 Civic Center Bahria Town Phase 4, Islamabad</p>

        <button className="mt-5 px-6 py-3 bg-teal-500 text-black font-bold rounded-lg hover:bg-teal-400 transition">
          GET IN TOUCH
        </button>
      </div>
      <div className="max-w-6xl mx-auto h-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {footerData.map((section, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -5 }} // Moves the section up on hover
          transition={{ duration: 0.3, ease: "easeOut" }} // Smooth transition
        >
          <FooterSection section={section} index={index} />
        </motion.div>
      ))}
    </div>

      {/* Contact Info & CTA Button */}
    </footer>
  );
};

export default Footer;
