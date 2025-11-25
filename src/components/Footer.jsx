import React from "react";
import { MLogo } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="py-10 w-11/12 mx-auto font-light rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="text-sm md:col-span-2 flex flex-col gap-5">
            <h2 className="text-3xl font-medium">Monipack</h2>
          <p className="">Nizwa, Karsha Industrial Area<br/>
            PO.BOX: 1168<br/>
            Sultanate Of Oman</p>
            <a href="#">Email : info@monipack.com</a>
        </div>
        <div className="grid grid-cols-1 capitalize md:grid-cols-2 gap-5">
          <div>
            <h4 className="text-xl ">Menu</h4>
            <ul className="flex flex-col  gap-2 mt-6 text-sm">
              <Link to={'/'}>Home</Link>
              <Link to={'/'}>About Us</Link>
              <Link to={'/'}>Products</Link>
              <Link to={'/'}>Gallery</Link>
              <Link to={'/'}>Contact Us</Link>

            </ul>
          </div>
          <div className="text-sm">
            <h4 className="text-xl ">Contact Us</h4>
            <p className="capitalize mt-5">Phone : (+968) 25447378<br/>
              Mobile : (+968) 96597969<br/>
              Fax : (+968) 25447378</p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto text-center flex justify-between items-center mt-6 text-xs lowercase">
        <a href="#">© monipack 2025</a>
        <a href="https://dostudio.co.in/" target="_blank">powered by Dostudio</a>
      </div>
    </div>
  );
};

export default Footer;
