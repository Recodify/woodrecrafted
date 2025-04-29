// src/components/Footer.tsx
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-around items-start md:items-start">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Visit Our Workshop</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                <div>
                  <p>Paddingham House</p>
                  <p>Bristol Road</p>
                  <p>Winscombe</p>
                  <p>BS25 1PW</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-amber-500 mr-2" />
                <a href="tel:07551545656" className="text-gray-400 hover:text-white">07551545656</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-amber-500 mr-2" />
                <a href="mailto:sam@recodify.co.uk" className="text-gray-400 hover:text-white">sam@recodify.co.uk</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-500 hover:text-white" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-500 hover:text-white" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-amber-500 hover:text-white" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Recodify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;