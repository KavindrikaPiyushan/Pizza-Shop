import { Link, useLocation } from "react-router-dom";

function Navbar({ user, logout }) {
  const location = useLocation(); // Get the current route

  return (
    <nav className="bg-red-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png" 
            alt="Pizza Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold">PizzaShop</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6 text-lg">
          <Link to="/" className="hover:text-yellow-300 transition">Home</Link>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>

        {/* User Section */}
        <div className="flex items-center gap-4">
          {user ? (
            <>
              {user.role === "owner" && (
                <Link to="/owner-dashboard" className="hover:text-yellow-300 transition">
                  Owner Dashboard
                </Link>
              )}
              {user.role === "customer" && (
                <Link to="/customer-dashboard" className="hover:text-yellow-300 transition">
                  Customer Dashboard
                </Link>
              )}
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
