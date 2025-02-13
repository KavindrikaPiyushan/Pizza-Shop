import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Cart() {
  // Dummy cart data
  const dummyCart = [
    {
      id: 1,
      name: "Margherita",
      price: 1200,
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be13",
      quantity: 2,
      totalPrice: 2400,
    },
    {
      id: 2,
      name: "Pepperoni",
      price: 1400,
      image: "https://images.unsplash.com/photo-1604917869287-d9f82e500f9b",
      quantity: 1,
      totalPrice: 1400,
    },
    {
      id: 3,
      name: "BBQ Chicken",
      price: 1600,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      quantity: 3,
      totalPrice: 4800,
    },
  ];

  // State to manage cart items (with updated quantities)
  const [cart, setCart] = useState(dummyCart);

  // Handle quantity change
  const handleQuantityChange = (id, newQuantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity, totalPrice: item.price * newQuantity } : item
    );
    setCart(updatedCart);
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  // Calculate total price of the cart
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 pl-50 pr-50">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Your cart is empty!</p>
      ) : (
        <div>
          <ul>
            {cart.map((pizza) => (
              <li key={pizza.id} className="flex justify-between items-center mb-6 bg-white p-6 rounded-lg shadow-md">
                {/* Image */}
                <img src={pizza.image} alt={pizza.name} className="w-24 h-24 object-cover rounded-md" />

                {/* Name and Price */}
                <div className="flex-grow ml-4">
                  <h3 className="text-xl font-semibold text-gray-800">{pizza.name}</h3>
                  <p className="text-lg font-bold text-red-600">Rs. {pizza.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center mx-4">
                  <button
                    onClick={() => handleQuantityChange(pizza.id, pizza.quantity - 1)}
                    disabled={pizza.quantity <= 1}
                    className="px-3 py-2 bg-red-500 text-white font-semibold rounded-lg"
                  >
                    -
                  </button>
                  <span className="mx-4 text-lg font-semibold">{pizza.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(pizza.id, pizza.quantity + 1)}
                    className="px-3 py-2 bg-red-500 text-white font-semibold rounded-lg"
                  >
                    +
                  </button>
                </div>

                {/* Total Price and Remove Button */}
                <div className="flex items-center space-x-4">
                  <p className="text-lg font-bold text-red-600">Total: Rs. {pizza.totalPrice}</p>
                  <button
                    onClick={() => handleRemoveItem(pizza.id)}
                    className="text-sm text-red-600 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Cart Total */}
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-800">Total Price: Rs. {calculateTotal()}</h3>
          </div>

          <div className="flex justify-between mt-8">
            <div className="text-center">
              <Link
                to="/"
                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition-all"
              >
                Continue Shopping
              </Link>
            </div>

            <div className="text-center">
              <Link
                to="/checkout"
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
