import React from 'react'
import { Link } from 'react-router-dom'
import {Paperitem,Plasticitem,Aluminiumitem,Foamitem, pack} from '../../assets'
import { IoIosArrowRoundForward, IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { FaCircle, FaRegCircle } from 'react-icons/fa'
import Slider from 'react-slick'

// Import react-slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { div } from 'framer-motion/client'

const Weoffers = () => {
  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  // React Slick settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Product data array
  const products = [
    {
      id: 1,
      name: "Paper Items",
      image: Paperitem,
    },
    {
      id: 2,
      name: "Foam Items",
      image: Foamitem,
    },
    {
      id: 3,
      name: "Plastic Items",
      image: Plasticitem,
    },
    {
      id: 4,
      name: "Aluminium Items",
      image: Aluminiumitem,
    },
  ];

  // Manual navigation functions
  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  const goToSlide = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  // Calculate total slides and current group
  const totalSlides = products.length;
  const slidesToShow = window.innerWidth < 768 ? 1 : 2;
  const totalGroups = Math.ceil(totalSlides / slidesToShow);
  const currentGroup = Math.floor(currentSlide / slidesToShow);

  return (
    <div className='relative overflow-hidden'>
       <div className="absolute right-1/2 top-0 z-0">
      
      {/* 🔴 Red blurred glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] 
          bg-main-bg rounded-full blur-[200px] opacity-70 
          -translate-x-1/2 -translate-y-1/2">
        </div>
      </div>
    </div>
    
      <div className='w-11/12 mx-auto py-32 relative'>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>
        <div className='md:col-span-2 flex flex-col gap-5'>
          <div className="bg-gray-100 text-black rounded-full px-4 py-1.5 w-fit text-sm flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-black"></div>Our Services
          </div>
          <h2 className='text-4xl'>What We Offer</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae consequatur dolorum quaerat odio impedit repudiandae ullam ipsum blanditiis accusantium amet!</p>
          <Link
            className="mt-10 bg-white text-black w-44 h-12 px-5 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 transition-all duration-300 rounded-full flex justify-between gap-3 items-center"
            to={"/"}
          >
            <p>Know More</p>
            <div className="h-7 w-7 grid place-items-center bg-black text-white rounded-full">
              <IoIosArrowRoundForward className="text-xl" />
            </div>
          </Link>
        </div>
        
        {/* Products Carousel */}
        <div className='md:col-span-3 relative'>
          <Slider ref={sliderRef} {...settings}>
            {products.map((product) => (
              <div key={product.id} className='px-2'>
                <div className='relative overflow-hidden rounded-2xl group cursor-pointer'>
                  <p className='absolute left-5 bottom-5 text-2xl z-10 text-white font-semibold'>
                    {product.name}
                  </p>
                  <img 
                    className='aspect-square rounded-2xl brightness-90 object-cover w-full group-hover:scale-105 transition-transform duration-300' 
                    src={product.image} 
                    alt={product.name}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </Slider>

          {/* Custom Controls Container - Bottom */}
          <div className="flex items-center justify-between mt-5 px-4">
            {/* Custom Pagination Dots */}
            <div className="flex items-center space-x-2">
              {Array.from({ length: totalGroups }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index * slidesToShow)}
                  className={`transition-all duration-300 hover:scale-110 focus:outline-none ${
                    index === currentGroup 
                      ? 'text-main-bg' 
                      : 'text-gray-300 hover:text-gray-400'
                  }`}
                  aria-label={`Go to group ${index + 1}`}
                >
                  {index === currentGroup ? (
                    <FaCircle className="text-sm" />
                  ) : (
                    <FaRegCircle className="text-sm" />
                  )}
                </button>
              ))}
            </div>

            {/* Custom Arrows */}
            <div className="flex items-center space-x-3">
              <button
                onClick={goToPrev}
                className="h-10 w-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                aria-label="Previous slide"
              >
                 ←
              </button>
              
              <button
                onClick={goToNext}
                className="h-10 w-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-gray-100 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                aria-label="Next slide"
              >
                   →
              </button>
            </div>
          </div>

         
        </div>
        {/* Products Carousel */}
      </div>
    </div>
    </div>
  )
}

export default Weoffers