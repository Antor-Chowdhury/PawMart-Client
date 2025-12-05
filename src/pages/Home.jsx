import React from "react";
import NavBar from "../components/Navbar";
import Slider from "../components/Slider";
import Category from "../components/Category";
import RecentListing from "../components/RecentListing";

const Home = () => {
  return (
    <div>
      <title>Home</title>

      <Slider></Slider>
      <Category></Category>
      <RecentListing></RecentListing>
    </div>
  );
};

export default Home;
