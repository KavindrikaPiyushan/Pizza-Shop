import React, { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaChevronCircleUp } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import PizzaOrderStatus from "./PizzaOrderStatus";

export default function OrderList() {
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
    {
      id: 4,
      customerName: "Alice Green",
      location: "Negombo",
      status: "Pending",
      items: [
        { name: "Fried Rice", quantity: 3, price: 900 },
        { name: "Pepsi 500ml", quantity: 2, price: 400 },
      ],
      orderPlacedTime: "13:30 : 2, 24, 2025 (GMT+5:30)",
      targetDeliveredTime: "14:45 : 2, 24, 2025 (GMT+5:30)",
      deliveryLocation: "101, Sea View, Negombo, Sri Lanka",
      courier: {
        name: "Chris Rock",
        contact: "+94 73 456 7890",
        company: "ZoomExpress",
      },
    },
    {
      id: 5,
      customerName: "Emily Stone",
      location: "Matara",
      status: "In Progress",
      items: [
        { name: "Cheese Burger", quantity: 2, price: 1200 },
        { name: "Ice Cream", quantity: 3, price: 450 },
      ],
      orderPlacedTime: "17:10 : 2, 24, 2025 (GMT+5:30)",
      targetDeliveredTime: "18:10 : 2, 24, 2025 (GMT+5:30)",
      deliveryLocation: "321, Hill Road, Matara, Sri Lanka",
      courier: {
        name: "Robert Downey",
        contact: "+94 74 567 8901",
        company: "QuickSpeed Delivery",
      },
    },
  ];

  const [openOrder, setOpenOrder] = useState(null);

  const handleToggleOrder = (orderId) => {
    setOpenOrder((prev) => (prev === orderId ? null : orderId));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 pl-40 pr-40">
      <div className="mb-5">
        <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
        <div className="flex-col justify-between">
          {orders.map((order) => (
            <div key={order.id} className="flex-col shadow-md bg-white py-2 px-2 rounded-xl mb-5">
              <div className="flex justify-between items-center bg-gray-200 p-3 rounded-xl">
                <div className=" w-[300px] float-left">
                  <h1 className="text-lg font-semibold text-gray-700">
                    Order #{order.id} - {order.customerName}
                  </h1>
                </div>
                <div className=" w-[200px] float-left">
                <p className="text-gray-600 flex gap-1">
                  <FaLocationDot className="w-[20px] h-[20px]" /> {order.location}
                </p>
                </div>
                <div className=" w-[200px] float-left">
                <p className="text-gray-600 flex  gap-1 ">
                  <BsCart4 className="border-4 bg-gray-800 text-white border-amber-200 rounded-4xl p-[5px] w-[35px] h-[35px]" />
                  {order.status}
                </p>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <FaChevronCircleUp
                    className={`w-[25px] h-[25px] cursor-pointer ${openOrder === order.id ? "" : "hidden"}`}
                    onClick={() => handleToggleOrder(order.id)}
                  />
                  <FaChevronCircleDown
                    className={`w-[25px] h-[25px] cursor-pointer ${openOrder === order.id ? "hidden" : ""}`}
                    onClick={() => handleToggleOrder(order.id)}
                  />
                </div>
              </div>

              {openOrder === order.id && (
                <div className="flex flex-col lg:flex-row">
                  <div className="flex flex-col items-center p-6 shadow-md rounded-xl w-full max-w-lg m-10 border-4 border-amber-200 h-fit">
                    <table className="w-full rounded-xl">
                      <thead>
                        <tr className="text-center bg-gray-200 text-gray-700 font-semibold uppercase">
                          <th className="p-3">Item</th>
                          <th className="p-3">Quantity</th>
                          <th className="p-3">Price (Rs)</th>
                        </tr>
                      </thead>

                      <tbody className="text-center">
                        {order.items.map((item, index) => (
                          <tr key={index}>
                            <td className="p-3">{item.name}</td>
                            <td className="p-3">{item.quantity}</td>
                            <td className="p-3">{item.price}</td>
                          </tr>
                        ))}
                        <tr className="border-y-1 border-gray-500">
                          <td className="p-2 font-bold">Total</td>
                          <td className="p-2"></td>
                          <td className="p-2">
                            <div className="p-2 bg-[#3eb73e] rounded-3xl text-white">
                              {order.items.reduce((total, item) => total + item.price * item.quantity, 0)}
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex-col p-10 w-full">
                    <div className="flex justify-between">
                      <p>Order placed time: {order.orderPlacedTime}</p>
                      <p>Target delivered time: {order.targetDeliveredTime}</p>
                    </div>

                    <div>
                      <div className="my-6 items-center flex justify-center">
                        <PizzaOrderStatus statusIndex={1} />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white shadow-md rounded-xl border border-gray-200">
                        <div className="w-full sm:w-1/2">
                          <h2 className="text-lg font-semibold text-gray-700 mb-2">
                            Delivery Location
                          </h2>
                          <p className="text-gray-600 mb-4">{order.deliveryLocation}</p>
                          <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-2 rounded-lg shadow-md transition-all duration-300">
                            Check Delivery Process
                          </button>
                        </div>

                        {/* Courier Details */}
                        <div className="w-full sm:w-1/2">
                          <h2 className="text-lg font-semibold text-gray-700 mb-2">Courier Details</h2>
                          <p className="text-gray-600 mb-2">Name: {order.courier.name}</p>
                          <p className="text-gray-600 mb-2">Contact: {order.courier.contact}</p>
                          <p className="text-gray-600 mb-2">Company: {order.courier.company}</p>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
