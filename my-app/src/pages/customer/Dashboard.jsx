import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CustomerDashboard() {
  // Dummy data for orders and cart with online images
  const dummyOrders = [
    {
      id: 1,
      date: "2025-02-12",
      status: "Delivered",
      total: 2400,
      items: [
        { name: "Margherita", image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" },
        { name: "Pepperoni", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
      ],
    },
    {
      id: 2,
      date: "2025-02-13",
      status: "Preparing",
      total: 2000,
      items: [{ name: "BBQ Chicken", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" }],
    },
  ];

  const dummyCart = [
    {
      id: 1,
      name: "Margherita",
      price: 1200,
      quantity: 2,
      totalPrice: 2400,
      image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
    },
    {
      id: 2,
      name: "Pepperoni",
      price: 1400,
      quantity: 1,
      totalPrice: 1400,
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    },
  ];

  // State for orders and cart
  const [orders, setOrders] = useState(dummyOrders);
  const [cart, setCart] = useState(dummyCart);

  return (
    <div className="bg-gray-100 min-h-screen p-8 pl-40 pr-40">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Customer Dashboard
      </h2>

      {/* Dashboard Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Orders Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Orders</h3>
          {orders.length === 0 ? (
            <p className="text-gray-600">You have no orders yet!</p>
          ) : (
            <ul className="space-y-4">
              {orders.map((order) => (
                <li
                  key={order.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Order #{order.id}</h4>
                    <p className="text-gray-600">Date: {order.date}</p>
                    <p className="text-gray-600">Status: {order.status}</p>
                    <div className="space-y-2">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md mr-4"
                          />
                          <p className="text-gray-600">{item.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Rs. {order.total}</p>
                    <Link
                      to={`/order/${order.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      View Order
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Track Order Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Track Your Order</h3>
          {orders.length === 0 ? (
            <p className="text-gray-600">You have no ongoing orders!</p>
          ) : (
            <ul className="space-y-4">
              {orders
                .filter((order) => order.status === "Preparing")
                .map((order) => (
                  <li
                    key={order.id}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <div>
                      <h4 className="text-lg font-semibold text-gray-700">Order #{order.id}</h4>
                      <p className="text-gray-600">Status: {order.status}</p>
                    </div>
                    <div>
                      <Link
                        to={`/track-order/${order.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Track Order
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
          )}
        </div>

        {/* Cart Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty!</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm"
                >
                  <div>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-cover rounded-md mr-4"
                    />
                    <h4 className="text-lg font-semibold text-gray-700">{item.name}</h4>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Price: Rs. {item.price}</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-800">Total: Rs. {item.totalPrice}</p>
                    <Link
                      to="/cart"
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      View Cart
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Profile Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg col-span-1 md:col-span-2 lg:col-span-3 flex flex-col">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Profile Settings</h3>
          <p className="text-gray-600">Update your profile information here.</p>
          <Link
            to="/profile"
            className="text-blue-600 hover:text-blue-700 font-semibold"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
