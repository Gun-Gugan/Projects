import React from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";

const features = [
  {
    icon: "fas fa-users",
    title: "Professional Team",
    description:
      "Our team uses a sanitizing solution to wipe down light switches and doorknobs.",
  },
  {
    icon: "fas fa-clock",
    title: "24/7 Services",
    description:
      "We encourage our customers to let us know in advance of an appointment.",
  },
  {
    icon: "fas fa-shield-alt",
    title: "Service Guarantee",
    description:
      "We are telling our team members to switch out all cleaning cloths and mops.",
  },
];

function WhyChooseUs() {
  return (
    <Container className="text-center py-12">
      echo "# Projects" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Gun-Gugan/Projects.git
git push -u origin main
      {/* Section Heading */}
      <Typography variant="h7" className="uppercase text-gray-400 font-semibold">
        Why Choose Us
      </Typography>
      <Typography variant="h4" className="font-bold text-gray-800 mt-2">
        Tradition of Trust
      </Typography>
      <Typography variant="body1" className="text-gray-600 mt-4">
        We specialize in intelligent & effective Search and believe in the power of partnerships to grow business.
      </Typography>

      {/* Features */}
      <div className="mt-8 p-5 flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/3 md:w-1/4">
            <Card>
              <CardContent className="text-center">
                <div className="text-blue-500 mb-4">
                  <i className={`${feature.icon} text-4xl`}></i>
                </div>
                <Typography variant="h6" className="font-bold">
                  {feature.title}
                </Typography>
                <Typography variant="body2" className="text-gray-600 mt-2">
                  {feature.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default WhyChooseUs;
