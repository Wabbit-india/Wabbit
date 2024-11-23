import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Home/Navbar/Navbar";
import Mobilenav from "../components/Home/Navbar/Mobilenav";
import image1 from "../assets/About/slide1.gif";
import image2 from "../assets/About/slide2.png";
import image3 from "../assets/About/slide3.png";
import { GoDot } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import Footer from "../components/Home/Footer";
import { Mycontext } from "../context/Mycontext";
import { useNavigate } from "react-router-dom";

const images = [image1, image2, image3];

export default function About() {
  const { isnavbar } = useContext(Mycontext);
  const [selected, setSelected] = useState(0);
  const [fade, setFade] = useState(true);
  const navigate = useNavigate();
    useEffect(() => {
        const _id = localStorage.getItem("_id");
        const authtoken = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        const userType = localStorage.getItem("userType");
    
        if (_id && authtoken && username && !userType) {
          navigate("/getinfo"); // Redirect to "/getinfo" if userType is missing
        }
    }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setSelected((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      {isnavbar && <Mobilenav />}

      <div className="pt-[70px] w-[100vw] flex flex-col items-center justify-center font-nunito z-0">
        <div className=" lg:w-[90%] lg:h-[250px] sm:w-[75%] sm:h-[150px] xl:h-[350px] xl:w-[70%] 320:w-[85%] 320:h-[135px]  mt-9 bg-cover relative">
          <img
            className={`w-[100%] h-[100%] object-fit transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
            src={images[selected]}
            alt=""
          />
          <div className="absolute bottom-3 w-[100%] flex flex-row gap-3 items-center justify-center">
            {images.map((_, index) => (
              <p
                key={index}
                className={`cursor-pointer text-black text-xl ${fade ? 'opacity-100' : 'opacity-80'}`}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setSelected(index);
                    setFade(true);
                  }, 500);
                }}
              >
                {selected === index ? <GoDotFill /> : <GoDot />}
              </p>
            ))}
          </div>
        </div>
        <div className="w-[90%] flex flex-col gap-4 pb-28">
          <div className="text-center 320:text-[29px] mt-7  text-maincolor md:text-[50px] xl:text-[60px] font-[700]">
            About Us
          </div>
          <div className="lg:text-[28px] sm:text-[22px] 320:text-[18px] ">
            Wabbit began with a vision to revolutionize how businesses grow and
            how talent can thrive. Our mission is to bridge the gap between
            creativity and innovation, empowering companies to move faster and
            giving talent a platform to unlock their true potential.
          </div>
          <div className="lg:text-[28px] sm:text-[22px] 320:text-[18px] ">
            For us, it’s all about creating meaningful opportunities. Wabbit is
            where businesses of all sizes and ambitious individuals come together
            to achieve extraordinary things. I’ve witnessed firsthand how this
            platform has changed the game—by fostering relationships that go
            beyond projects and transactions, enabling growth on both sides.
          </div>
          <div className="sm:text-[29px] font-[700] 320:text-[22px] ">
            We see what you do</div>
          <div className="lg:text-[28px] sm:text-[22px] 320:text-[18px] ">
            Every project, whether it’s a quick UI design or an expansive
            development cycle, reflects the dedication and passion of Wabbit's
            users. We’ve designed Wabbit to align the goals of our clients with
            the creative energy of our talent, ensuring that every collaboration
            leads to better outcomes and continuous growth.
          </div>
          <div className="sm:text-[29px] font-[700] 320:text-[22px] ">
            Wabbit is your innovation engine
          </div>
          <div className="lg:text-[28px] sm:text-[22px] 320:text-[18px] ">
            For clients, Wabbit is where you find the talent that accelerates your
            vision. For independent creators, this is where you expand your
            potential, knowing you are a critical part of a larger team. We aim to
            make every project more impactful, more rewarding, and more aligned
            with the future you envision.
          </div>
          <div className="sm:text-[29px] font-[700] 320:text-[22px] ">
            We’re building your future, together
          </div>
          <div className="lg:text-[28px] sm:text-[22px] 320:text-[18px] ">
            We see your goals, and our platform is built to help you achieve them.
            Wabbit helps you build your network of trusted professionals,
            transforming the way you work. Whether you’re here for short-term wins
            or long-term growth, we’re with you every step of the way.
          </div>
          <div className="lg:text-[28px] sm:text-[22px] 320:text-[18px] ">
            At Wabbit, we’re still driven by our mission to create impactful
            economic opportunities worldwide, and that includes you. We can’t wait
            to see how far you’ll go.
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
