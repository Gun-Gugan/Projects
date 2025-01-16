import React from "react";
import { Typography, Container, Card, CardContent, Box } from "@mui/material";
import serviceBackground from "../assests/Service.jpg";

const services = [
  {
    id: 1,
    title: "Home Cleaning",
    description:
      "Homes and thoroughly launder them between usage. We give our teams the accusantium doloremque laudantium.",
    icon: "fas fa-home",
  },
  {
    id: 2,
    title: "Windows Cleaning",
    description:
      "We are closely monitoring national, state, and local health agencies for the most recent developments.",
    icon: "fas fa-window-maximize",
  },
  {
    id: 3,
    title: "Office Cleaning",
    description:
      "Follow these tips from the CDC to help prevent the spread of flu and respiratory diseases.",
    icon: "fas fa-building",
  },
];

function OurGreatService() {
  return (
    <Box
      className="py-12"
      sx={{
        backgroundImage: {
          xs: "none", 
          sm:"none",
          md: `url(${serviceBackground})`,
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container className="text-center">
        {/* Section Title */}
        <Typography
          variant="h6"
          className="uppercase text-blue-500 font-semibold"
          sx={{ letterSpacing: "1px" }}
        >
          Why Choose Us
        </Typography>
        <Typography
          variant="h4"
          className="font-bold text-gray-900 mt-2"
          sx={{ fontSize: { xs: "1.875rem", sm: "2.25rem", md: "2.5rem" } }}
        >
          Our Great Service
        </Typography>
        <Typography
          variant="body1"
          className="text-gray-600 mt-4"
          sx={{ fontSize: { xs: "1rem", sm: "1.125rem", md: "1.25rem" } }}
        >
          Restoring the beauty and freshness of all your upholstered fabrics and
          taking the work out of housework for you.
        </Typography>

        {/* Services Container */}
        <Box
          className="mt-8 flex flex-wrap justify-center gap-8"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
          }}
        >
          {services.map((service) => (
            <Box
              key={service.id}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              sx={{ flexBasis: { xs: "100%", sm: "45%", md: "30%" } }}
            >
              <Card className="shadow-lg" sx={{ borderRadius: "12px" }}>
                <CardContent
                  className="text-center"
                  sx={{
                    backgroundColor: "rgba(29, 78, 216, 0.8)",
                    padding: "2rem",
                  }}
                >
                  {/* Icon */}
                  <Box
                    className="text-white mb-4"
                    sx={{
                      fontSize: "2.5rem",
                      display: "inline-block",
                      color: "#fff",
                    }}
                  >
                    <i className={`${service.icon}`}></i>
                  </Box>
                  {/* Title */}
                  <Typography
                    variant="h5"
                    className="font-extrabold text-white"
                    sx={{ marginBottom: "1rem" }}
                  >
                    {service.title}
                  </Typography>
                  {/* Description */}
                  <Typography
                    variant="body2"
                    className="text-white"
                    sx={{
                      fontSize: "0.875rem",
                      lineHeight: "1.5",
                      color: "rgba(255, 255, 255, 0.9)",
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default OurGreatService;
