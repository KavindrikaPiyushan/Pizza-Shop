import React, { useState,useContext } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { usePop } from "../../context/PopupContext";

export default function AddProduct() {

  const {closePopup} = usePop();
  
  const [image, setImage] = useState(null);
  const [product, setProduct] = useState({
    title: "",
    price: "",
    category: "",
    size: "",
    crust: "",
    spiceLevel: "",
    toppings: [],
    description: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleToppingsChange = (e) => {
    const { value, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      toppings: checked
        ? [...prev.toppings, value]
        : prev.toppings.filter((t) => t !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Details:", product);
  };

  const closebtn = ()=>{
    closePopup();
  }


  return (
    <div className="fixed inset-0   flex items-center justify-center z-50" >
    
     <div className="absolute inset-0   bg-black opacity-70 -z-10"></div>

      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
       <div className="flex justify-between mb-4 "> <h2 className="text-2xl font-bold ">Add New Product</h2>
        <button
        
          onClick={closebtn}
          className="float-right inline text-gray-600 hover:text-gray-900"
        >
          <FaRegWindowClose size={24} />
        </button>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Side: Image Upload */}
          <div className="border border-gray-300 p-4 flex flex-col items-center justify-center bg-gray-100 rounded-lg">
            {image ? (
              <img src={image} alt="Uploaded" className=" w-60 h-60 object-cover mb-3 rounded-lg" />
            ) : (
              <div className=" w-60 h-60 bg-gray-200 flex items-center justify-center text-gray-500 rounded-lg">
                No Image
              </div>
            )}
            <input type="file" accept="image/*" onChange={handleImageChange} className="mt-2 text-sm" />
          </div>

          {/* Right Side: Product Details */}
          <div className="space-y-4">
            <div>
              <label className="block  text-sm font-medium">Product Name</label>
              <input type="text" name="title" value={product.title} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter pizza name" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Price ($)</label>
              <input type="number" name="price" value={product.price} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter price" required />
            </div>
            <div>
              <label className="block text-sm font-medium">Category</label>
              <select name="category" value={product.category} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required>
                <option value="">Select category</option>
                <option value="veg">Veg Pizza</option>
                <option value="non-veg">Non-Veg Pizza</option>
                <option value="cheese">Cheese Pizza</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Size</label>
              <select name="size" value={product.size} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required>
                <option value="">Select size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Crust Type</label>
              <select name="crust" value={product.crust} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required>
                <option value="">Select crust</option>
                <option value="thin">Thin Crust</option>
                <option value="thick">Thick Crust</option>
                <option value="stuffed">Stuffed Crust</option>
              </select>
            </div>

          </div>

          <div>
              <label className="block text-sm font-medium">Spice Level</label>
              <select name="spiceLevel" value={product.spiceLevel} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" required>
                <option value="">Select spice level</option>
                <option value="mild">Mild</option>
                <option value="medium">Medium</option>
                <option value="hot">Hot</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Extra Toppings</label>
              <div className="flex flex-wrap gap-2">
                {['Olives', 'Mushrooms', 'Jalapenos', 'Extra Cheese', 'Chicken'].map((topping) => (
                  <label key={topping} className="flex items-center">
                    <input
                      type="checkbox"
                      value={topping}
                      checked={product.toppings.includes(topping)}
                      onChange={handleToppingsChange}
                      className="mr-2"
                    />
                    {topping}
                  </label>
                ))}
              </div>
            </div>
          {/* Bottom Section: Description */}
          <div className="col-span-2">
            <label className="block text-sm font-medium">Description</label>
            <textarea name="description" value={product.description} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-md" placeholder="Enter product details..." rows="4" required></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 flex justify-end">
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Add Product
            </button>
          </div>
        </form>
      </div>
  
    </div>
  );
}
