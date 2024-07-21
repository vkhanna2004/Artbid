import React from "react";
import "../index.css";
import image1 from "../pages/image/image1.jpg";
import image2 from "../pages/image/image2.jpg";
import image3 from "../pages/image/image3.jpg";
import image4 from "../pages/image/image4.jpg";
import image5 from "../pages/image/image5.jpg";
import image6 from "../pages/image/image6.jpg";
import image7 from "../pages/image/image7.jpg";
import image8 from "../pages/image/image8.jpg";
import image9 from "../pages/image/image9.jpg";

function Carousel() {
  return (
    <div className="conteudo  p-4">
      <div className="carrosel flex overflow-hidden whitespace-nowrap">
        <div className="caixa__card inline-flex flex-col items-center justify-center rounded-2xl h-52 w-72 mr-5 bg-gradient-to-r from-yellow-300 to-pink-600">
          <h4 className="text-black mb-2 font-semibold">Blockchain Authentication</h4>
          <div className="overflow-hidden h-36 w-36 rounded-full">
            <img
              src={image9}
              alt="image9"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="caixa__card inline-flex flex-col items-center justify-center rounded-2xl h-52 w-72 mr-5 bg-gradient-to-r from-blue-300 to-green-600">
          <h4 className="text-black mb-2 font-semibold">Social Bidding</h4>
          <div className="overflow-hidden h-36 w-36 rounded-full">
            <img
              src={image5}
              alt="image5"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="caixa__card inline-flex flex-col items-center justify-center rounded-2xl h-52 w-72 mr-5 bg-gradient-to-r from-purple-300 to-indigo-600">
          <h4 className="text-black mb-2 font-semibold">Virtual Art Gallery</h4>
          <div className="overflow-hidden h-36 w-36 rounded-full">
            <img
              src={image7}
              alt="image7"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="caixa__card inline-flex flex-col items-center justify-center rounded-2xl h-52 w-72 mr-5 bg-gradient-to-r from-red-300 to-orange-600">
          <h4 className="text-black mb-2 font-semibold">AI powered Art Valuation</h4>
          <div className="overflow-hidden h-36 w-36 rounded-full">
            <img
              src={image2}
              alt="image2"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="caixa__card inline-flex flex-col items-center justify-center rounded-2xl h-52 w-72 mr-5 bg-gradient-to-r from-green-300 to-teal-600">
          <h4 className="text-black font-semibold mb-2">Artist Profiles and Spotlight</h4>
          <div className="overflow-hidden h-36 w-36 rounded-full">
            <img
              src={image3}
              alt="image3"
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
