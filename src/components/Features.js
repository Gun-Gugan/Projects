import React from "react";
import { Typography, Button, Container, Card, CardContent } from "@mui/material";
import backgroundImage from "../assests/features.jpg";

const cardData = [
  {
    icon: "fas fa-broom",
    title: "Professional Cleaning",
    description:
      "Housekeeping is responsible for minor security in hotel ecosystems for food and cleaner through.",
  },
  {
    icon: "fas fa-tachometer-alt",
    title: "Fast and Efficient",
    description:
      "Our aim is to keep the house clean. Our aim will help through the Digital Innovation World Summit.",
  },
  {
    icon: "fas fa-home",
    title: "Renew Your Look",
    description:
      "Both of us take a lot of time in getting cleaned and beautified clean home professional service.",
  },
];

const additionalInfo = [
  {
    title: "A Clean House is a Happy Place!",
    description: "Washla has met the demands of a growing customer base.",
  },
  {
    description:
      "Washla customers have a tremendous opportunity to answer the call of logistic needs across the globe.",
  },
  {
    description:
      "The world's leading non-asset-based supply chain management companies design and implement industry-leading solutions.",
  },
];

function Features({ heroTitle, heroSubtitle }) {
  return (
    <div className="bg-blue-400 relative">
      {/* Top Section */}
      <div
        className="bg-cover bg-center text-white py-20"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          height: "500px",
        }}
      >
        <div className="text-left pl-8 sm:pl-12 md:pl-16 lg:pl-32">
          <Typography
            variant="h7"
            className="uppercase font-bold text-sm sm:text-base"
          >
            {"renew your look"}
          </Typography>
          <Typography
            variant="h3"
            className="uppercase font-bold py-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
          >
            a tradition of <br />quality of cleaning
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            className="bg-white text-white font-bold mt-4 hover:bg-blue-700"
          >
            Contact Us
          </Button>
        </div>
      </div>

      {/* Service Cards Section */}
      <Container className=" px-4 sm:px-8 md:px-16">
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((card, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="text-center">
                  <div className="text-blue-500 mb-4">
                    <i className={`${card.icon} text-4xl`}></i>
                  </div>
                  <Typography variant="h6" className="font-black text-lg pb-5">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mt-2">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </Container>

      {/* Below Service Cards Section */}
      <Container className="py-14 px-4 sm:px-8 md:px-16">
        <div className="flex flex-wrap justify-center gap-6">
          {additionalInfo.map((info, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <CardContent className="text-center">
                {info.title && (
                  <Typography
                    variant="h7"
                    className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl"
                  >
                    {info.title}
                  </Typography>
                )}
                <Typography
                  variant="p"
                  className="text-white mt-2 text-sm sm:text-base"
                >
                  {info.description}
                </Typography>
              </CardContent>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Features;
