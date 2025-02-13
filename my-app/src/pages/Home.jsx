import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();  // Hook to navigate to other pages
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const images = [
    "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const pizzas = [
    { id: 1, name: "Margherita", price: 1200, image: "https://images.unsplash.com/photo-1594007654729-407eedc4be13" },
    { id: 2, name: "Pepperoni", price: 1400, image: "https://images.unsplash.com/photo-1604917869287-d9f82e500f9b" },
    { id: 3, name: "BBQ Chicken", price: 1600, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
    { id: 4, name: "Veggie Supreme", price: 1300, image: "https://images.unsplash.com/photo-1588315029754-07bc11e1cc47" },
  ];

  // Open the modal for quantity selection
  const openModal = (pizza) => {
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPizza(null);
  };

  // Handle quantity change
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  // Add pizza to cart with the selected quantity
  const addToCart = () => {
    const totalPrice = selectedPizza.price * quantity;
    const cartItem = { ...selectedPizza, quantity, totalPrice };
    setCart((prevCart) => [...prevCart, cartItem]);
    closeModal(); // Close modal after adding to cart
    navigate("/cart"); // Navigate to the cart page
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-cover bg-center flex items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            transform: "scale(1.1)", // Slight zoom effect
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold">Delicious Pizzas, Delivered Hot!</h1>
          <p className="text-lg mt-3">Order your favorite pizza in just a few clicks.</p>
          <button className="mt-5 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg rounded-lg">
            Order Now
          </button>
        </div>
      </div>

      {/* Pizza Menu Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Explore Our Menu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 transition transform"
            >
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{pizza.name}</h3>
              <p className="text-lg font-bold text-red-600 mt-2">Rs. {pizza.price}</p>
              <button
                className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg"
                onClick={() => openModal(pizza)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Quantity Selection */}
      {isModalOpen && selectedPizza && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-70"></div>
          {/* Modal */}
          <div className="relative bg-white rounded-lg p-6 w-96 z-10">
            <h2 className="text-2xl font-bold mb-4">Select Quantity</h2>
            <div className="flex justify-between mb-4">
              <img
                src={selectedPizza.image}
                alt={selectedPizza.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">{selectedPizza.name}</h3>
                <p className="text-lg text-red-600">Rs. {selectedPizza.price}</p>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="text-lg">Quantity:</label>
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <p className="text-xl font-bold">Total Price: Rs. {selectedPizza.price * quantity}</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-500 text-white rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={addToCart}
                className="px-6 py-2 bg-green-500 text-white rounded-lg"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
