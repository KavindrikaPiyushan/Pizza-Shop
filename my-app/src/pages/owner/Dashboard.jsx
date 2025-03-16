import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { usePop } from "../../context/PopupContext";
import AddProduct from "./AddProduct";
import SalesChart from "../../components/owner/SalesChart";
import { BsCart4 } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

export default function Dashboard() {
  const { isPopupOpen, openPopup, closePopup } = usePop();
  // Dummy data for dashboard overview
  const [totalStockValue, setTotalStockValue] = useState(100000);
  const [totalItems, setTotalItems] = useState(3);
  const [totalOrders, setTotalOrders] = useState(120);
  const [totalRevenue, setTotalRevenue] = useState(250000);
  const navigate = useNavigate();

  // Dummy order data
  const orders = [
    {
      id: 1,
      customerName: "John Doe",
      location: "Colombo",
      status: "Pending",
      items: [
        { name: "Pizza", quantity: 2, price: 1000 },
        { name: "Sprite 250ml", quantity: 1, price: 5000 },
      ],
      orderPlacedTime: "14:10 : 2, 24, 2025 (GMT+5:30)",
      targetDeliveredTime: "14:10 : 2, 24, 2025 (GMT+5:30)",
      deliveryLocation: "123, Main Street, Colombo, Sri Lanka",
      courier: {
        name: "John Smith",
        contact: "+94 71 234 5678",
        company: "SpeedX Delivery",
      },
    },
    {
      id: 2,
      customerName: "Jane Smith",
      location: "Kandy",
      status: "In Progress",
      items: [
        { name: "Burger", quantity: 1, price: 800 },
        { name: "Coke 300ml", quantity: 2, price: 300 },
      ],
      orderPlacedTime: "15:20 : 2, 24, 2025 (GMT+5:30)",
      targetDeliveredTime: "16:20 : 2, 24, 2025 (GMT+5:30)",
      deliveryLocation: "456, Queen Street, Kandy, Sri Lanka",
      courier: {
        name: "Sarah Lee",
        contact: "+94 71 987 6543",
        company: "QuickDeliver",
      },
    },
    {
      id: 3,
      customerName: "Michael Clark",
      location: "Galle",
      status: "Delivered",
      items: [
        { name: "Pasta", quantity: 2, price: 1500 },
        { name: "Fanta 500ml", quantity: 1, price: 350 },
      ],
      orderPlacedTime: "16:00 : 2, 24, 2025 (GMT+5:30)",
      targetDeliveredTime: "17:00 : 2, 24, 2025 (GMT+5:30)",
      deliveryLocation: "789, Beach Road, Galle, Sri Lanka",
      courier: {
        name: "Tom Hanks",
        contact: "+94 72 345 6789",
        company: "FastTrack Delivery",
      },
    },
  ];

  // Available statuses for orders
  const orderStatuses = ["Placed", "Preparing", "Dispatched", "Delivered"];

  // Handlers for updating order status
  const updateOrderStatus = (orderId, currentStatus) => {
    const currentStatusIndex = orderStatuses.indexOf(currentStatus);
    const nextStatus =
      orderStatuses[(currentStatusIndex + 1) % orderStatuses.length];

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
    openPopup();
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
          <h3 className="text-lg font-semibold text-gray-700">
            Total Stock Value
          </h3>
          <p className="text-2xl font-bold text-green-600">
            Rs. {totalStockValue}
          </p>
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

      <SalesChart className="w-full" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Manage Orders Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <div className="flex justify-between">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Update Order Status
          </h3>
          <div className=" text-center">
            <Link
              to="/orders"
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg"
            >
              View Orders
            </Link>
          </div>
          </div>
          
          {orders.map((order) => (
            <div key={order.id} className="mb-6">
              <div className="flex justify-between items-center bg-gray-200 p-3 rounded-xl">
                <div className=" w-[300px] float-left">
                  <h1 className="text-lg font-semibold text-gray-700">
                    Order #{order.id} - {order.customerName}
                  </h1>
                </div>
                <div className=" w-[200px] float-left">
                  <p className="text-gray-600 flex gap-1">
                    <FaLocationDot className="w-[20px] h-[20px]" />{" "}
                    {order.location}
                  </p>
                </div>
                <div className=" w-[200px] float-left">
                  <p className="text-gray-600 flex  gap-1 ">
                    <BsCart4 className="border-4 bg-gray-800 text-white border-amber-200 rounded-4xl p-[5px] w-[35px] h-[35px]" />
                    {order.status}
                  </p>
                </div>
              </div>
            </div>
          ))}

          
        </div>

        <div className="flex-col  space-y-11 ">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Update Inventory Levels
            </h3>
            <button
              onClick={() => updateInventoryLevels(totalStockValue + 5000)}
              className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg w-full mb-4"
            >
              Add Rs. 5000 to Stock
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md h-fit">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Manage Inventory Items
            </h3>
            <div className="flex justify-between gap-4">
              <button
                onClick={addInventoryItem}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-1/2 "
              >
                Add Item
              </button>
              <button
                onClick={() => navigate("/stock")}
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 w-1/2 text-white font-semibold block rounded-lg"
              >
                Manage Stock
              </button>
            </div>
          </div>
        </div>
      </div>

      {isPopupOpen && <AddProduct></AddProduct>}
    </div>
  );
}
