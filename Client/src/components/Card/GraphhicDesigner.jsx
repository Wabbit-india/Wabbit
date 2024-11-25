import {useEffect} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
export default function Logocard() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const videoCategories = [
    "E-commerce",
    "Small Business",
    "Gaming",
    "Sports & Fitness",
    "Food and Beverage",
    "Real Estate",
    "Beauty & Cosmetics",
    "Fashion & Luxury",
  ];

  const editors = [
    {
      name: "Harsh Vaishnav",
      profession: "Video Editor",
      country: "India",
      deliveryTime: "24 Hour's",
      price: "From ₹441",
      rating: "⭐4.3",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "John Doe",
      profession: "Video Editor",
      country: "USA",
      deliveryTime: "48 Hour's",
      price: "From ₹500",
      rating: "⭐4.8",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Jane Smith",
      profession: "Video Editor",
      country: "Canada",
      deliveryTime: "12 Hour's",
      price: "From ₹350",
      rating: "⭐4.5",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Michael Scott",
      profession: "Video Editor",
      country: "USA",
      deliveryTime: "36 Hour's",
      price: "From ₹650",
      rating: "⭐4.7",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Rachel Green",
      profession: "Video Editor",
      country: "UK",
      deliveryTime: "24 Hour's",
      price: "From ₹600",
      rating: "⭐4.9",
      image: "https://via.placeholder.com/100",
    },
    {
      name: "Monica Geller",
      profession: "Video Editor",
      country: "USA",
      deliveryTime: "24 Hour's",
      price: "From ₹700",
      rating: "⭐4.6",
      image: "https://via.placeholder.com/100",
    },
  ];

  return (
    <>    
    <div className="my-10">
      <Navbar/>
    </div>
    <div className="w-full min-h-screen bg-gray-100 sm:p-8 md:p-14 font-nunito ">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-5xl font-nunito text-left">
        Graphic Designer        </h1>
        <p className="text-lg md:text-xl text-left mt-2">
        Collaborate with designers who understand your industry and deliver tailored solutions.               </p>

        {/* Video Categories */}
        <div className="w-full overflow-x-scroll">
          <div className="flex w-[1000px] lg:w-full  justify-center sm:justify-start space-x-2 sm:space-x-4 mt-6 overflow-x-scroll  px-4">
            {videoCategories.map((category, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-28 sm:w-40 md:w-48 h-10 bg-white shadow-lg rounded-lg flex justify-center items-center m-2">
                <h1 className="text-center text-sm md:text-base">{category}</h1>
              </div>
            ))}
          </div>
        </div>
        {/* Editor Cards */}
        <div className="flex flex-wrap justify-center gap-6 mt-8  w-full">
          {editors.map((editor, index) => (
            <div
              key={index}
              className="bg-white shadow-lg w-full md:w-[300px] lg:w-[400px] p-4 rounded-lg flex flex-col">
              <div className="flex items-center">
                <img
                  src={editor.image}
                  alt={editor.name}
                  className="rounded-full w-14 h-14 sm:w-24 sm:h-24"
                />
                <div className="ml-4">
                  <h1 className="text-lg sm:text-xl md:text-2xl text-left">
                    {editor.name}
                  </h1>
                  <p className="text-left text-sm md:text-base">
                    {editor.profession}
                  </p>
                  <h2 className="text-left text-sm md:text-base">
                    {editor.country}
                  </h2>
                </div>
              </div>

              {/* Delivery & Price Section */}
              <div className="flex justify-between mt-4 text-sm md:text-base">
                <div className="text-left">
                  <h1>Delivery Time</h1>
                  <h2>{editor.deliveryTime}</h2>
                </div>
                <div className="text-left">
                  <h1>{editor.price}</h1>
                </div>
              </div>
              <hr className="w-[80%] mx-auto mt-4" />

              {/* Rating & Hire Button Section */}
              <div className="flex py-5 justify-between items-center">
                <h1 className="text-left text-sm md:text-base">
                  {editor.rating}
                </h1>
                <button className="py-2 px-4 bg-maincolor text-white rounded-full hover:bg-opacity-90 transition">
                  Hire Me
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>

  );
}
