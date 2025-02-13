import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Footer Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-12 gap-12"> {/* Added gap */}
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full md:w-1/3">
            <img
              src="https://via.placeholder.com/150x50?text=Pizza+Heaven+Logo"
              alt="Pizza Heaven Logo"
              className="w-40 mb-4"
            />
            <p className="text-center md:text-left text-lg text-gray-300">
              The best pizza in town, delivered hot and fresh right to your door.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-500">Home</a></li>
              <li><a href="/menu" className="hover:text-yellow-500">Menu</a></li>
              <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
              <li><a href="/privacy-policy" className="hover:text-yellow-500">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">Contact Us</h3>
            <p className="text-gray-300 mb-2">
              <i className="fas fa-map-marker-alt text-yellow-500 mr-2"></i> 123 Pizza St, Foodie City, 45678
            </p>
            <p className="text-gray-300 mb-2">
              <i className="fas fa-phone-alt text-yellow-500 mr-2"></i> +1 234 567 890
            </p>
            <p className="text-gray-300">
              <i className="fas fa-envelope text-yellow-500 mr-2"></i> support@pizzaheaven.com
            </p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex justify-between items-center border-t border-gray-700 pt-6 gap-6"> {/* Added gap */}
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Pizza Heaven. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/terms" className="text-gray-400 hover:text-yellow-500 text-sm">Terms & Conditions</a>
            <a href="/faq" className="text-gray-400 hover:text-yellow-500 text-sm">FAQ</a>
            <a href="/sitemap" className="text-gray-400 hover:text-yellow-500 text-sm">Sitemap</a>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center mt-6 space-x-6">
          <a href="https://facebook.com" className="text-gray-400 hover:text-yellow-500">
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a href="https://instagram.com" className="text-gray-400 hover:text-yellow-500">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="https://twitter.com" className="text-gray-400 hover:text-yellow-500">
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a href="https://youtube.com" className="text-gray-400 hover:text-yellow-500">
            <i className="fab fa-youtube text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}
