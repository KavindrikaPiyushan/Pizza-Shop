import React from "react";

const steps = [
  "Order Placed",
  "Preparing",
  "Baking",
  "Quality Check",
  "Out for Delivery",
  "Delivered",
];

const PizzaOrderStatus = ({ statusIndex }) => {
  return (
    <ol className="items-center   2xl:flex 2xl:space-x-8 sm:space-y-0 rtl:space-x-reverse w-[150px] 2xl:w-full ">
      {steps.map((step, index) => {
        const isCompleted = index < statusIndex;
        const isActive = index === statusIndex;

        return (
          <li
            key={index}
            className={`flex space-y-3 items-center space-x-2.5 rtl:space-x-reverse 
              ${isCompleted || isActive ? "text-green-600 dark:text-green-500" : "text-gray-500 dark:text-gray-400"}
            `}
          >
            {/* Step Number Circle */}
            <span
              className={`flex items-center justify-center w-8 h-8 border rounded-full shrink-0
                ${isCompleted ? "border-green-600 bg-green-600 text-white dark:border-green-500" : 
                  isActive ? "border-green-600 text-green-600 dark:border-green-500" : 
                  "border-gray-500 dark:border-gray-400"}
              `}
            >
              {index + 1}
            </span>
              
              <h3 className={`font-medium leading-tight ${isActive ? "text-green-600 dark:text-green-500" : ""}`}>
                {step}
              </h3>
           
          </li>
        );
      })}
    </ol>
  );
};

export default PizzaOrderStatus;
