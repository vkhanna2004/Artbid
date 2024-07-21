import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import authService from "../appwrite/auth";
import { Container } from "../components";
import { Link } from "react-router-dom";
import "../App.css";
import image1 from "./image/image1.jpg";
import {Carousel} from "../components/index";
import "../App.css";
import image10 from "./image/image10.jpg"

function Home() {
  const authStatus = useSelector((state) => state.auth.status);

  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await authService.getCurrentUser();
        if (userData) {
          setUsername(userData.name);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="w-full  text-center ">
      <Container>
        <div className=" px-20 border-t-2 border-gray-200 flex flex-col-reverse md:flex-row items-center md:items-start justify-between py-10">
          <div className=" md:ml-6">
            <h2 className="text-9xl text-teal-500 font-extrabold text-left">
              ARTBID
            </h2>
            <p className="text-3xl text-black/80 mt-4 font-semibold text-left">
              Art Bidding, Elevated !
            </p>
            <p className="text-2xl text-black/60 mt-4 font-semibold text-left">
              Leveraging blockchain technology to authenticate <br /> and track
              the provenance of art peices.
            </p>
          </div>
          <div className="w-[800px] max-w-xs h-auto">
            <img
              src={image1}
              alt="art image"
              className="width-full mb-6 md:mb-0 rounded-xl"
            />
          </div>
        </div>
        <div>
          <h2 className="text-3xl text-teal-500 mt-4 mb-4 font-semibold text-left">SERVICES</h2>
        <Carousel/>
        </div>

        <div className=" px-20 border-t-2 border-gray-200 flex flex-col-reverse md:flex-row items-center md:items-start justify-between py-10">
        <div className="w-[800px] max-w-xs h-auto">
            <img
              src={image10}
              alt="art image"
              className="width-full mb-6 md:mb-0 rounded-xl"
            />
          </div>
          <div className=" md:ml-6">
            
            <p className="text-3xl text-black/70 mt-4 font-semibold text-left">
            Discover what's hot with our trending now page
            </p>
            <p className="text-3xl text-black/70 mt-4 font-semibold text-left">
            with our 
           <span className="text-3xl text-teal-500 font-extrabold text-left pb-4"> TRENDING NOW</span> page.
            </p>
            
            <div className="mt-24"><Link to="/feed" className="text-7xl text-black/90 font-extrabold text-left py-4 px-16 mt-4 bg-teal-300 rounded-full">Click here </Link>
          </div>
            </div>
          
        </div>
        
      </Container>
    </div>
  );
}

export default Home;
