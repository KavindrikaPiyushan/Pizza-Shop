import React from "react";

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* About Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-red-600">About Us</h1>
        <p className="mt-4 text-lg text-gray-700">
          Welcome to <span className="font-semibold">Pizza Delight</span>, where passion for pizza meets perfection! We are committed to delivering fresh, delicious, and mouthwatering pizzas straight to your doorstep. Our secret? The finest ingredients, handcrafted dough, and an unbeatable love for great taste.
        </p>
      </div>

      {/* Our Team */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">Meet Our Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <img src={member.image} alt={member.name} className="w-24 h-24 mx-auto rounded-full object-cover" />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-3xl font-bold text-center text-gray-800">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
              <p className="text-gray-700 italic">"{review.feedback}"</p>
              <h4 className="text-lg font-semibold mt-4">- {review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const teamMembers = [
  { name: "John Doe", role: "Founder & CEO", image: "https://via.placeholder.com/150" },
  { name: "Jane Smith", role: "Head Chef", image: "https://via.placeholder.com/150" },
  { name: "Mike Johnson", role: "Operations Manager", image: "https://via.placeholder.com/150" },
];

const reviews = [
  { name: "Emily R.", feedback: "The best pizza I've ever had!" },
  { name: "James T.", feedback: "Amazing service and delicious food." },
  { name: "Sophia M.", feedback: "I keep coming back for more!" },
];
