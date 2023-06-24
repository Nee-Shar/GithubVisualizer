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
    <div>
      <div
        style={{
          marginTop: "0%",
          display: "flex",
          justifyContent: "center",
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

            // marginLeft: "43%",

            borderRadius: "50%",
          }}
        />
      </div>
      <div
        style={{
          marginTop: "0%",
          marginLeft: "4%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h3
          style={{
            color: "black",
            // WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
            display: "inline",
            fontWeight: "bold",
            maxWidth: "300px",
            width: "65%",
            height: "auto",
            maxHeight: "100%",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {name}
        </h3>
      </div>

      <div
        style={{
          marginTop: "0%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h4
          style={{
            fontWeight: "",
            maxWidth: "200px",
            width: "auto",
            height: "auto",
            maxHeight: "100%",
          }}
        >
          @{title}
        </h4>
      </div>

      <br />
      <div
        style={{
          marginTop: "0%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontWeight: "bold",
            maxWidth: "200px",
            width: "auto",
            height: "auto",
            maxHeight: "100%",
          }}
        >
          {" "}
          Joined :{doj}
        </span>
      </div>
      <div
        style={{
          marginTop: "0%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardGroup
          style={{
            fontWeight: "bold",
            maxWidth: "700px",
            width: "700px",
            height: "auto",
            margin: "1%",
            maxHeight: "100%",
          }}
        >
          <Card
            style={{
              borderRadius: "15px",
              maxWidth: "660px",
              padding: "1%",
              margin: "1%",
              width: "auto",
              height: "auto",
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
                  className="bi bi-card-list"
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
              borderRadius: "15px",
              maxWidth: "560px",
              width: "auto",
              padding: "1%",
              margin: "1%",
              height: "auto",
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
                  className="bi bi-people-fill"
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
              borderRadius: "15px",
              maxWidth: "560px",
              width: "auto",
              height: "auto",
              padding: "1%",
              margin: "1%",
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
                  className="bi bi-person-fill-check"
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
      </div>
      <footer
        style={{
          marginTop: "0%",
          display: "flex",
          justifyContent: "center",
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
  );
}

export default Cardg;
