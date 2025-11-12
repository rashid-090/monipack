import React from "react";
import { MLogo } from "../assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="p-10 w-11/12 mx-auto py-10 bg-main-bg rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="md:col-span-2 flex flex-col gap-5">
          <img
            className="w-40 border-4 border-[#e7e1e1] object-contain"
            src={MLogo}
            alt=""
          />{" "}
          <p>Nizwa, Karsha Industrial Area<br/>
            PO.BOX: 1168<br/>
            Sultanate Of Oman</p>
            <a href="#">Email : info@monipack.com</a>
        </div>
        <div className="grid grid-cols-1 uppercase md:grid-cols-2 gap-5">
          <div>
            <h4 className="text-xl font-semibold">Menu</h4>
            <ul className="flex flex-col gap-2 mt-6 text-sm">
              <Link to={'/'}>Home</Link>
              <Link to={'/'}>About Us</Link>
              <Link to={'/'}>Products</Link>
              <Link to={'/'}>Gallery</Link>
              <Link to={'/'}>Contact Us</Link>

            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <p className="capitalize mt-5">Phone: (+968) 25447378<br/>
              Mobile: (+968) 96597969<br/>
              Fax: (+968) 25447378</p>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto text-center flex justify-between items-center mt-6 text-xs lowercase">
        <a href="#">© monipack 2025</a>
        <a href="#">powered by Dostudio</a>
      </div>
    </div>
  );
};

export default Footer;
