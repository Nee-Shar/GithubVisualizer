// // import React from "react";
// // import { motion } from "framer-motion";

// // const imageStyle = {
// //   display: "block",
// //   width: "17rem",
// //   height: "16rem",
// //   backgroundImage: `url(https://octodex.github.com/images/Professortocat_v2.png)`, // Replace with your image path
// //   backgroundSize: "cover",
// //   borderRadius: "50%",
// //   backgroundColor: "white",
// //   marginLeft: "0",
// // };
// // const imageStyle2 = {
// //   display: "block",
// //   width: "10rem",
// //   height: "10rem",
// //   backgroundImage: `url(https://octodex.github.com/images/orderedlistocat.png)`, // Replace with your image path
// //   backgroundSize: "cover",
// //   borderRadius: "50%",
// //   backgroundColor: "white",
// //   marginLeft: "150%",
// // };
// // const imageStyle3 = {
// //   display: "block",
// //   width: "10rem",
// //   height: "10rem",
// //   backgroundImage: `url(https://octodex.github.com/images/femalecodertocat.png)`, // Replace with your image path
// //   backgroundSize: "cover",
// //   borderRadius: "50%",
// //   backgroundColor: "white",
// //   marginLeft: "420%",
// // };

// // const bounceTransition = {
// //   y: {
// //     duration: 1.8, // Increase the duration to make it travel longer
// //     yoyo: Infinity,
// //     ease: "easeOut",
// //     repeatDelay: 0.4,
// //     repeat: Infinity,
// //   },
// //   backgroundColor: {
// //     duration: 0.8,
// //     yoyo: Infinity,
// //     ease: "easeOut",
// //     repeatDelay: 0.4,
// //   },
// // };
// // const bounceTransition2 = {
// //   y: {
// //     duration: 4.9, // Increase the duration to make it travel longer
// //     yoyo: Infinity,
// //     ease: "easeIn",
// //     repeatDelay: 0.4,
// //     repeat: Infinity,
// //   },
// //   backgroundColor: {
// //     duration: 4.8,
// //     yoyo: Infinity,
// //     ease: "easeIn",
// //     repeatDelay: 0.4,
// //   },
// // };

// // export default function BouncingImage() {
// //   return (
// //     <div
// //       style={{
// //         width: "15rem",
// //         height: "10rem",
// //         position: "fixed",
// //       }}
// //     >
// //       {/* <motion.span
// //         style={imageStyle}
// //         transition={bounceTransition}
// //         animate={{
// //           y: ["10%", "6%", "100%"], // Change the travel distance here
// //           backgroundColor: ["#0000", "#0000", "#0000"],
// //         }}
// //       /> */}
// //       <motion.span
// //         style={imageStyle2}
// //         transition={bounceTransition2}
// //         animate={{
// //           y: ["10%", "70%", "-90%"], // Change the travel distance here
// //           backgroundColor: ["#0000", "#0000", "#0000"],
// //         }}
// //       />

// //       <motion.span
// //         style={imageStyle3}
// //         transition={bounceTransition2}
// //         animate={{
// //           y: ["60%", "60%", "-180%"], // Change the travel distance here
// //           backgroundColor: ["#0000", "#0000", "#0000"],
// //         }}
// //       />
// //     </div>
// //   );
// // }

// import React from "react";
// import { motion } from "framer-motion";
// import { useMediaQuery } from "react-responsive";

// const imageStyle = {
//   display: "block",
//   width: "17rem",
//   height: "16rem",
//   backgroundImage: `url(https://octodex.github.com/images/Professortocat_v2.png)`, // Replace with your image path
//   backgroundSize: "cover",
//   borderRadius: "50%",
//   backgroundColor: "white",
//   marginLeft: "0",
// };
// const imageStyle2 = {
//   display: "block",
//   width: "10rem",
//   height: "10rem",
//   backgroundImage: `url(https://octodex.github.com/images/orderedlistocat.png)`, // Replace with your image path
//   backgroundSize: "cover",
//   borderRadius: "50%",
//   backgroundColor: "white",
//   marginLeft: "150%",
// };
// const imageStyle3 = {
//   display: "block",
//   width: "10rem",
//   height: "10rem",
//   backgroundImage: `url(https://octodex.github.com/images/femalecodertocat.png)`, // Replace with your image path
//   backgroundSize: "cover",
//   borderRadius: "50%",
//   backgroundColor: "white",
//   marginLeft: "420%",
// };

// const bounceTransition = {
//   y: {
//     duration: 1.8, // Increase the duration to make it travel longer
//     yoyo: Infinity,
//     ease: "easeOut",
//     repeatDelay: 0.4,
//     repeat: Infinity,
//   },
//   backgroundColor: {
//     duration: 0.8,
//     yoyo: Infinity,
//     ease: "easeOut",
//     repeatDelay: 0.4,
//   },
// };
// const bounceTransition2 = {
//   y: {
//     duration: 4.9, // Increase the duration to make it travel longer
//     yoyo: Infinity,
//     ease: "easeIn",
//     repeatDelay: 0.4,
//     repeat: Infinity,
//   },
//   backgroundColor: {
//     duration: 4.8,
//     yoyo: Infinity,
//     ease: "easeIn",
//     repeatDelay: 0.4,
//   },
// };

// export default function BouncingImage() {
//   const isWideScreen = useMediaQuery("(min-width: 1470px)");

//   if (!isWideScreen) {
//     return null; // Don't render the animation if not in wide screen
//   }

//   return (
//     <div
//       style={{
//         width: "15rem",
//         height: "10rem",
//         position: "fixed",
//       }}
//     >
//       {/* <motion.span
//         style={imageStyle}
//         transition={bounceTransition}
//         animate={{
//           y: ["10%", "6%", "100%"], // Change the travel distance here
//           backgroundColor: ["#0000", "#0000", "#0000"],
//         }}
//       /> */}
//       <motion.span
//         style={imageStyle2}
//         transition={bounceTransition2}
//         animate={{
//           y: ["10%", "70%", "-90%"], // Change the travel distance here
//           backgroundColor: ["#0000", "#0000", "#0000"],
//         }}
//       />

//       <motion.span
//         style={imageStyle3}
//         transition={bounceTransition2}
//         animate={{
//           y: ["60%", "60%", "-180%"], // Change the travel distance here
//           backgroundColor: ["#0000", "#0000", "#0000"],
//         }}
//       />
//     </div>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

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
  marginLeft: "150%",
};
const imageStyle3 = {
  display: "block",
  width: "10rem",
  height: "10rem",
  backgroundImage: `url(https://octodex.github.com/images/femalecodertocat.png)`, // Replace with your image path
  backgroundSize: "cover",
  borderRadius: "50%",
  backgroundColor: "white",
  marginLeft: "425%",
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
    duration: 1.9, // Increase the duration to make it travel longer
    yoyo: Infinity,
    ease: "easeIn",
    repeatDelay: 0.4,
    repeat: Infinity,
  },
  backgroundColor: {
    duration: 1.8,
    yoyo: Infinity,
    ease: "easeIn",
    repeatDelay: 0.4,
  },
};

export default function BouncingImage() {
  const isWideScreen = useMediaQuery({ minWidth: 1470 });

  if (!isWideScreen) {
    return null; // Don't render the animation if not in wide screen
  }

  return (
    <div
      style={{
        width: "15rem",
        height: "10rem",
        position: "fixed",
      }}
    >
      <motion.span
        style={imageStyle2}
        transition={bounceTransition2}
        animate={{
          y: ["10%", "70%", "-90%"], // Change the travel distance here
          backgroundColor: ["#0000", "#0000", "#0000"],
        }}
      />

      <motion.span
        style={imageStyle3}
        transition={bounceTransition2}
        animate={{
          y: ["60%", "60%", "-180%"], // Change the travel distance here
          backgroundColor: ["#0000", "#0000", "#0000"],
        }}
      />
    </div>
  );
}
