// components/Cards.jsx
import React, { useState, useEffect, useRef } from "react";
import {Paperitem,Plasticitem,Aluminiumitem,Foamitem,} from '../../assets'

const Cards = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "Paperitem",
      description: "Explore breathtaking landscapes",
      color: "bg-gradient-to-br from-purple-600/80 to-blue-600/80",
      image: Paperitem,
      category: "Nature"
    },
    {
      id: 2,
      title: "Plasticitem",
      description: "Modern cityscapes and design",
      color: "bg-gradient-to-br from-green-600/80 to-emerald-600/80",
      image: Paperitem,
      category: "Architecture"
    },
    {
      id: 3,
      title: "Aluminiumitem",
      description: "Serene coastal beauty",
      color: "bg-gradient-to-br from-orange-600/80 to-red-600/80",
      image: Paperitem,
      category: "Seascape"
    },
    {
      id: 4,
      title: "Foamitem",
      description: "Mystical woodland journeys",
      color: "bg-gradient-to-br from-pink-600/80 to-rose-600/80",
      image: Paperitem,
      category: "Wilderness"
    },
    {
      id: 5,
      title: "Paperitem",
      description: "Explore breathtaking landscapes",
      color: "bg-gradient-to-br from-purple-600/80 to-blue-600/80",
      image: Paperitem,
      category: "Nature"
    },
    {
      id: 6,
      title: "Plasticitem",
      description: "Modern cityscapes and design",
      color: "bg-gradient-to-br from-green-600/80 to-emerald-600/80",
      image: Paperitem,
      category: "Architecture"
    },
    {
      id: 7,
      title: "Aluminiumitem",
      description: "Serene coastal beauty",
      color: "bg-gradient-to-br from-orange-600/80 to-red-600/80",
      image: Paperitem,
      category: "Seascape"
    },
    {
      id: 8,
      title: "Foamitem",
      description: "Mystical woodland journeys",
      color: "bg-gradient-to-br from-pink-600/80 to-rose-600/80",
      image: Paperitem,
      category: "Wilderness"
    },
    
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoSwipeRef = useRef(null);

  // Auto-swipe functionality
  useEffect(() => {
    if (isPaused) return;

    autoSwipeRef.current = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % cards.length);
    }, 3000);

    return () => {
      if (autoSwipeRef.current) {
        clearInterval(autoSwipeRef.current);
      }
    };
  }, [cards.length, isPaused]);

  const handleCardClick = (index) => {
    setCurrentIndex(index);
    restartAutoSwipe();
  };

  const handleDotClick = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
    restartAutoSwipe();
  };

  const restartAutoSwipe = () => {
    if (autoSwipeRef.current) {
      clearInterval(autoSwipeRef.current);
    }
    setIsPaused(false);
  };

  const pauseAutoSwipe = () => {
    setIsPaused(true);
    if (autoSwipeRef.current) {
      clearInterval(autoSwipeRef.current);
    }
  };

  const resumeAutoSwipe = () => {
    setIsPaused(false);
  };

  const getCardStyle = (cardIndex) => {
    const position = (cardIndex - currentIndex + cards.length) % cards.length;
    
    switch (position) {
      case 0: // Current active card
        return {
          transform: 'translateX(0px) rotate(0deg) scale(1)',
          zIndex: 30,
          opacity: 1,
        };
      case 1: // Next card
        return {
          transform: 'translateX(40px) rotate(3deg) scale(0.95)',
          zIndex: 20,
          opacity: 0.8,
        };
      case 2: // Second next card
        return {
          transform: 'translateX(80px) rotate(6deg) scale(0.9)',
          zIndex: 10,
          opacity: 0.6,
        };
      default: // Hidden cards
        return {
          transform: 'translateX(100px) rotate(8deg) scale(0.85)',
          zIndex: 5,
          opacity: 0.3,
        };
    }
  };

  return (
    <div 
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={pauseAutoSwipe}
      onMouseLeave={resumeAutoSwipe}
      onTouchStart={pauseAutoSwipe}
      onTouchEnd={resumeAutoSwipe}
    >
      {/* Card Stack */}
      {cards.map((card, index) => {
        const style = getCardStyle(index);
        
        return (
          <div
            key={card.id}
            className={`absolute w-full h-full  p-8 flex flex-col justify-between 
                       text-white  border border-white/10 
                       transition-all duration-500 ease-out cursor-pointer
                       hover:scale-105  overflow-hidden`}
            style={style}
            onClick={() => handleCardClick(index)}
          >
            {/* Background Image */}
            {/* <div 
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{ backgroundImage: `url(${card.image})` }}
            /> */}
            <img src={card.image} className="absolute border rounded-[2rem] brightness-95 h-full w-full inset-0 object-cover object-center z-0" alt="" />
            {/* Gradient Overlay */}
            {/* <div className={`absolute inset-0 ${card.color} z-10 opacity-70`} /> */}
            
            {/* Content */}
            <div className="relative z-20 h-full flex flex-col justify-between">
              <div>
                {/* <div className="flex justify-between items-start mb-4">
                  <div className="text-4xl font-bold">0{card.id}</div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                    {card.category}
                  </span>
                </div> */}
                <h3 className="text-2xl font-medium mb-2">{card.title}</h3>
                {/* <p className="text-white/90 text-sm">{card.description}</p> */}
              </div>
              
             
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 z-50">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex(prev => (prev - 1 + cards.length) % cards.length);
            restartAutoSwipe();
          }}
          className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/20"
          aria-label="Previous card"
        >
          ←
        </button>
        
        <div className="text-white/80 text-sm font-medium min-w-[80px] text-center backdrop-blur-sm bg-black/20 px-3 py-2 rounded-full">
          {currentIndex + 1} / {cards.length}
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex(prev => (prev + 1) % cards.length);
            restartAutoSwipe();
          }}
          className="w-10 h-10 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm border border-white/20"
          aria-label="Next card"
        >
          →
        </button>
      </div>

   
    </div>
  );
};

export default Cards;