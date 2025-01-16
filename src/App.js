import React from "react";
// Inside App.js
import {Navbar} from './components/Navbar';
import Features from "./components/Features";
import Team from "./components/Team";
import Footer from "./components/Footer";
import WhyChooseUs from "./components/WhyChooseUs";
import {MaidForYou} from "./components/MaidForYou";
import OurGreatService from "./components/OurGreatService";
import NeedHelp from "./components/NeedHelp"
import RecentNews from "./components/RecentNews"

const App = () => {
  return (
    <div>
      <Navbar />
      <Features />
      <WhyChooseUs />
      <MaidForYou />
      <OurGreatService />
      <Team />
      <NeedHelp />
      <RecentNews />
      <Footer />
    </div>
  );
};

export default App;
