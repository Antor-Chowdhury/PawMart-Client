import React from "react";
import NavBar from "../components/Navbar";
import Slider from "../components/Slider";
import Category from "../components/Category";
import RecentListing from "../components/RecentListing";
import WhyAdoptFromPawMart from "../components/WhyAdoptFromPawMart";
import MeetOurHeroes from "../components/MeetOurHeroes";

const Home = () => {
  return (
    <div>
      <title>Home</title>

      <Slider></Slider>
      <Category></Category>
      <RecentListing></RecentListing>
      <WhyAdoptFromPawMart></WhyAdoptFromPawMart>
      <MeetOurHeroes></MeetOurHeroes>
    </div>
  );
};

export default Home;
