import React from "react";
import { Link } from "react-router-dom";
import image2 from "../pages/image/image2.jpg"


export default function Feed() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_300px] gap-4 p-4 md:p-8">
      <div className="flex flex-col gap-6 h-screen"> {/* Set to full viewport height */}
        <div className="relative rounded-lg overflow-hidden w-full h-4/6"> {/* Adjusted height */}
          <img
            src={image2}
            alt="Auction Item"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold">Handcrafted Ceramic Vase</h2>
            <p className="text-lg">
              Unique one-of-a-kind ceramic vase, handcrafted by a local artist.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="text-2xl font-bold w-1/2">Current Bid: $250</div> {/* Ensured equal width */}
          <div className="flex gap-2 w-1/2"> {/* Ensured equal width */}
            <input
              type="number"
              placeholder="Enter your bid"
              className="w-full max-w-[150px] border border-gray-300 rounded p-2"
            />
            <button className="bg-teal-500 text-white px-4 py-2 rounded">Place Bid</button>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <h3 className="text-xl font-bold">Upcoming Auctions</h3>
        <div className="grid gap-4">
          <Link to="#" className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="Auction Item"
              className="rounded-lg w-20 h-20 object-cover"
            />
            <div>
              <h4 className="font-semibold">Handwoven Tapestry</h4>
              <p className="text-sm text-gray-500">Starts in 2 hours</p>
            </div>
          </Link>
          <Link to="#" className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="Auction Item"
              className="rounded-lg w-20 h-20 object-cover"
            />
            <div>
              <h4 className="font-semibold">Carved Wooden Sculpture</h4>
              <p className="text-sm text-gray-500">Starts in 4 hours</p>
            </div>
          </Link>
          <Link to="#" className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="Auction Item"
              className="rounded-lg w-20 h-20 object-cover"
            />
            <div>
              <h4 className="font-semibold">Stained Glass Lamp</h4>
              <p className="text-sm text-gray-500">Starts in 6 hours</p>
            </div>
          </Link>
          <Link to="#" className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="Auction Item"
              className="rounded-lg w-20 h-20 object-cover"
            />
            <div>
              <h4 className="font-semibold">Handmade Pottery Set</h4>
              <p className="text-sm text-gray-500">Starts in 8 hours</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
