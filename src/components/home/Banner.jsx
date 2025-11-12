import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ban1, ban2, ban3 } from '../../assets';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const banners = [
    { 
      id: 1, 
      image: ban1, 
      alt: "Banner 1",
      title: "Summer Collection",
      description: "Discover the latest trends for this season",
      ctaText: "Shop Now"
    },
    { 
      id: 2, 
      image: ban2, 
      alt: "Banner 2",
      title: "Winter Special",
      description: "Stay warm with our exclusive winter lineup",
      ctaText: "Explore"
    },
    { 
      id: 3, 
      image: ban3, 
      alt: "Banner 3",
      title: "Spring Fashion",
      description: "Fresh styles for a new beginning",
      ctaText: "Discover"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Animation variants for content
  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4
      }
    }
  };

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div className="relative w-screen h-[80vh] overflow-hidden group">
      {/* Carousel Wrapper */}
      <div 
        className="flex h-full transition-transform duration-500 ease-in-out "
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div 
            key={banner.id} 
            className="relative w-screen h-screen flex-shrink-0"
          >
            {/* Background Image */}
            <img 
              src={banner.image} 
              alt={banner.alt}
              className="w-full h-full object-cover object-center"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
            
            {/* Content with Framer Motion */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-6 lg:px-12">
                <div className="">
                  <AnimatePresence mode="wait">
                    {index === currentSlide && (
                      <motion.div
                        key={banner.id}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-3"
                      >
                        {/* Title */}
                        <motion.h2 
                          variants={contentVariants}
                          className="text-4xl md:text-6xl lg:text-7xl  text-white mb-4 md:mb-6"
                        >
                          {banner.title}
                        </motion.h2>
                        
                        {/* Description */}
                        <motion.p 
                          variants={contentVariants}
                          className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8"
                        >
                          {banner.description}
                        </motion.p>
                        
                        {/* CTA Button */}
                          <motion.div 
                          variants={contentVariants}
                          className="h-14 flex items-center"
                        >
                          <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-3 bg-gradient-to-r from-main-bg to-main-bg-hove text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-2xl"
                          >
                            {banner.ctaText}
                            <motion.svg 
                              className="w-5 h-5" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ 
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "reverse"
                              }}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </motion.svg>
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Navigation Arrows - Uncommented and enhanced */}
      <button 
        onClick={prevSlide}
        className="opacity-0 group-hover:opacity-100 absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-10"
      >
        <motion.svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ x: -2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </motion.svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="opacity-0 group-hover:opacity-100 absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 group z-10"
      >
        <motion.svg 
          className="w-6 h-6" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          whileHover={{ x: 2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </motion.svg>
      </button>

      {/* Custom Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-4">
          {/* Slide Counter */}
          <motion.div 
            className="flex items-center gap-2 text-white font-mono text-[10px] bg-black/30 backdrop-blur-md rounded-full px-2 py-1"
            key={currentSlide}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xs font-bold">0{currentSlide + 1}</span>
            <span className="text-gray-300">/</span>
            <span className="text-gray-400">0{banners.length}</span>
          </motion.div>
          
          {/* Pagination Controls */}
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-md rounded-full px-2 py-1">
            {/* Previous Button */}
            <motion.button 
              onClick={prevSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {banners.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  className="relative w-2 h-2 flex items-center justify-center group"
                >
                  <motion.div 
                    className={`absolute inset-0 rounded-full cursor-pointer ${
                      index === currentSlide ? 'bg-white' : 'bg-white/50'
                    }`}
                    animate={{
                      scale: index === currentSlide ? 1.1 : 0.75
                    }}
                    whileHover={{
                      scale: index === currentSlide ? 1.2 : 0.9,
                      backgroundColor: index === currentSlide ? '#ffffff' : 'rgba(255,255,255,0.8)'
                    }}
                  ></motion.div>
                </motion.button>
              ))}
            </div>
            
            {/* Next Button */}
            <motion.button 
              onClick={nextSlide}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="cursor-pointer w-8 h-8 flex items-center justify-center text-white hover:text-gray-300 transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/20 z-10">
        <motion.div 
          className="h-full bg-gradient-to-r from-main-bg to-main-bg-hove"
          initial={{ width: 0 }}
          animate={{ 
            width: `${((currentSlide + 1) / banners.length) * 100}%`
          }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default Banner;