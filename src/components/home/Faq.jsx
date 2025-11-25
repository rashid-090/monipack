import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";


const FAQ_DATA = [
  {
    q: "What services do you offer?",
    a: "We offer a wide range of web development, UI/UX, and cloud integration services.",
  },
  {
    q: "How long does a project take?",
    a: "Project timelines depend on requirements, but most websites are delivered within 2–4 weeks.",
  },
  {
    q: "Do you provide support?",
    a: "Yes, we provide long-term technical support and maintenance.",
  },
  {
    q: "What services do you offer?",
    a: "We offer a wide range of web development, UI/UX, and cloud integration services.",
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-11/12 mx-auto py-20">
      <h2 className="text-3xl text-white text-center mb-10">Frequently Asked Questions</h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_DATA.map((faq, i) => (
          <div
            key={i}
            className={`${
  openIndex === i ? "bg-white/10" : "bg-white/5 hover:bg-white/10"
} border border-white/20 rounded-2xl duration-200 p-5 cursor-pointer`}
            onClick={() => toggle(i)}
          >
            {/* Question Row */}
            <div className="flex justify-between items-center">
              <h3 className="text-lg text-white">{faq.q}</h3>

              <span
                className={`text-white transform text-lg transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              >
                <MdKeyboardArrowDown/>
              </span>
            </div>

            {/* Answer Section (animated height) */}
            <div
              className={` text-white/80 overflow-hidden transition-all duration-500 ${
                openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="pt-2 text-sm">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
