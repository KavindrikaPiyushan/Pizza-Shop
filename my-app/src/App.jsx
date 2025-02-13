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
import StockPage from "./pages/owner/StockPage";
import ProtectedRoute from "./components/owner/ProtectedRoute"; 
import ViewOrders from "./pages/owner/ViewOrders";
import PageNotFound from "./components/PageNotFound";

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login login={login} />} />

        {/* Protected Route for Stock Page */}
        <Route 
          path="/owner-dashboard" 
          element={user?.role === "owner" ? <OwnerDashboard /> : <Navigate to="/login" />} 
        />

        <Route 
          path="/customer-dashboard" 
          element={user?.role === "customer" ? <CustomerDashboard /> : <Navigate to="/login" />} 
        />

        <Route 
          path="/stock" 
          element={
            <ProtectedRoute user={user}>
              <StockPage />  {/* Only accessible to owners */}
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/orders" 
          element={
            <ProtectedRoute user={user}>
              <ViewOrders />  {/* Only accessible to owners */}
            </ProtectedRoute>
          } 
        />

        <Route path="*" element={<PageNotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
