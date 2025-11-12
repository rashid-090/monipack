import React from "react";
import { Link } from "react-router-dom";

const GetinTouch = () => {
  return (
    <div className="relative h-[500px] overflow-hidden">
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/05c663154348249.634039ea7f6e5.jpg"
        alt=""
        className="absolute object-cover object-top left-0 top-0 w-full h-full z-0"
      />
      <div className="bg-[#00000053] absolute top-0 left-0 w-full h-full z-10"></div>
      <div className="w-11/12 text-white mx-auto py-20 flex flex-col gap-5 h-full justify-center relative z-20">
        <h2 className="text-5xl font-semibold">We Offer the Best & Wide<br/> Range of Products.</h2>
        <p>Paper, Plastic, Aluminium and Foam Items.</p>
        <Link
          to={"/"}
          className="bg-gradient-to-r from-main-bg to-main-bg-hove text-white px-6 py-3 text-sm rounded-full w-fit"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default GetinTouch;
