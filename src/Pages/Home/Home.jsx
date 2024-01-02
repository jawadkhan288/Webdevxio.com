import React from "react";
import Banner from "./Banner/Banner";
import waveBackground from "../../assets/Image/wave.svg";
import Market from "./Banner/Market";

const Home = () => {
  return (
    <div className="bg-none">
      <Banner className=""></Banner>
      <Market className="z-10"></Market>
    </div>
  );
};

export default Home;
