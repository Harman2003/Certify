import React from "react";
import Lottie from "lottie-react";
import animateData from "../../assets/clothing.json";

const Animation = ({ width, height }) => {
  return (
    <Lottie
      animationData={animateData}
      loop={true}
      autoplay={true}
      style={{ width: width, height: height }}
    />
  );
};

export default Animation;
