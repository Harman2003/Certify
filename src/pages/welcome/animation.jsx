import React from "react";
import Lottie from "lottie-react";
import animateData from "../../assets/loginanimation.json";

const Animation = ({ width, height }) => {
  return (
    <Lottie
      animationData={animateData}
      loop={true}
      autoplay={true}
      style={{ width: 450, height: height }}
    />
  );
};

export default Animation;
