import React from "react";
import cameraImage from "../../assets/Home/ForFreelance/img02.png";
import canvaImage from "../../assets/Home/canvaCategoryImg.png";
import webDeveloper from "../../assets/Home/webDeveloper.png";
import graphicDesigner from "../../assets/Home/graphicDesigner.png";
import blogwriter from "../../assets/Home/blogwriter.png";
import star from "../../assets/Home/ForFreelance/img01.png";
import photoeditor from "../../assets/Home/photoeditor.png";

export default function Category() {
  const categories = [
    { image: canvaImage, altText: "canva expert", label: "Canva Expert" },
    { image: cameraImage, altText: "video editor", label: "Video Editor" },
    { image: star, altText: "logo designer", label: "Logo Designer" },
    { image: photoeditor, altText: "photo editor", label: "Photo Editor" },
    { image: webDeveloper, altText: "web developer", label: "Web Developer" },
    { image: cameraImage, altText: "animator", label: "Animator" },
    { image: blogwriter, altText: "content writer", label: "Content Writer" },
    { image: graphicDesigner, altText: "graphic designer", label: "Graphic Designer" }
  ];

  return (
    <div className="min-h-[100vh]  flex items-center p-8 flex-col justify-center gap-7 mt-[50px]">
      <div className="text-center w-[90vw] lg:w-[90vw] h-auto text-black lg:text-start">
        <p className=" text-[25px] sm:text-[35px] lg:text-6xl font-nunito ">Browse professionals by category</p>
      </div>
      <div className="lg:w-[90vw] h-auto text-black">
        <p className="text-center font-nunito sm:text-[25px] lg:text-2xl lg:text-start">
          Searching for work?
          <a  
            href=""
            className="text-green-600 underline underline-offset-4 italic"
          >
            Join Wabbit
          </a>
        </p>
      </div>

      <div className="flex flex-row flex-wrap min-h-[70vh] justify-evenly lg:w-[90vw] lg:gap-[5%]">
        {categories.map((category, index) => (
          <div
            key={index}
            className="w-[45%] h-[16vh] lg:w-[20%] my-2 lg:h-[20vh] bg-bgmain rounded-2xl lg:my-5 p-2 flex items-center justify-center flex-col cursor-pointer hover:scale-105 shadow-custom-complex transition duration-300"
          >
            <div className="h-[50%] w-[50%] flex items-center justify-center">
              <img
                src={category.image}
                alt={category.altText}
                className="h-[100%] w-[100%] object-contain"
              />
            </div>
            <p className="text-[11px] sm:text-[22px] lg:text-2xl font-semibold">{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
