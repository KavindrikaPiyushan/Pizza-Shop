import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-7xl font-extrabold text-yellow-500 animate-bounce">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mt-4">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2 text-lg max-w-md">
        The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <button
        className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg flex items-center gap-2 transition duration-300 shadow-md"
        onClick={() => navigate("/")}
      >
        <FaHome className="text-lg" /> Go Home
      </button>
    </div>
  );
}
