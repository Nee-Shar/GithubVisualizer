import React from "react";
import { motion } from "framer-motion";

const imageStyle = {
  display: "block",
  width: "17rem",
  height: "16rem",
  backgroundImage: `url(https://octodex.github.com/images/Professortocat_v2.png)`, // Replace with your image path
  backgroundSize: "cover",
  borderRadius: "50%",
  backgroundColor: "white",
  marginLeft: "0",
};
const imageStyle2 = {
  display: "block",
  width: "10rem",
  height: "10rem",
  backgroundImage: `url(https://octodex.github.com/images/orderedlistocat.png)`, // Replace with your image path
  backgroundSize: "cover",
  borderRadius: "50%",
  backgroundColor: "white",
  marginLeft: "20rem",
};
const imageStyle3 = {
  display: "block",
  width: "10rem",
  height: "10rem",
  backgroundImage: `url(https://octodex.github.com/images/femalecodertocat.png)`, // Replace with your image path
  backgroundSize: "cover",
  borderRadius: "50%",
  backgroundColor: "white",
  marginLeft: "-20rem",
};

const bounceTransition = {
  y: {
    duration: 1.8, // Increase the duration to make it travel longer
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.4,
    repeat: Infinity,
  },
  backgroundColor: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.4,
  },
};
const bounceTransition2 = {
  y: {
    duration: 1.8, // Increase the duration to make it travel longer
    yoyo: Infinity,
    ease: "easeIn",
    repeatDelay: 0.4,
    repeat: Infinity,
  },
  backgroundColor: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeIn",
    repeatDelay: 0.4,
  },
};

export default function BouncingImage() {
  return (
    <div
      style={{
        width: "15rem",
        height: "10rem",
        position: "fixed",
      }}
    >
      <motion.span
        style={imageStyle}
        transition={bounceTransition}
        animate={{
          y: ["10%", "6%", "100%"], // Change the travel distance here
          backgroundColor: ["#0000", "#0000", "#0000"],
        }}
      />
      <motion.span
        style={imageStyle2}
        transition={bounceTransition2}
        animate={{
          y: ["4%", "10%", "-180%"], // Change the travel distance here
          backgroundColor: ["#0000", "#0000", "#0000"],
        }}
      />

      <motion.span
        style={imageStyle3}
        transition={bounceTransition2}
        animate={{
          y: ["0%", "10%", "-300%"], // Change the travel distance here
          backgroundColor: ["#0000", "#0000", "#0000"],
        }}
      />
    </div>
  );
}
