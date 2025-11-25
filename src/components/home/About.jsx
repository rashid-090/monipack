import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { globe, sidepattern } from "../../assets";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <div className="bg-white text-black rounded-b-4xl">
      <div className="w-11/12 mx-auto py-32 relative">
      <img className="absolute -left-10 -top-0 opacity-40 object-cover" src={globe} alt="" />
      <div className="grid grid-cols-1 md:grid-cols-2 relative">
        <div>
          <div className="bg-gray-100 rounded-full px-4 py-1.5 w-fit text-sm flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-black"></div>About Us
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <p className="text-4xl">
            We help business elevate their value through custom{" "}
            <span className="text-gray-400">
              software development, product design, QA and consulting services.
            </span>
          </p>
          <div className="h-[1.5px] w-full bg-gradient-to-r from-gray-100 via-gray-300 to-gary-100"></div>
          <div className="flex justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <p className="text-xs capitalize text-gray-600">Explore our social</p>
              <div className="w-10 h-10 bg-main-bg text-white grid place-items-center rounded-full">
                <FaXTwitter className="text-lg" />
              </div>
              <div className="w-10 h-10 bg-gray-100 text-black grid place-items-center rounded-full">
                <FaInstagram className="text-lg" />
              </div>
              <div className="w-10 h-10 bg-gray-100 text-black grid place-items-center rounded-full">
                <FaLinkedinIn className="text-lg" />
              </div>
            </div>

            <Link
              className="bg-white text-black w-40 h-12 px-5 border border-gray-200  hover:shadow-lg   transition-all duration-300 rounded-full flex justify-between gap-3 items-center"
              to={"/"}
            >
              <p>About Us</p>
              <div className="h-7 w-7 grid place-items-center bg-white text-black rounded-full">
                <IoIosArrowRoundForward className="text-xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
