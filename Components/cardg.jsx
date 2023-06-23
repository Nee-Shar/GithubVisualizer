import React from "react";
import CardMedia from "@mui/material/CardMedia";
import SourceIcon from "@mui/icons-material/Source";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
function Cardg({
  image,
  title,
  description,
  following,
  bio,
  repCount,
  comp,
  name,
  doj,
}) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    // <div
    //   style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //   }}
    // >
    <div
      style={{
        marginTop: "0%",
      }}
    >
      <img
        src={image}
        alt="Image"
        style={{
          maxWidth: "200px",
          width: "auto",
          height: "auto",
          maxHeight: "100%",
          marginLeft: "43%",

          borderRadius: "50%",
        }}
      />
      <br />
      <h3
        style={{
          background:
            "linear-gradient(90deg, rgba(2,0,36,1) 6%, rgba(121,9,96,1) 56%, rgba(0,212,255,1) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline",
          fontWeight: "bold",
          maxWidth: "200px",
          width: "auto",
          height: "auto",
          maxHeight: "100%",
          marginLeft: "43%",
        }}
      >
        {name}
      </h3>
      <br />

      <h4
        style={{
          fontWeight: "",
          maxWidth: "200px",
          width: "auto",
          height: "auto",
          maxHeight: "100%",
          marginLeft: "45%",
        }}
      >
        @{title}
      </h4>
      <br />
      <span
        style={{
          fontWeight: "bold",
          maxWidth: "200px",
          width: "auto",
          height: "auto",
          maxHeight: "100%",
          marginLeft: "45%",
        }}
      >
        {" "}
        Joined :{doj}
      </span>

      <CardGroup
        style={{
          margin: "10px",
          display: "flex",
          width: "50rem",

          justifyContent: "center",
          marginLeft: "18%",
        }}
      >
        <Card
          style={{
            margin: "10px",
            borderRadius: "15px",
            height: "120px",
            WebkitBoxShadow: "-6px 3px 15px 0px rgba(65,65,235,1)",
            MozBoxShadow: "-6px 3px 15px 0px rgba(65,65,235,1)",
            boxShadow: "-6px 3px 15px 0px rgba(65,65,235,1)",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>Repos</Card.Title>
            <Card.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-card-list"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              </svg>{" "}
              {repCount}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            margin: " 10px",
            borderRadius: "15px",
            height: "120px",
            WebkitBoxShadow: "-6px 3px 15px 0px rgba(65,65,235,1)",
            MozBoxShadow: "-6px 3px 15px 0px rgba(65,65,235,1)",
            boxShadow: "-6px 3px 15px 0px rgba(65,65,235,1)",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>Followers</Card.Title>
            <Card.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
              </svg>{" "}
              {description}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            margin: " 10px",
            borderRadius: "15px",
            height: "120px",
            WebkitBoxShadow: "-6px 3px 15px 0px rgba(65,65,235,1)",
            MozBoxShadow: "-6px 3px 15px 0px rgba(65,65,235,1)",
            boxShadow: "-6px 3px 15px 0px rgba(65,65,235,1)",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold" }}>Following</Card.Title>
            <Card.Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                fill="currentColor"
                class="bi bi-person-fill-check"
                viewBox="0 0 16 16"
              >
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514ZM11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path d="M2 13c0 1 1 1 1 1h5.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.544-3.393C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4Z" />
              </svg>{" "}
              {following}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      <footer
        style={{
          width: "450px",
          height: "auto",
          maxHeight: "100%",
          marginLeft: "28%",
        }}
      >
        {" "}
        {bio && <p>{bio}</p>}
      </footer>
      <div
        style={{
          width: "100%",
          height: "5px",
          backgroundImage:
            "linear-gradient(90deg, rgba(61,51,226,1) 0%, rgba(144,26,222,1) 18%, rgba(121,9,96,1) 56%, rgba(0,212,255,1) 100%)",
          margin: "10px 0",
        }}
      ></div>
    </div>

    /* <Container>
      <Row>
        <Col>
          {/* <img
            src={image}
            alt="Image"
            style={{
              borderRadius: "50%",
              maxWidth: "200px",
              width: "auto",
              height: "auto",
              maxHeight: "100%",
              marginLeft: "35%",
            }}
          /> 
      //   </Col>

      //   <Col>
      //     <h3
      //       style={{
      //         background:
      //           "linear-gradient(90deg, rgba(2,0,36,1) 6%, rgba(121,9,96,1) 56%, rgba(0,212,255,1) 100%)",
      //         WebkitBackgroundClip: "text",
      //         WebkitTextFillColor: "transparent",
      //         display: "inline",
      //         fontWeight: "bold",
      //       }}
      //     >
      //       {name}
      //     </h3>
      //     <h4 style={{ paddingTop: "2%" }}>@{title}</h4>
      //     <span> Joined :{doj}</span>
      //     <Stack direction="row" spacing={2} style={{ marginTop: "5%" }}>
      //       <Avatar
      //         sx={{ width: 86, height: 86 }}
      //         alt="Repos"
      //         src="https://e7.pngegg.com/pngimages/725/26/png-clipart-github-computer-icons-repository-github-angle-git.png"
      //       />
      //       <Avatar
      //         sx={{ width: 86, height: 86 }}
      //         alt="Repos"
      //         src="https://i0.wp.com/www.appsally.com/wp-content/uploads/2020/05/GitHub-Followers-1.png?fit=800%2C587&ssl=1"
      //       />

      //       <Avatar
      //         sx={{ width: 86, height: 86 }}
      //         alt="Repos"
      //         src="https://avatars.githubusercontent.com/u/583231?v=4"
      //       />
      //     </Stack>
      //     <Row>
      //       <Col> {repCount}</Col>
      //       <Col style={{ paddingLeft: "5px" }}> {description}</Col>
      //       <Col>{following}</Col>{" "}
      //     </Row>
      //   </Col>
      // </Row>

      {/* <Card sx={{ maxWidth: 845 }}>
        <CardActionArea>
       
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt="Image"
            style={{
              borderRadius: "50%",
              width: "100%",
              height: "auto",
              maxWidth: "250px",
              marginLeft: "5%",
              fontSize: "500",
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              style={{
                background:
                  "linear-gradient(90deg, rgba(2,0,36,1) 6%, rgba(121,9,96,1) 56%, rgba(0,212,255,1) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline",
                fontWeight: "bold",
              }}
            >
              @{title}
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item xs={7} md={5}>
                  <Item style={{ fontWeight: "bold" }}>Repos: {repCount}</Item>
                </Grid>
                <Grid item xs={7} md={5}>
                  <Item style={{ fontWeight: "bold" }}>
                    Followers: {description}
                  </Item>
                </Grid>
                <Grid item xs={7} md={5}>
                  <Item style={{ fontWeight: "bold" }}>
                    Following: {following}
                  </Item>
                </Grid>
                <Grid item xs={7} md={5}>
                  <Item style={{ fontWeight: "bold" }}>Joined: {doj}</Item>
                </Grid>
              </Grid>
            </Box>
            {bio && (
              <Typography variant="body1" color="text.secondary">
                Bio :{bio}
              </Typography>
            )}
            {comp && (
              <Typography variant="body1" color="text.secondary">
                Company :{comp}
              </Typography>
            )}
          
          </CardContent>
        </CardActionArea>
      </Card> */
    // </Container>
    // </div> */}
  );
}

export default Cardg;
