import React from 'react';
import Marquee from "react-fast-marquee";

const Ourportfolio = () => {
  const portfolioData = [
    { title: "Hotels", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Hospitals", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Food Chains", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Bakeries & Restaurants", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Food Catering & Cater Services", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Meat, Poultry, Fish Industry", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Logistics", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Schools & Offices", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Super Markets & Hypermarkets", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Traders & Wholesalers", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Government Departments", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "International Franchises", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Amusement & Theme Parks", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Leading International Airlines", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Airline Catering", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" },
    { title: "Airports & SnackBars", image: "https://cdn.cssauthor.com/wp-content/uploads/2024/04/Plastic-Food-Container-Mockup-PSD.jpg" }
  ];

   const firstHalf = portfolioData.slice(0, Math.ceil(portfolioData.length / 2));
  const secondHalf = portfolioData.slice(Math.ceil(portfolioData.length / 2));

  return (
    <div className="w-11/12 mx-auto py-20 bg-white">
      <div className="text-center mb-8">
        <p className="text-main-bg text-xl">We Cater To</p>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Portfolio</h2>
      </div>

      <Marquee speed={40}  pauseOnHover={true}>
        {firstHalf.map((item, index) => (
          <div key={index} className="mx-4 text-center flex flex-col gap-3  items-center">
            <img className='h-40 w-40 object-cover hover:scale-105 duration-200' src={item.image} alt="" />
            <h3 className="text-sm font-medium text-gray-800 leading-tight">
              {item.title}
            </h3>
          </div>
        ))}
      </Marquee>
      <Marquee speed={40} direction='right'  pauseOnHover={true} className='mt-6'>
        {secondHalf.map((item, index) => (
          <div key={index} className="mx-4 text-center flex flex-col gap-3  items-center">
            <img className='h-40 w-40 object-cover hover:scale-105 duration-200' src={item.image} alt="" />
            <h3 className="text-sm font-medium text-gray-800 leading-tight">
              {item.title}
            </h3>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Ourportfolio;