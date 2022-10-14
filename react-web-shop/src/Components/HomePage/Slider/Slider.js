import React, { useState } from "react";
import "./Slider.css";

import WallClock from "./images/wall-clock.jpeg";
import LaptopBag from "./images/laptop-bag.jpeg";
import Lamp from "./images/lamp.png";

const images = [
  { id: 1, img: WallClock },
  { id: 2, img: LaptopBag },
  { id: 3, img: Lamp },
];

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(false);
  const [stepTwo, setStepTwo] = useState(false);

  const nextSlide = () => {
    setSlideIndex(true);
    setStepTwo(false);
  };

  const stepHandler = () => {
    setStepTwo(true);
  };

  const prevSlide = () => {
    setSlideIndex(false);
    setStepTwo(false);
  };
  return (
    <div className="b-container">
      <div className="img-container">
        <div
          className={`image-container ${slideIndex ? "active" : ""} ${
            stepTwo ? "increase" : ""
          }`}
        >
          {images.map((item) => (
            <img key={item.id} src={item.img} alt="" />
          ))}
        </div>
        <div className="button-container">
          <button className="btn" onClick={prevSlide}></button>
          <button className="btn" onClick={nextSlide}></button>
          <button className="btn" onClick={stepHandler}></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
