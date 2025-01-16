import React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { CalendarToday } from "@mui/icons-material";
import image from "../assests/Recent News/image.png"
const newsData = [
  {
    date: "12 Nov",
    title: "Temporary Ruling Issued",
    description: "Washla has met the demands of a growing world cleaning tremendous.",
    author: "Martha Smith",
    role: "Washla CEO",
    image: image, 
  },
  {
    date: "11 Nov",
    title: "The Expands California",
    description: "Welcomed and every sed ut perspiciatis unde omnis iste natus.",
    author: "Laura Jones",
    role: "Accounting",
    image: image,
  },
  {
    date: "10 Nov",
    title: "Temporary Ruling Issued",
    description: "Washla has met the demands of a growing world. The Cleaning.",
    author: "Matt Ryan",
    role: "Lawyer",
    image: image,
  },
];

const RecentNews = () => {
  return (
    <div className="max-w-6xl mx-auto py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold">Recent News</h2>
        <p className="text-gray-500">
          We specialize in intelligent & effective Search and believe in the power of partnerships to grow business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <Card key={index} className="overflow-hidden relative">
            {/* Image Section */}
            <div className="relative">
              <img
                src={news.image}
                alt={news.title}
                className="h-40 w-full object-cover"
              />
              <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-md px-2 py-1 flex items-center">
                <CalendarToday fontSize="small" />
                <span className="ml-1 text-sm">{news.date}</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="shadow-2xl px-4 pb-4">
              <CardContent className="mx-auto max-w-[90%]">
                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  className="uppercase font-semibold"
                >
                  Cleaning
                </Typography>
                <Typography variant="h6" className="font-bold mt-1">
                  {news.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  className="mt-2"
                >
                  {news.description}
                </Typography>
                <div className="flex items-center mt-4">
                  <Avatar>{news.author[0]}</Avatar>
                  <div className="ml-3">
                    <Typography variant="body2" className="font-medium">
                      {news.author}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {news.role}
                    </Typography>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
