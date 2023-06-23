// import React from "react";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import Divider from "@mui/material/Divider";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// function Lander() {
//   const peopleArray = [
//     {
//       name: "Shaun",
//       username: "@iamshaunjp",
//       imgSrc: "https://avatars.githubusercontent.com/u/9838872?v=4",
//       bio: "Coding Ninja | Traveller | Musician | Coffee Enthusiast | Gamer 🎻 | The Net Ninja",
//     },
//     {
//       name: "Joe",
//       username: "@frontend-joe",
//       imgSrc: "https://avatars.githubusercontent.com/u/59584407?v=4",
//       bio: "Through constant practice & learning, I produce aesthetic software to an extremely high standard.",
//     },
//     {
//       name: "Evan You",
//       username: "@yyx990803",
//       imgSrc: "https://avatars.githubusercontent.com/u/499550?v=4",
//       bio: "Independent software developer currently based in Singapore. I am the creator of the JavaScript framework Vue.js and the frontend build tool Vite ",
//     },
//     {
//       name: "Tom Preston-Werner",
//       username: "@mojombo",
//       imgSrc: "https://avatars.githubusercontent.com/u/1?v=4",
//       bio: "He is best known as the founder and former CEO of GitHub, ",
//     },
//     {
//       name: "freeCodeCamp.org",
//       username: "@freeCodeCamp",
//       imgSrc: "https://avatars.githubusercontent.com/u/9892522?s=200&v=4",
//       bio: "Learn to code for free with millions of other people around the world ",
//     },
//     {
//       name: "The Algorithms",
//       username: "@TheAlgorithms",
//       imgSrc: "https://avatars.githubusercontent.com/u/20487725?s=200&v=4",
//       bio: "Open Source resource for learning Data Structures & Algorithms and their implementation in any Programming Language",
//     },
//     {
//       name: "Meta",
//       username: "@facebook",
//       imgSrc: "https://avatars.githubusercontent.com/u/69631?s=200&v=4",
//       bio: "We are working to build community through open source technology",
//     },
//   ];
//   return (
//     <div>
//       <h4> Not sure what to look ? Try these</h4>
//       <List
//         sx={{
//           width: "100%",
//           maxWidth: 560,
//           background: "linear-gradient(45deg, #4322b9 0%, #ffb3fc 100%)",
//         }}
//       >
//         <ListItem alignItems="flex-start">
//           <ListItemAvatar>
//             <Avatar
//               alt="Remy Sharp"
//               src="https://avatars.githubusercontent.com/u/9838872?v=4"
//             />
//           </ListItemAvatar>
//           <ListItemText
//             primary="Shaun"
//             secondary={
//               <React.Fragment>
//                 <Typography
//                   sx={{ display: "inline" }}
//                   component="span"
//                   variant="body2"
//                   color="text.primary"
//                 >
//                   @iamshaunjp
//                 </Typography>
//                 <br />
//                 {
//                   "Coding Ninja | Traveller | Musician | Coffee Enthusiast | Gamer 🎻 | The Net Ninja"
//                 }
//               </React.Fragment>
//             }
//           />
//         </ListItem>
//         <ListItem alignItems="flex-start">
//           <ListItemAvatar>
//             <Avatar
//               alt="Remy Sharp"
//               src="https://avatars.githubusercontent.com/u/59584407?v=4"
//             />
//           </ListItemAvatar>
//           <ListItemText
//             primary="Joe"
//             secondary={
//               <React.Fragment>
//                 <Typography
//                   sx={{ display: "inline" }}
//                   component="span"
//                   variant="body2"
//                   color="text.primary"
//                 >
//                   @frontend-joe
//                   <br />
//                 </Typography>
//                 {
//                   "Through constant practice & learning, I produce aesthetic software to an extremely high standard."
//                 }
//               </React.Fragment>
//             }
//           />
//         </ListItem>
//         <Divider variant="inset" component="li" />
//         <ListItem alignItems="flex-start">
//           <ListItemAvatar>
//             <Avatar
//               alt="Travis Howard"
//               src="https://avatars.githubusercontent.com/u/499550?v=4"
//             />
//           </ListItemAvatar>
//           <ListItemText
//             primary="Evan You"
//             secondary={
//               <React.Fragment>
//                 <Typography
//                   sx={{ display: "inline" }}
//                   component="span"
//                   variant="body2"
//                   color="text.primary"
//                 >
//                   @yyx990803
//                   <br />
//                 </Typography>
//                 {
//                   "Independent software developer currently based in Singapore. I am the creator of the JavaScript framework Vue.js and the frontend build tool Vite "
//                 }
//               </React.Fragment>
//             }
//           />
//         </ListItem>
//         <Divider variant="inset" component="li" />
//         <ListItem alignItems="flex-start">
//           <ListItemAvatar>
//             <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//           </ListItemAvatar>
//           <ListItemText
//             primary="Oui Oui"
//             secondary={
//               <React.Fragment>
//                 <Typography
//                   sx={{ display: "inline" }}
//                   component="span"
//                   variant="body2"
//                   color="text.primary"
//                 >
//                   Sandra Adams
//                 </Typography>
//                 {" — Do you have Paris recommendations? Have you ever…"}
//               </React.Fragment>
//             }
//           />
//         </ListItem>
//       </List>
//     </div>
//   );
// }
// export default Lander;
import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";

function Lander() {
  const [randomPeople, setRandomPeople] = useState([]);

  const peopleArray = [
    {
      name: "Shaun",
      username: "@iamshaunjp",
      imgSrc: "https://avatars.githubusercontent.com/u/9838872?v=4",
      bio: "Coding Ninja | Traveller | Musician | Coffee Enthusiast | Gamer 🎻 | The Net Ninja",
    },
    {
      name: "Joe",
      username: "@frontend-joe",
      imgSrc: "https://avatars.githubusercontent.com/u/59584407?v=4",
      bio: "Through constant practice & learning, I produce aesthetic software to an extremely high standard.",
    },
    {
      name: "Evan You",
      username: "@yyx990803",
      imgSrc: "https://avatars.githubusercontent.com/u/499550?v=4",
      bio: "Independent software developer currently based in Singapore. I am the creator of the JavaScript framework Vue.js and the frontend build tool Vite ",
    },
    {
      name: "Tom Preston-Werner",
      username: "@mojombo",
      imgSrc: "https://avatars.githubusercontent.com/u/1?v=4",
      bio: "He is best known as the founder and former CEO of GitHub, ",
    },
    {
      name: "freeCodeCamp.org",
      username: "@freeCodeCamp",
      imgSrc: "https://avatars.githubusercontent.com/u/9892522?s=200&v=4",
      bio: "Learn to code for free with millions of other people around the world ",
    },
    {
      name: "The Algorithms",
      username: "@TheAlgorithms",
      imgSrc: "https://avatars.githubusercontent.com/u/20487725?s=200&v=4",
      bio: "Open Source resource for learning Data Structures & Algorithms and their implementation in any Programming Language",
    },
    {
      name: "Meta",
      username: "@facebook",
      imgSrc: "https://avatars.githubusercontent.com/u/69631?s=200&v=4",
      bio: "We are working to build community through open source technology",
    },
    {
      name: "Sébastien Ros",
      username: "@sebastienros",
      imgSrc: "https://avatars.githubusercontent.com/u/1165805?v=4",
      bio: "Works for Microsoft, mostly ASP.NET and benchmarking. I also maintain Orchard, Jint, YesSql, Esprima, Fluid, Parlot",
    },
    {
      name: "WebDevSimplified",
      username: "@WebDevSimplified",
      imgSrc: "https://avatars.githubusercontent.com/u/39717099?v=4",
      bio: "I am  Kyle and I have been a full stack web developer since 2015. I have a Computer Engineering degree, but am mostly self-taught when it comes to web ",
    },
  ];

  useEffect(() => {
    // Shuffle the peopleArray to get random people
    const shuffledPeople = shuffleArray(peopleArray);

    // Get the first 5 people from the shuffled array
    const randomFivePeople = shuffledPeople.slice(0, 5);

    // Set the random people to the state
    setRandomPeople(randomFivePeople);
  }, []);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "1%",
        flexDirection: "column", // Added to center vertically as well
        alignItems: "center", // Added to center horizontally
      }}
    >
      <h4 style={{ textAlign: "center" }}> Not sure what to look? Try these</h4>
      <List
        sx={{
          // width: "100%",
          width: "auto",
          height: "auto",
          maxWidth: 560,
          borderRadius: "10%",

          background: "linear-gradient(135deg, #e6c0f2 0%, #ecfde7 100%)",
        }}
      >
        {randomPeople.map((person, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={person.name} src={person.imgSrc} />
              </ListItemAvatar>
              <ListItemText
                primary={person.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      fontWeight="bold"
                      color="text.primary"
                    >
                      {person.username}
                      <br />
                    </Typography>
                    {person.bio}
                  </React.Fragment>
                }
              />
            </ListItem>
            {index !== randomPeople.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default Lander;
