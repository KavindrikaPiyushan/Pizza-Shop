import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import OwnerDashboard from "./pages/owner/Dashboard";
import CustomerDashboard from "./pages/customer/Dashboard";
import Cart from "./components/customer/Cart";

function App() {
  const [user, setUser] = useState(null); // Stores user info (role-based)

  // Function to handle login
  const login = (role) => setUser({ role });
  const logout = () => setUser(null);

  return (
    <div>
      <Navbar user={user} logout={logout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login login={login} />} />

      
        <Route 
          path="/owner-dashboard" 
          element={user?.role === "owner" ? <OwnerDashboard /> : <Navigate to="/login" />} 
        />
        <Route 
          path="/customer-dashboard" 
          element={user?.role === "customer" ? <CustomerDashboard /> : <Navigate to="/login" />} 
        />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
