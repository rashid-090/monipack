import React from "react";
import Marquee from "react-fast-marquee";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { PiHamburgerLight } from "react-icons/pi";
import { LiaHotelSolid,LiaHospitalSolid } from "react-icons/lia";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdOutlineRoomService } from "react-icons/md";
import { GiMeat } from "react-icons/gi";
import { GiCargoShip } from "react-icons/gi";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineFactory } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
import { LuSchool } from "react-icons/lu";
import { IoStorefrontOutline } from "react-icons/io5";
import { PiBuildingsLight } from "react-icons/pi";
import { GiAirplaneDeparture } from "react-icons/gi";

const Ourportfolio = () => {
  const portfolioData = [
    { 
      title: "Hotels", 
      icon: LiaHotelSolid,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Hospitals", 
      icon: LiaHospitalSolid,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Food Chains", 
      icon: IoFastFoodOutline,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Bakeries & Restaurants", 
      icon: IoRestaurantSharp,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Food Catering & Cater Services", 
      icon: MdOutlineRoomService,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Meat, Poultry, Fish Industry", 
      icon: GiMeat,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Logistics", 
      icon: GiCargoShip,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Schools & Offices", 
      icon: LuSchool,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Super Markets & Hypermarkets", 
      icon: HiOutlineBuildingOffice2,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Traders & Wholesalers", 
      icon: MdOutlineFactory,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Government Departments", 
      icon: RiGovernmentLine,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "International Franchises", 
      icon: IoStorefrontOutline,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Amusement & Theme Parks", 
      icon: PiBuildingsLight,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
    { 
      title: "Leading International Airlines", 
      icon: GiAirplaneDeparture,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, blanditiis?"
    },
   
  ];



  return (
    <div className="bg-white rounded-b-4xl relative overflow-hidden">
   
      <div className="w-11/12 mx-auto pt-10 pb-14 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl text-gray-900">We Cater To</h2>
       
     
      </div>

     <div className="relative overflow-hidden">
        {/* Gradient overlay containers */}
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
       {/* First Marquee Row */}
      <Marquee 
        speed={50} 
        gradient={true} 
        // gradientColor={[248, 250, 252]}
        gradientWidth={50}
        pauseOnHover={true} 
        className=""
      >
        {portfolioData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div 
              key={index} 
              className="group hover:scale-95 duration-300 mx-4 flex flex-col items-center justify-center"
            >
              <div className="border border-gray-200 h-80 w-60 p-8 flex flex-col justify-between gap-6 rounded-2xl  transition-all duration-300  bg-white group">
                <div className="flex">
                  <IconComponent className="group-hover:text-main-bg group-hover:scale-150 duration-300 text-3xl text-gray-500" />
                </div>
                <div className="flex flex-col gap-4">
                  <h4 className="text-2xl text-gray-900 group-hover:text-main-bg transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
               
              </div>
            </div>
          );
        })}
      </Marquee>
     </div>

     
      
    </div>
    </div>
  );
};

export default Ourportfolio;