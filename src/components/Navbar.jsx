import React from "react";
import { MLogo } from "../assets";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


const menuItem = [
  {
    label: `home`,
    link: `#`,
  },
  {
    label: `about us`,
    link: `#`,
  },
  {
    label: `products`,
    link: `#`,
  },
  {
    label: `gallery`,
    link: `#`,
  },
  {
    label: `contact us`,
    link: `#`,
  },
];

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full h-20 z-[9999]">
      <div className="w-11/12 mx-auto flex text-main-bg items-center justify-between py-5">
        <h2 className="text-3xl font-medium">Monipack</h2>
        <ul className="">

        </ul>
        <Link
          to={"/"}
          className="bg-white hover:bg-main-bg text-black hover:text-white duration-200 border border-gray-200 font-light text-sm w-32 h-12 grid place-items-center rounded-full"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
