import React, { useState } from "react";
import { Link } from "react-router-dom";

const ordersData = [
  { id: 1, status: "Placed", customer: "John Doe", total: 2000 },
  { id: 2, status: "Preparing", customer: "Jane Smith", total: 1500 },
  { id: 3, status: "Dispatched", customer: "Alice Brown", total: 3000 },
  { id: 4, status: "Delivered", customer: "Bob Johnson", total: 2500 },
];

export default function ViewOrders() {
  const [orders, setOrders] = useState(ordersData);

  // Available order statuses
  const orderStatuses = ["Placed", "Preparing", "Dispatched", "Delivered"];

  // Handler for updating the order status
  const updateOrderStatus = (orderId, currentStatus) => {
    const currentStatusIndex = orderStatuses.indexOf(currentStatus);
    const nextStatus = orderStatuses[(currentStatusIndex + 1) % orderStatuses.length];

    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: nextStatus, updatedStatus: nextStatus }; // add updated status
      }
      return order;
    });

    setOrders(updatedOrders);
  };

  // Handler for submitting the updated order status
  const submitUpdatedStatus = (orderId, updatedStatus) => {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return { ...order, status: updatedStatus }; // finalize the status update
      }
      return order;
    });

    setOrders(updatedOrders);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 pl-40 pr-40">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">Manage Orders</h2>

      {/* Orders Table */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <table className="min-w-full table-auto ">
          <thead className="text-center">
            <tr className="border-b  ">
              <th className="px-8 py-4  text-gray-600 ">Order ID</th>
              <th className="px-8 py-4  text-gray-600">Customer</th>
              <th className="px-8 py-4  text-gray-600">Total</th>
              <th className="px-8 py-4  text-gray-600">Status</th>
              <th className="px-8 py-4  text-gray-600 ">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b text-center">
                <td className="px-8 py-4 text-gray-700">{order.id}</td>
                <td className="px-8 py-4 text-gray-700">{order.customer}</td>
                <td className="px-8 py-4 text-gray-700">Rs. {order.total}</td>
                <td className="px-8 py-4 text-gray-700">{order.updatedStatus || order.status}</td> {/* Display updated status */}
                <td className="px-8 py-4 flex justify-center">
                  <button
                    onClick={() => updateOrderStatus(order.id, order.status)}
                    className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
                  >
                    Next Status
                  </button>
                  <button
                    onClick={() => submitUpdatedStatus(order.id, order.updatedStatus || order.status)}
                    className="ml-4 px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg"
                  >
                    Submit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Link to Manage Stock */}
      <div className="mt-8 text-center">
        <Link
          to="/owner-dashboard"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg"
        >
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
