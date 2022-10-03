import React, { useState } from "react";
import "./Slider.css";

const Slider = ({ images }) => {
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
    <div className="img-container">
      <div
        className={`image-container ${slideIndex ? "active" : ""} ${
          stepTwo ? "increase" : ""
        }`}
      >
        {images.map((img) => (
          <img key={img.id} src={img.img} alt="" />
        ))}
      </div>
      <div className="button-container">
        <button className="btn" onClick={prevSlide}></button>
        <button className="btn" onClick={nextSlide}></button>
        <button className="btn" onClick={stepHandler}></button>
      </div>
    </div>
  );
};

export default Slider;
