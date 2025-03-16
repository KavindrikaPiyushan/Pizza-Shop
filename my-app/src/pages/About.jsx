import React from "react";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
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
    <Footer/>
    </div>
  );
}

const teamMembers = [
  { name: "John Doe", role: "Founder & CEO", image: "https://cms-bitzazz-prod-images.s3.amazonaws.com/Commercial_Realtor_Bellevue_e66cf6dd82.png" },
  { name: "Jane Smith", role: "Head Chef", image: "https://eyemediastudios.co.uk/wp-content/uploads/2021/02/photography-8-4.jpg" },
  { name: "Mike Johnson", role: "Operations Manager", image: "https://s3.ca-central-1.amazonaws.com/subphoto-photos/2018-10-25_16-41-21/small_069d54_2018_Besney_Jonathan-9837.jpg" },
];

const reviews = [
  { name: "Emily R.", feedback: "The best pizza I've ever had!" },
  { name: "James T.", feedback: "Amazing service and delicious food." },
  { name: "Sophia M.", feedback: "I keep coming back for more!" },
];
