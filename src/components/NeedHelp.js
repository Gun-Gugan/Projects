import React from "react";
import { Typography, Button } from "@mui/material";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Needhelp from "../assests/needhelp.jpg";

const NeedHelp = () => {
  return (
    <div className="relative bg-blue-100 min-h-screen p-10 text-center flex items-center justify-center">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${Needhelp})` }}
        aria-hidden="true"
      ></div>

      {/* Content over the background */}
      <div className="relative z-10">
        <Typography variant="h4" className="font-bold mb-4">
          Cleaning Your Worries Away
        </Typography>
        <Typography variant="h5" className="mb-6">
          Need Help With Cleaning?
        </Typography>

        {/* Video Play Button */}
        <Button 
          variant="outlined" 
          color="primary" 
          startIcon={<PlayCircleOutlineIcon />} 
          className="rounded-full px-6 py-3"
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(51, 148, 228, 0.1)', 
            },
            color: 'primary.main',
            borderColor: 'primary.main',
          }}
        >
          Watch Video
        </Button>
      </div>
    </div>
  );
};

export default NeedHelp;
