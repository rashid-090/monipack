import React from "react";
import { MLogo } from "../assets";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const menuItem=[
  {
    label:`home`,
    link:`#`
  },
  {
    label:`about us`,
    link:`#`
  },
  {
    label:`products`,
    link:`#`
  },
  {
    label:`gallery`,
    link:`#`
  },
  {
    label:`contact us`,
    link:`#`
  },
]

const Navbar = () => {
  return (
    <nav className="w-full h-full">
      <div className="border-b border-gray-200">
        <div className="w-11/12 mx-auto flex justify-between items-center py-5">
          <div className="text-lg flex items-center gap-2">
            <a
              href="#"
              className="bg-white hover:bg-main-bg hover:text-white duration-200 h-9 w-9 border border-gray-200 rounded-full grid place-items-center"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="bg-white hover:bg-main-bg hover:text-white duration-200 h-9 w-9 border border-gray-200 rounded-full grid place-items-center"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-white hover:bg-main-bg hover:text-white duration-200 h-9 w-9 border border-gray-200 rounded-full grid place-items-center"
            >
              <FaInstagram />
            </a>
          </div>
          <div>
            <img
              className="w-28 border-4 border-[#e7e1e1] object-contain"
              src={MLogo}
              alt=""
            />
          </div>
          <button className="bg-white hover:bg-main-bg duration-300 hover:text-white border border-gray-200 rounded-full px-6 py-3 uppercase text-sm">
            contact
          </button>
        </div>
      </div>
      <div className="border-b border-gray-200">
          <ul className="py-5 flex items-center justify-center text-sm gap-5 uppercase">
            {menuItem?.map((item,index)=>(
              <Link to={item.link} key={index} className="hover:text-main-bg duration-200">{}{item.label}</Link>
              ))}
          </ul>
      </div>
    </nav>
  );
};

export default Navbar;
