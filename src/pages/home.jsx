import React from "react";
import { Banner,About,Weoffers, GetinTouch,FeaturedProducts, Ourportfolio } from "../components";
import { Link } from "react-router-dom";

const homePage = () => {
  return (
    <>
      <Banner />
      <About/>
      <Weoffers/>
      <GetinTouch/>
      <FeaturedProducts/>
      <Ourportfolio/>
    </>
  );
};

export default homePage;
