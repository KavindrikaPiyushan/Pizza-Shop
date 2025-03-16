import React from "react";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className=" pt-8 bg-gray-50 ">
    <div className=" flex flex-col items-center bg-gray-50  min-h-screen ">
      
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

    </div>
    <Footer/>
    </div>
  );
}
