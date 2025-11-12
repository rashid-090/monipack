import React from "react";
import './App.css';
import { lazy, Suspense, useEffect, useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";


import { Navbar,Footer } from "./components";
const Home = lazy(() => import("./pages/home"));
const Loader = lazy(() => import("./pages/Loader"));

const Layout = () => {
  return (
    <div className="app 2xl:max-w-[2500px] mx-auto min-h-screen flex flex-col justify-between">
      <Navbar/>
      <div className="">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "*",
        element: <Suspense fallback={<Loader/>}><div>not found</div></Suspense>,
      },
      {
        path: "/",
        element: <Suspense fallback={<Loader/>}><Home/></Suspense>,
      },
   
    ],
  },
]);


function App() {
  

  return (
    <>
     <RouterProvider router={router} />
       
    </>
  )
}

export default App
