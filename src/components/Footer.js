import React from 'react';
import { TextField, Button } from '@mui/material';

function Footer() {
  return (
    <footer className="bg-gray-300 py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo and description */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/path-to-logo.png"
              alt="Amiso Logo"
              className="h-8 mr-2"
            />
            <span className="text-2xl font-semibold text-gray-800">amiso</span>
          </div>
          <p className="text-gray-600 text-sm">
            Washla customers has a tremendous opportunity to answer the call of logistic.
          </p>
        </div>

        {/* Contact information */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Get In Touch</h3>
          <address className="not-italic text-gray-600 text-sm">
            8273 NW 56th ST Miami, Florida,<br />
            33195 United States<br />
            <a href="mailto:info@amiso.com" className="text-blue-600 hover:underline">
              info@amiso.com
            </a>
            <br />
            052 5401 3322
          </address>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#home" className="hover:text-blue-600">Home</a></li>
              <li><a href="#about" className="hover:text-blue-600">About</a></li>
              <li><a href="#services" className="hover:text-blue-600">Services</a></li>
              <li><a href="#team" className="hover:text-blue-600">Team</a></li>
            </ul>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#faq" className="hover:text-blue-600">FAQ</a></li>
              <li><a href="#contact" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="#gallery" className="hover:text-blue-600">Gallery</a></li>
              <li><a href="#blogs" className="hover:text-blue-600">Blogs</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter subscription */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Newsletter</h3>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe to our newsletter to receive the latest news about our services.
          </p>
          <div className="flex items-center space-x-2">
            <TextField
              variant="outlined"
              size="small"
              placeholder="Your email address"
              className="flex-1 bg-white rounded"
            />
            <Button
              variant="contained"
              color="primary"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t mt-8 pt-4 text-center text-gray-600 text-sm">
        <p>&copy; 2023 amiso all rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
