import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      {/* Title */}
      <h1 className="text-4xl font-extrabold text-gray-800 mb-8">Get in Touch</h1>
      
      {/* Contact Container */}
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-3xl">
        <p className="text-gray-600 mb-6 text-center">
          Have questions about our delicious pizzas? Feel free to reach out—we’d love to hear from you! 🍕
        </p>

        {/* Contact Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Phone Number</label>
            <input
              type="tel"
              placeholder="+94 75 672 0966"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>

          <button className="w-full bg-yellow-500 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition">
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Contact Information</h2>
        <p className="text-gray-600 mt-2">We are available 24/7 to serve you the best pizzas in town!</p>

        <div className="mt-4 space-y-3 text-lg text-gray-700">
          <p className="flex items-center justify-center gap-2"><FaPhone className="text-yellow-500" /> +94 75 672 0966</p>
          <p className="flex items-center justify-center gap-2"><FaEnvelope className="text-yellow-500" /> support@pizzashop.com</p>
          <p className="flex items-center justify-center gap-2"><FaMapMarkerAlt className="text-yellow-500" /> 123 Pizza Street, Colombo, Sri Lanka</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-6 flex gap-6 text-2xl">
        <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebook /></a>
        <a href="#" className="text-pink-600 hover:text-pink-800"><FaInstagram /></a>
        <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
      </div>
    </div>
  );
}
