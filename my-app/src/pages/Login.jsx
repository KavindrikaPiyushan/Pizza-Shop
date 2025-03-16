import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer"); // Default role
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "owner@example.com" && password === "password" && role === "owner") {
      login("owner");
      navigate("/owner-dashboard");
    } else if (email === "customer@example.com" && password === "password" && role === "customer") {
      login("customer");
      navigate("/customer-dashboard");
    }else if (email === "employee@example.com" && password === "password" && role === "employee") {
      login("customer");
      navigate("/employee");
    }
    
    else {
      alert("Invalid credentials or role selection");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
        <h2 className="text-3xl font-bold text-red-600 text-center mb-6">🍕 Pizza Shop Login</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input 
            type="email" 
            placeholder="Enter your email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Password</label>
          <input 
            type="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium">Login As</label>
          <select 
            value={role} 
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="customer">Customer</option>
            <option value="owner">Owner</option>
            <option value="employee">Employee</option>
          </select>
        </div>

        <button 
          onClick={handleLogin} 
          className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition font-bold text-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
