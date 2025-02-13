import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  // Dummy data for dashboard overview
  const [totalStockValue, setTotalStockValue] = useState(100000);
  const [totalItems, setTotalItems] = useState(3);
  const [totalOrders, setTotalOrders] = useState(120);
  const [totalRevenue, setTotalRevenue] = useState(250000);

  // Dummy order data
  const orders = [
    { id: 1, status: "Placed", customer: "John Doe", total: 2000 },
    { id: 2, status: "Preparing", customer: "Jane Smith", total: 1500 },
  ];

  // Available statuses for orders
  const orderStatuses = ["Placed", "Preparing", "Dispatched", "Delivered"];

  // Handlers for updating order status
  const updateOrderStatus = (orderId, currentStatus) => {
    const currentStatusIndex = orderStatuses.indexOf(currentStatus);
    const nextStatus = orderStatuses[(currentStatusIndex + 1) % orderStatuses.length];

    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: nextStatus };
      }
      return order;
    });

    setTotalOrders(updatedOrders.length); // Update order count
  };

  // Handlers for updating inventory levels
  const updateInventoryLevels = (newStockValue) => {
    setTotalStockValue(newStockValue);
  };

  // Handlers for adding/removing inventory items
  const addInventoryItem = () => {
    setTotalItems(totalItems + 1);
  };

  const removeInventoryItem = () => {
    setTotalItems(totalItems - 1);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 pl-40 pr-40">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Owner Dashboard
      </h2>

      {/* Dashboard Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Stock Value</h3>
          <p className="text-2xl font-bold text-green-600">Rs. {totalStockValue}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Items</h3>
          <p className="text-2xl font-bold text-blue-600">{totalItems}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
          <p className="text-2xl font-bold text-orange-600">{totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold text-gray-700">Total Revenue</h3>
          <p className="text-2xl font-bold text-red-600">Rs. {totalRevenue}</p>
        </div>
      </div>

      {/* Manage Orders Section */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Order Status</h3>
        {orders.map((order) => (
          <div key={order.id} className="mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="text-lg font-semibold text-gray-700">
                  Order #{order.id} - {order.customer}
                </h4>
                <p className="text-gray-600">Status: {order.status}</p>
              </div>
              <button
                onClick={() => updateOrderStatus(order.id, order.status)}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              >
                Move to Next Status
              </button>
            </div>
          </div>
        ))}

<div className="mb-12 text-center">
        <Link
          to="/orders"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
        >
          View Orders
        </Link>
      </div>
      </div>

    
     

      {/* Inventory Management Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Update Inventory Levels */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Update Inventory Levels</h3>
          <button
            onClick={() => updateInventoryLevels(totalStockValue + 5000)}
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg w-full mb-4"
          >
            Add Rs. 5000 to Stock
          </button>
        </div>

        {/* Add or Remove Inventory Items */}
        <div className="bg-white p-6 rounded-lg shadow-md">
  <h3 className="text-xl font-semibold text-gray-800 mb-4">Manage Inventory Items</h3>
  <div className="flex justify-between gap-4">
    <button
      onClick={addInventoryItem}
      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-1/2 "
    >
      Add Item
    </button>
    <button
      onClick={removeInventoryItem}
      className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg w-1/2"
    >
      Remove Item
    </button>
  </div>
  <div className="text-center space-y-4 mt-5 w-1/2 mx-auto">
    <Link
      to="/stock"
      className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold block rounded-lg "
    >
      Manage Stock
    </Link>
  </div>
</div>

      </div>

 
     
    </div>
  );
}
