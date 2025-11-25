import React from "react";
import { Link } from "react-router-dom";
import { packbg } from "../../assets";

const GetinTouch = () => {
  return (
    <div className="rounded-t-4xl bg-white pt-14">
      <div className="w-11/12 mx-auto rounded-4xl relative h-[500px] overflow-hidden">
      <img
        src={packbg}
        alt=""
        className="absolute object-cover object-bottom left-0 top-0 w-full h-full z-0"
      />
      <div className="bg-[#0000008c] absolute top-0 left-0 w-full h-full z-10"></div>
      <div className="w-11/12 text-white mx-auto py-20 flex flex-col gap-5 h-full justify-center items-center text-center relative z-20">
        <h2 className="text-5xl">We Offer the Best & Wide<br/> Range of Products.</h2>
        <p className="w-[60%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur porro possimus impedit debitis labore assumenda accusamus ducimus animi tempore eius?</p>
        <Link
          to={"/"}
          className="bg-black/20 hover:bg-black/30 transition-all duration-300 backdrop-blur-sm border border-white/20 text-white w-44 h-12 text-sm rounded-full grid place-items-center"
        >
          Read More
        </Link>
      </div>
    </div>
    </div>
  );
};

export default GetinTouch;
