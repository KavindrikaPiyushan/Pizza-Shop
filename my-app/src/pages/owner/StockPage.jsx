import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function StockPage() {
  // Dummy stock data
  const dummyStock = [
    {
      id: 1,
      name: "Pizza Margherita",
      price: 1200,
      quantity: 50,
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be13",
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      price: 1400,
      quantity: 30,
      image: "https://images.unsplash.com/photo-1604917869287-d9f82e500f9b",
    },
    {
      id: 3,
      name: "BBQ Chicken Pizza",
      price: 1600,
      quantity: 20,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    },
  ];

  const [stock, setStock] = useState(dummyStock);

  // Handle adding new stock
  const handleAddStock = () => {
    const newStockItem = {
      id: stock.length + 1,
      name: "New Pizza",
      price: 1500,
      quantity: 10,
      image: "https://images.unsplash.com/photo-1605299442032-0b1bc53d5b90",
    };
    setStock([...stock, newStockItem]);
  };

  // Handle updating stock quantity or price
  const handleUpdateStock = (id, field, value) => {
    const updatedStock = stock.map((item) =>
      item.id === id ? { ...item, [field]: value } : item
    );
    setStock(updatedStock);
  };

  // Handle deleting stock item
  const handleDeleteStock = (id) => {
    const updatedStock = stock.filter((item) => item.id !== id);
    setStock(updatedStock);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 md:px-12 lg:px-24">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8">Stock Management</h2>

      {/* Add Stock Button */}
      <div className="text-right mb-6">
        <button
          onClick={handleAddStock}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all"
        >
          Add New Stock
        </button>
      </div>

      {/* Stock List */}
      {stock.length === 0 ? (
        <p className="text-center text-lg text-gray-600">No stock available!</p>
      ) : (
        <div>
          {stock.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-6 bg-white p-6 rounded-lg shadow-md gap-8"
            >
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />

              {/* Product Details */}
              <div className="flex-grow ml-4">
                <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                <p className="text-lg font-bold text-red-600">Rs. {item.price}</p>
                <p className="text-lg text-gray-700">Quantity: {item.quantity}</p>
              </div>

              {/* Actions (Buttons in Horizontal Layout) */}
              <div className="flex gap-x-4 items-center">
                {/* Update Quantity */}
                <button
                  onClick={() => handleUpdateStock(item.id, "quantity", item.quantity + 1)}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-all"
                >
                  Increase Quantity
                </button>
                <button
                  onClick={() => handleUpdateStock(item.id, "price", item.price + 100)}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all"
                >
                  Increase Price
                </button>

                {/* Delete Stock */}
                <button
                  onClick={() => handleDeleteStock(item.id)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-all"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
