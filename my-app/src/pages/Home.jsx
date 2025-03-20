import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import {getImagesFromFolder} from "../service/imageService";
import Loading from "../components/Loading";

export default function Home() {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const exploreMenuRef = useRef(null);
  const [loading,setLoading] = useState(true);

  
  const [images,setImages] = useState([]);

  useEffect(()=>{
       const getImages = async()=>{
        try{
           const data = await getImagesFromFolder("Home-Page/background-images");
           setImages(data);
           console.log('data',images);
           setLoading(false);
        }catch(error){
            console.error('Error fetching images:', error);
            throw error;
            setLoading(false);
        }
       }
       getImages();
  },[]);
  
  useEffect(() => {
    console.log('Updated images:', images); // This will run whenever `images` changes
  }, [images]);
  


  // const images = [
  //   "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg",
  //   "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  //   "https://www.justspices.co.uk/media/magefan_blog/shutterstock_1048511935.jpg",
  //   "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg"

  // ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const pizzas = [
    { id: 1, name: "Margherita", price: 1200, image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg" },
    { id: 2, name: "Pepperoni", price: 1400, image: "https://www.allrecipes.com/thmb/fFW1o307WSqFFYQ3-QXYVpnFj6E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/48727-Mikes-homemade-pizza-DDMFS-beauty-4x3-BG-2974-a7a9842c14e34ca699f3b7d7143256cf.jpg" },
    { id: 3, name: "BBQ Chicken", price: 1600, image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38" },
    { id: 4, name: "Veggie Supreme", price: 1300, image: "https://www.justspices.co.uk/media/magefan_blog/shutterstock_1048511935.jpg" },
  ];

  // Customer Reviews Data
  const reviews = [
    { name: "John Doe", rating: 5, review: "Best pizza I've ever had! Will definitely order again." },
    { name: "Jane Smith", rating: 4, review: "Great flavors, but the crust could be a bit crispier." },
    { name: "Emma Brown", rating: 5, review: "Absolutely love the BBQ chicken pizza! Highly recommend." },
  ];

  // Featured Pizza of the Day
  const featuredPizza = {
    name: "Hawaiian",
    price: 1500,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38", // Replace with actual image
    description: "A tropical delight with pineapple, ham, and a hint of sweetness.",
  };

  // Special Offers Section
  const offers = [
    { title: "Buy 1 Get 1 Free", description: "Enjoy a free pizza with the purchase of any large pizza." },
    { title: "10% Off on Orders Above Rs. 3000", description: "Get 20% off on your total order when you spend over Rs. 3000." },
    { title: "20% Off on Orders Above Rs. 7000", description: "Get 20% off on your total order when you spend over Rs. 3000." },
  ];

  // Open the modal for quantity selection
 
  const openModal = (pizza)=>{
    
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if(!isLoggedIn){
      navigate("/login");
      return;
    }
    setSelectedPizza(pizza);
    setIsModalOpen(true);
  }

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPizza(null);
  };

  // Handle quantity change
  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  // Add pizza to cart with the selected quantity
  const addToCart = () => {
    const totalPrice = selectedPizza.price * quantity;
    const cartItem = { ...selectedPizza, quantity, totalPrice };
    setCart((prevCart) => [...prevCart, cartItem]);
    closeModal(); // Close modal after adding to cart
    navigate("/cart"); // Navigate to the cart page
  };

  const scrollToMenu = () => {
    if (exploreMenuRef.current) {
      exploreMenuRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="bg-gray-100 min-h-screen">
      
      {loading?(<Loading/>):(<><div className="relative h-[70vh]   flex  items-center justify-center text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out transform"
          style={{
            backgroundImage: `url(${images[currentImageIndex]})`,
            transform: "scale(1.1)", // Slight zoom effect
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 text-center">
          <h1 className="text-5xl font-bold">Delicious Pizzas, Delivered Hot!</h1>
          <p className="text-lg mt-3">Order your favorite pizza in just a few clicks.</p>
          <button className="mt-5 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg rounded-lg" onClick={scrollToMenu}>
            Explore Now
          </button>
        </div>
      </div>

      
     

      {/* Special Offers Section */}
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Special Offers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div key={index} className="bg-yellow-500 p-6 rounded-lg text-white shadow-lg">
              <h3 className="text-2xl font-semibold">{offer.title}</h3>
              <p className="mt-2 text-lg">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Pizza of the Day</h2>
        <div className="max-w-xs mx-auto">
          <img
            src={featuredPizza.image}
            alt={featuredPizza.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold">{featuredPizza.name}</h3>
          <p className="text-lg text-gray-600 mb-4">{featuredPizza.description}</p>
          <p className="text-xl font-bold text-red-600">Rs. {featuredPizza.price}</p>
        </div>
      </div>

     

      {/* Pizza Menu Section */}
      <div className="container mx-auto py-12" ref={exploreMenuRef}>
        <h2 className="text-3xl font-bold text-center mb-6">Explore Our Menu</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
          {pizzas.map((pizza) => (
            <div
              key={pizza.id}
              className="bg-white shadow-lg rounded-lg p-4 text-center hover:scale-105 transition transform"
            >
              <img
                src={pizza.image}
                alt={pizza.name}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{pizza.name}</h3>
              <p className="text-lg font-bold text-red-600 mt-2">Rs. {pizza.price}</p>
              <button
                className="mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg"
                onClick={() => openModal(pizza)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
       {/* Customer Reviews Section */}
       <div className="container mx-auto py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{review.name}</h3>
              <p className="text-yellow-500 mb-2">Rating: {review.rating} / 5</p>
              <p className="text-lg italic">"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Quantity Selection */}
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
</>)}

      
          </div>
  );
}
