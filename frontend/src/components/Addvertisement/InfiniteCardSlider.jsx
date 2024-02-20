import React from "react";
import Carousel from "./Carousel";
import { countries } from "./Data";
import "./Carousel.css";
const InfiniteCardSlider = () => {
  return (
    <div className="advertisea__main">
      <div className="topContent"></div>
      {/* Carousel */}
      <Carousel images={countries} />
    </div>
  );
};

export default InfiniteCardSlider;
