import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold">RevSure</h3>
            <p className="text-sm text-gray-300">
              Maximizing your revenue, minimizing your hassles with expert medical billing services.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="space-y-1">
              {["Home", "About", "Services", "Clients", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-medium">Contact</h4>
            <ul className="space-y-1">
              <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                <Mail size={16} />
                <span>contact@revsure.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2 text-sm text-gray-300">
                <MapPin size={16} />
                <span>123 Business Ave, Suite 100</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-lg font-medium">Connect & Policies</h4>
            <div className="flex justify-center sm:justify-start space-x-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-gray-300 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="text-gray-300 hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-gray-300 hover:text-red-500 transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-gray-300 hover:text-blue-700 transition-colors" />
              </a>
            </div>

            <div className="flex justify-center sm:justify-start space-x-2">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white">Privacy Policy</Link>
              <span>|</span>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-white">Terms of Service</Link>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-700 text-center text-sm text-gray-300">
          <p>© {new Date().getFullYear()} RevSure. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
