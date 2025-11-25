import React from "react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "Sneha Patel",
    text: "High quality work delivered on time. The attention to detail is remarkable.",
    role: "Product Manager",
    company: "Innovate Labs",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "John Carter",
    text: "They exceeded all expectations! Our revenue increased by 45% after implementing their solutions.",
    role: "Operations Head",
    company: "Global Enterprises",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    text: "Outstanding customer service and technical expertise. Will definitely work with them again!",
    role: "Creative Director",
    company: "Design Studio",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    text: "High quality work delivered on time. The attention to detail is remarkable.",
    role: "Product Manager",
    company: "Innovate Labs",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "John Carter",
    text: "They exceeded all expectations! Our revenue increased by 45% after implementing their solutions.",
    role: "Operations Head",
    company: "Global Enterprises",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    text: "Outstanding customer service and technical expertise. Will definitely work with them again!",
    role: "Creative Director",
    company: "Design Studio",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400" : "text-gray-600"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="w-full py-20 text-white overflow-hidden ">
      <div className="w-11/12 mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl text-white">
            What Our Clients Say
          </h2>
        </div>

        {/* Marquee Testimonials */}
        <div className="mb-12 relative">
             {/* Gradient overlay containers */}
            <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
          <Marquee
            speed={50}
            gradient={false}
            // gradientColor={[248, 250, 252]}
            gradientWidth={50}
            pauseOnHover={true}
            className="overflow-visible"
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="w-[380px] bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg mx-4 hover:bg-white/10 transition-all duration-300 hover:scale-95"
              >
                {/* Rating */}
                <StarRating rating={item.rating} />

                {/* Testimonial Text */}
                <p className="text-white/90 italic text-sm my-4 leading-relaxed">
                  "{item.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center gap-4 mt-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                  <div>
                    <p className="text-white font-semibold text-lg">
                      {item.name}
                    </p>
                    <p className="text-gray-400 text-sm">{item.role}</p>
                    <p className="text-gray-500 text-xs">{item.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

      </div>
    </div>
  );
};

export default Testimonial;
