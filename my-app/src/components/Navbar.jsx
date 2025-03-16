import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.jpg"

function Navbar({ user, logout }) {
  const location = useLocation(); // Get the current route
  const navigate = useNavigate(); // Hook to navigate programmatically

  const isOwnerDashboard = location.pathname === "/owner-dashboard";

  return (
    <nav className=" text-black p-4 shadow-md py-5 ">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Pizza Logo"
            className="w-10 h-10 rounded-[100%]"
          />
          <span className="text-2xl font-bold">PizzaShop</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-lg font-semibold">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          {!isOwnerDashboard && (
            <>
              <Link to="/menu" className="hover:text-yellow-300 transition">Menu</Link>
              <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
              <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
            </>
          )}
        </div>

        {/* User Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {/* Dashboard Button (Hidden if already on Dashboard) */}
              {user.role === "owner" && !isOwnerDashboard && (
                <button
                  onClick={() => navigate("/owner-dashboard")}
                  className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white font-bold transition"
                >
                  Owner Dashboard
                </button>
              )}
              {user.role === "customer" && location.pathname !== "/customer-dashboard" && (
                <button
                  onClick={() => navigate("/customer-dashboard")}
                  className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg text-white font-bold transition"
                >
                  Customer Dashboard
                </button>
              )}

              {/* Logout Button */}
              <button 
                onClick={logout} 
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-black font-bold transition"
              >
                Logout
              </button>
            </>
          ) : (
            // Hide Login button if on the login page
            location.pathname !== "/login" && (
              <Link 
                to="/login" 
                className="bg-white text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-200 transition"
              >
                Login
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
