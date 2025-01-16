import React from "react";
import { Typography, Container } from "@mui/material";
import maidImage from "../assests/maidforyou.jpg"; // Correct path

export const MaidForYou = () => {
  
  const serviceDetails = {
    title: "Maid For You",
    subtitle: "A Cleaner Place is a Safer Place.",
    description:
      "Washla cleaning service. We are a company dedicated to giving our customers back the time they deserve to enjoy the things they love.",
    features: [
      {
        title: "Professional Cleaning",
        description:
          "Housekeeping is responsible for minor security in hotel ecosystems.",
      },
      {
        title: "Fast and Efficient",
        description:
          "We make sure your house stays clean in a timely and efficient manner.",
      },
    ],
  };

  return (
    <div className="py-12 relative bg-gray-100">
      <Container
        sx={{
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
        }}
      >
        <div className="flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={maidImage}
              alt="Cleaning Lady"
              className="w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 shadow-2xl lg:static">
            <Typography
              variant="h7"
              className="uppercase text-gray-500 font-semibold"
            >
              {serviceDetails.title} 
            </Typography>
            <Typography variant="h4" className="font-bold text-gray-800 mt-4">
              {serviceDetails.subtitle} 
            </Typography>
            <Typography variant="body1" className="text-gray-600 mt-4">
              {serviceDetails.description} 
            </Typography>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {serviceDetails.features.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <Typography variant="h6" className="font-bold text-blue-600">
                    {feature.title} 
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {feature.description} 
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
