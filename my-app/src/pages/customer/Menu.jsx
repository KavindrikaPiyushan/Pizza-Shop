import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCartPlus } from "react-icons/bs";
import { usePop } from "../../context/PopupContext";
import Footer from "../../components/Footer";

// Menu Data with Subcategories
const menuData = {
  pizzas: {
    "Classic Pizzas": [
      { id: 1, name: "Margherita", description: "Classic cheese pizza with basil.", price: 1200, image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" },
      { id: 2, name: "Pepperoni", description: "Loaded with spicy pepperoni.", price: 1500, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
      { id: 14, name: "Margherita", description: "Classic cheese pizza with basil.", price: 1200, image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" },
      { id: 15, name: "Pepperoni", description: "Loaded with spicy pepperoni.", price: 1500, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
      { id: 16, name: "Margherita", description: "Classic cheese pizza with basil.", price: 1200, image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" },
      { id: 17, name: "Pepperoni", description: "Loaded with spicy pepperoni.", price: 1500, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
      { id: 18, name: "Margherita", description: "Classic cheese pizza with basil.", price: 1200, image: "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg" },
      { id: 19, name: "Pepperoni", description: "Loaded with spicy pepperoni.", price: 1500, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
    ],
    "Special Pizzas": [
      { id: 3, name: "BBQ Chicken", description: "Grilled chicken & BBQ sauce.", price: 1700, image: "/images/bbq-chicken.jpg" },
      { id: 4, name: "Hawaiian", description: "Ham & pineapple toppings.", price: 1600, image: "/images/hawaiian.jpg" },
    ],
  },
  beverages: {
    "Soft Drinks": [
      { id: 5, name: "Coca-Cola", description: "Chilled classic Coke.", price: 400, image: "/images/coca-cola.jpg" },
      { id: 6, name: "Pepsi", description: "Refreshing Pepsi.", price: 400, image: "/images/pepsi.jpg" },
    ],
    "Juices & Coffee": [
      { id: 7, name: "Orange Juice", description: "Freshly squeezed juice.", price: 600, image: "/images/orange-juice.jpg" },
      { id: 8, name: "Iced Coffee", description: "Cold brewed coffee.", price: 750, image: "/images/iced-coffee.jpg" },
    ],
  },
  desserts: {
    "Cakes": [
      { id: 9, name: "Chocolate Lava Cake", description: "Warm molten center.", price: 900, image: "/images/lava-cake.jpg" },
      { id: 10, name: "Cheesecake", description: "Classic creamy cheesecake.", price: 1000, image: "/images/cheesecake.jpg" },
    ],
    "Classic Desserts": [
      { id: 11, name: "Tiramisu", description: "Coffee-soaked layers.", price: 1100, image: "/images/tiramisu.jpg" },
    ],
  },
  comboPacks: {
    "Couple Combos": [
      { id: 12, name: "Couple Pizza Deal", description: "2 pizzas + drink.", price: 2500, image: "/images/combo-couple.jpg" },
    ],
    "Family Combos": [
      { id: 13, name: "Family Feast", description: "3 large pizzas + 2 sides + drinks.", price: 5500, image: "/images/combo-family.jpg" },
    ],
  },
};

export default function Menu() {

  const {isModalOpen,setIsModalOpen,selectedPizza,setSelectedPizza,quantity,setQuantity,cart, setCart} = usePop();
  const [activeCategory, setActiveCategory] = useState("pizzas");
  const [activeSubCategory, setActiveSubCategory] = useState(Object.keys(menuData["pizzas"])[0]);

   const navigate = useNavigate();

  const openModal = (pizza)=>{
    
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if(!isLoggedIn){
      navigate("/login");
      return;
    }
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  }

  const closeModal = ()=>{
    setIsModalOpen(false);
    setSelectedPizza(null);
    setQuantity(1);

  }

  const handleQuantityChange= (event) =>{
    setQuantity(Number(event.target.value));
  }

  const addToCart = () => {
    const totalPrice = selectedPizza.price * quantity;
    const cartItem = { ...selectedPizza, quantity, totalPrice };
    setCart((prevCart) => [...prevCart, cartItem]);
    navigate("/cart"); 
     closeModal(); 


  
    
  };
  
  useEffect(()=>{
    console.log("Is modal Open " +isModalOpen);
    console.log("is selected pizza " + selectedPizza);
  },[isModalOpen,selectedPizza])

  return (
    <div className="bg-gray-100 min-h-screen">
    
      <div className="max-w-6xl mx-auto py-10 px-5">

       
        <div className="bg-white shadow-lg rounded-xl border border-gray-200 mx-auto py-3 px-6 flex justify-center space-x-6 w-fit">
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              className={`text-lg font-semibold px-5 py-2 rounded-lg transition-all duration-300 shadow-md ${
                activeCategory === category ? "bg-green-500 text-white scale-105" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => {
                setActiveCategory(category);
                setActiveSubCategory(Object.keys(menuData[category])[0]); 
              }}
            >
              {category === "comboPacks" ? "Combo Packs" : category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

      
        <div className="mt-6 flex justify-center space-x-4">
          {Object.keys(menuData[activeCategory]).map((subCategory) => (
            <button
              key={subCategory}
              className={`text-md px-4 py-1 rounded-xl transition-all duration-200 ${
                activeSubCategory === subCategory ? "text-yellow-600 border-b-2 border-yellow-600 font-medium" : "text-gray-500 hover:text-yellow-600"
              }`}
              onClick={() => setActiveSubCategory(subCategory)}
            >
              {subCategory}
            </button>
          ))}
        </div>

      
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-5 capitalize">{activeSubCategory}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {menuData[activeCategory][activeSubCategory].map((item) => (
              <div key={item.id} className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center">
                <img src={item.image} alt={item.name} className="w-40 h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-700">{item.name}</h3>
                <p className="text-gray-600 text-sm text-center">{item.description}</p>
                <p className="text-lg font-bold text-red-600 mt-3">Rs {item.price}</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 flex items-center gap-2 hover:bg-red-600 transition" onClick={()=>openModal(item)} >
                  <BsCartPlus className="text-lg" /> Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
       {isModalOpen && selectedPizza && (
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="relative bg-white rounded-lg p-6 w-96 z-10">
                  <h2 className="text-2xl font-bold mb-4">Select Quantity</h2>
                  <div className="flex justify-between mb-4">
                    <img
                      src={selectedPizza.image}
                      alt={selectedPizza.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold">{selectedPizza.name}</h3>
                      <p className="text-lg text-red-600">Rs. {selectedPizza.price}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="quantity" className="text-lg">Quantity:</label>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      className="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="mb-4">
                    <p className="text-xl font-bold">Total Price: Rs. {selectedPizza.price * quantity}</p>
                  </div>
                  <div className="flex justify-between">
                    <button
                      onClick={closeModal}
                      className="px-6 py-2 bg-gray-500 text-white rounded-lg"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={addToCart}
                      className="px-6 py-2 bg-green-500 text-white rounded-lg"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )}
      
            <Footer />
    </div>
  );
}
