import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Cards } from "../../components";
import { hmbg } from "../../assets";

const Banner = () => {
  return (
    <div className="w-full h-screen ">
      <div className="absolute left-0 top-0 h-full w-full bg-[#00000000] backdrop-blur-sm z-10"></div>
      <img className="absolute w-full h-screen left-0 top-0 z-0" src={hmbg} alt="" />
      <div className="w-11/12 mx-auto h-full grid grid-cols-1 md:grid-cols-2 relative text-white  z-50">
        {/*  */}
        <div className="flex flex-col gap-6 justify-center h-full">
          <h1 className="text-8xl">
            Global
            <br /> Creative
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, quae?</p>
          <div className="text-yellow-300 flex items-center gap-1">
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <MdOutlineStar />
            <p className="text-white ml-3">1000+ Customers</p>
          </div>
          <div className="flex items-center gap-2 font-light">
            <Link
              className="bg-black text-white w-44 h-12 px-5  shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30  transition-all duration-300 rounded-full flex justify-between gap-3 items-center"
              to={"/"}
            >
              <p>Chat with Us</p>
              <div className="h-7 w-7 grid place-items-center bg-white text-black rounded-full">
                <IoIosArrowRoundForward className="text-xl" />
              </div>
            </Link>
            <Link
              to="/"
              className="
    h-12 w-44 rounded-full grid place-items-center
    bg-white
    backdrop-blur-xl 
    shadow-lg shadow-black/20
    text-gray-800 
    hover:text-white
    transition-all duration-300
    hover:bg-black
    hover:shadow-xl hover:shadow-black/30
  "
            >
              Our Products
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="grid place-items-center h-full w-full">
          <div className="w-[500px] h-[600px]">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
