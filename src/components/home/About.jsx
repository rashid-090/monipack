import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import { ban1, ban2, ban3,shipping,quality,support } from "../../assets";



const About = () => {
 
  return (
    <section className="w-11/12 mx-auto py-20">
      <div className="grid grid-cols-1 md:grid-cols-5 ">
        <div className="md:col-span-2">
          <h4 className="text-xl text-main-bg">About Us</h4>
        </div>
        <div className="md:col-span-3 flex flex-col gap-5">
          <h2 className="text-3xl font-semibold">Morooj Nizwa International</h2>
          <p>
            Shop packaging material and disposables online. You can buy
            packaging products tailored to your Industry or choose from various
            designs and features to match your requirements.
          </p>
          <Link
            to={"/"}
            className="bg-gradient-to-r from-main-bg to-main-bg-hove text-white px-6 py-3 text-sm rounded-full w-fit"
          >
            Read More
          </Link>
          <div
      
            className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-10 mt-5"
          >
            <div className="w-full h-full flex items-center gap-2">
              <img className="w-20" src={shipping} alt="" />
              <p className="basis-1/2 text-sm">World Wide<br/> Shipping</p>
            </div>
            <div className="w-full h-full flex items-center gap-2">
                <img className="w-20" src={quality} alt="" />
              <p className="basis-1/2 text-sm">Quality<br/> Products</p>
            </div>
            <div className="w-full h-full flex items-center  gap-2">
                 <img className="w-20" src={support} alt="" />
              <p className=" basis-1/2 text-sm">24/7 Customer<br/> Support</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-10">
        <div className="flex flex-col gap-2 h-full md:col-span-2  w-full">
          <img
            className="rounded-2xl object-cover  h-80 w-full"
            src='https://s0.rbk.ru/v6_top_pics/media/img/7/88/347180257022887.jpeg'
            alt=""
          />
          <p className="text-lg">Our Story</p>
        </div>
        <div className="h-full w-full flex flex-col gap-2">
          <img
            className="rounded-2xl object-cover h-80 w-full"
            src='https://mediaassets.cbre.com/-/media/project/cbre/shared-site/insights/viewpoints/2023-viewpoint-media-folder/u-s-talent-migration-the-stories-behind-the-story/hero-image-1080x1080.jpeg'
            alt=""
          />
          <p className="text-lg">Our Vision</p>
        </div>
        <div className="h-full w-full flex flex-col gap-2">
          <img
            className="rounded-2xl object-cover h-80 w-full"
            src='https://epc-assets.elpasoco.com/wp-content/uploads/sites/18/2024/01/Mission-1024x1024.png'
            alt=""
          />
          <p className="text-lg">Our Mission</p>
        </div>
        <div className="h-full w-full flex flex-col gap-2">
          <img
            className="rounded-2xl object-cover h-80 w-full"
            src='https://avatars.mds.yandex.net/i?id=8c3f6a3d293b83d928fb65f3d3ee5c1f15f54a99-8797773-images-thumbs&n=13'
            alt=""
          />
          <p className="text-lg">Our Values</p>
        </div>
      </div>
    </section>
  );
};

export default About;
