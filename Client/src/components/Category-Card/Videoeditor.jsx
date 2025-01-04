import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ClickAwayListener from "react-click-away-listener";
import Navbar from "../Home/Navbar/Navbar";
import FAQContent from "../Requirement/FAQContent";
import axios from "axios";
function Videoeditor() {
  const [profiles, setProfiles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const [skillswork, setSkillswork] = useState("Video Editor"); // Default to "Photo Editing"

  // Fetch profiles based on skillswork
  const fetchProfiles = async (skill) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `http://localhost:8000/api/getprofile?skillswork=${skill}`
      );
      setProfiles(response.data.data);
    } catch (err) {
      setError(err.response?.data?.error || "Error fetching profiles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (skillswork) {
      fetchProfiles(skillswork);
    }
  }, [skillswork]);

  const { pathname } = useLocation();
  const [isModal, setisModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handleClickAway = () => {
    setisModal(false);
  };

  useEffect(() => {
    if (isModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModal]);

  const editors = [
    {
      name: "Harsh Vaishnav",
      profession: "Video Editor",
      country: "India",
      deliveryTime: "24 Hour's",
      price: "From ₹400",
      rating: "⭐4.3",
      image: "https://img.freepik.com/free-photo/portrait-handsome-serious-man_23-2149022626.jpg",
    },
    {
      name: "Apoorv Sharma",
      profession: "Video Editor",
      country: "India",
      deliveryTime: "24 Hour's",
      price: "From ₹600",
      rating: "⭐4.3",
      image: "https://img.freepik.com/premium-photo/smiling-bearded-man_1030879-40664.jpg",
    },
    {
      name: "Prateek Mathur",
      profession: "Video Editor",
      country: "India",
      deliveryTime: "24 Hour's",
      price: "From ₹500",
      rating: "⭐4.3",
      image: "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg",
    },
    {
      name: "Nidhi Kachhawa",
      profession: "Video Editor",
      country: "India",
      deliveryTime: "24 Hour's",
      price: "From ₹650",
      rating: "⭐4.3",
      image: "https://img.freepik.com/free-photo/smiling-brunette-woman-with-crossed-arms-looking-camera-gray_171337-987.jpg?t=st=1733208862~exp=1733212462~hmac=773e8a9a74fc2b2cdc3e1c92e4911c8c90c7ca6dcb46f79df43023ea714ec39a&w=1060",
    },
    {
      name: "Komal Joshi",
      profession: "Video Editor",
      country: "India",
      deliveryTime: "24 Hour's",
      price: "From ₹550",
      rating: "⭐4.3",
      image: "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1733208714~exp=1733212314~hmac=6a79a664c957117f397dc1360be940c7bb46eb3f21ba2a9edb5b6fc495ec69a3&w=1060",
    },
    {
      name: "Nikhil sharma",
      profession: "Video Editor",
      country: "India",
      deliveryTime: "24 Hour's",
      price: "From ₹450",
      rating: "⭐4.3",
      image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1733208542~exp=1733212142~hmac=d34f020d7fc88808ac3ead3efef003c7de783ccbd23f63500f322004a4a9eaaf&w=1060",
    },
  ];

  return (
    <>
      <div className="my-10">
        <Navbar />
      </div>
      <div className="w-full min-h-screen bg-gray-100 sm:p-8 md:p-14 font-nunito">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-nunito text-left">
            Video Editor
          </h1>
          <p className="text-lg md:text-xl text-left mt-2">
            Transform your Video with professional editors.
          </p>

          {/* Editor Cards */}
          <div className="flex flex-wrap justify-center gap-6 mt-8  w-full">
            {profiles.map((editor, index) => (
              <div
                key={index}
                className="bg-white shadow-lg w-full md:w-[300px] lg:w-[400px] p-4 rounded-lg flex flex-col"
              >
                <div className="flex items-center">
                  <img
                    src={editor.image}
                    alt={editor.firstname}
                    className="rounded-full w-15 h-15 sm:w-24 sm:h-24 object-cover "
                  />
                  <div className="ml-4">
                    <h1 className="text-lg sm:text-xl md:text-2xl text-left">
                      {editor.firstname}{editor.lastname}
                    </h1>
                    <p className="text-left text-sm md:text-base">
                      {editor.skillswork}
                    </p>
                    <h2 className="text-left text-sm md:text-base">
                      {editor.region}
                    </h2>
                  </div>
                </div>

                {/* Delivery & Price Section */}
                <div className="flex justify-between mt-4 text-sm md:text-base">
                  <div className="text-left">
                    <h1>Delivery Time</h1>
                    <h2>{"24 Hour's"}</h2>
                  </div>
                  <div className="text-left">
                    <h1>{"100$"}</h1>
                  </div>
                </div>
                <hr className="w-[80%] mx-auto mt-4" />

                {/* Rating & Hire Button Section */}
                <div className="flex py-5 justify-between items-center">
                  <h1 className="text-left text-sm md:text-base">
                    {"⭐4.3"}
                  </h1>
                  <button
                    className="py-2 px-4 bg-maincolor text-white rounded-full hover:bg-opacity-90 transition"
                    onClick={() => {
                      setisModal(true);
                    }}
                  >Hire Me
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        {isModal && (
          <div className="absolute h-[100vh] w-[100vw] top-0 z-50 left-0 bg-[rgb(0,0,0,0.8)] flex items-center justify-center">
            <ClickAwayListener onClickAway={handleClickAway}>
              <div className="w-[90vw] md:w-[80vw] lg:w-[600px] xl:w-[550px] bg-white h-[85vh] rounded-2xl flex flex-row overflow-hidden">
                <FAQContent />
              </div>
            </ClickAwayListener>
          </div>
        )}
      </div>
    </>
  );
}

export default Videoeditor;
