import React, { useState, useEffect } from "react";
import image from "../assests/our Team/image.png"
const teamMembers = [
  { name: "Monica Garden", role: "House Cleaner", img: image },
  { name: "Laura Jones", role: "Cleaner", img: image},
  { name: "Sara Ryan", role: "Cleaner", img: image},
];

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slide Effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Dot Click to Navigate to Such Slide
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="py-16 bg-white">
      <h2 className="text-center text-3xl text-blue-600 font-bold mb-8">
        Meet Our Team
      </h2>
      {/* Slider Component for the Team */}
      <div className="container mx-auto flex justify-center items-center relative">
        <div className="w-full max-w-4xl overflow-hidden">
          <div
            className="flex transition-all duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full px-4 py-6 bg-blue-50 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="h-32 w-32 rounded-full mb-4"
                />
                <h3 className="text-blue-600 text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-[10px] flex space-x-2">
            {teamMembers.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
