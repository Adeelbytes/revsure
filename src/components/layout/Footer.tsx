import React from "react";
import { Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10 px-6">
      <div className="max-w-7xl mx-auto pl-4 md:pl-8 lg:pl-12 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* About Us Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">ABOUT US</h3>
          <p className="text-gray-300 leading-relaxed">
            Revsure Medical Billing provides comprehensive revenue cycle management
            solutions, ensuring seamless medical billing, claims processing, and
            compliance for healthcare providers.
          </p>
        </div>

        {/* Contact Details Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">CONTACT DETAILS</h3>
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-3">
              <Clock className="text-white" size={18} />
              <p className="text-gray-300">Monday - Friday: 9:00AM - 6:00PM EST</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-white" size={18} />
              <p className="text-gray-300">+1 (800) 123-4567</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-white" size={18} />
              <p className="text-gray-300">contact@revsurebilling.com</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">SERVICES</h3>
          <ul className="text-gray-300 space-y-2">
            <li className="hover:text-white cursor-pointer">Medical Billing</li>
            <li className="hover:text-white cursor-pointer">Claims Management</li>
            <li className="hover:text-white cursor-pointer">Revenue Cycle Optimization</li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-400 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Revsure Medical Billing. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;