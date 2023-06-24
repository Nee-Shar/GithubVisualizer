import React from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Cardg from "./cardg";
import ResponsiveAppBar from "./navbar";
import Box from "@mui/material/Box";
import Row from "react-bootstrap/Row";

import { useNavigate } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import TextField from "@mui/material/TextField";
function Main() {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery({ maxWidth: 576 });
  const [userName, setUsername] = useState("");
  const [url, setUrl] = useState([]);
  const [avaUrl, setAvaUrl] = useState("");
  const [repoLinks, setRepoLinks] = useState([]);
  const [repos, setRepos] = useState([]);
  const [bio, setBio] = useState([]);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingCount, setFollowingCount] = useState(0);
  const [repCount, setRepCount] = useState(0);
  const [company, setCompany] = useState([]);
  const [name, setName] = useState([]);
  const [date, setDate] = useState([]);

  const isMedScreen = useMediaQuery({ maxWidth: 900 });
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
    fetch(`https://api.github.com/search/users?q=${userName}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data.items[0]);
        setUrl(data.items[0].html_url);
        setAvaUrl(data.items[0].avatar_url);
        const reposUrl = data.items[0].repos_url;

        fetch(`https://api.github.com/users/${userName}`)
          .then((response) => response.json())
          .then((data) => {
            //   console.log(data);

            setFollowersCount(data.followers);
            setFollowingCount(data.following);
            setBio(data.bio);
            setRepCount(data.public_repos);
            setCompany(data.company);
            setName(data.name);

            // console.log(url);
            const originalDate = data.created_at;
            const parts = originalDate.split("T")[0].split("-");
            const formattedDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
            setDate(formattedDate);
          })
          .catch((error) => {
            console.error(error);
          });

        fetch(reposUrl)
          .then((response) => response.json())
          .then((reposData) => {
            // console.log(reposData);
            const filteredRepos = reposData.filter((repo) => !repo.fork);
            filteredRepos.sort(
              (a, b) => b.stargazers_count - a.stargazers_count
            ); // Sort by stars
            const top7Repos = filteredRepos.slice(0, 8);
            setRepos(top7Repos);
          })

          .catch((error) => {
            console.error(error);
          });
      });
    fetch(`https://api.github.com/users/${userName}/events`)
      .then((response) => response.json())
      .then((eventsData) => {
        const commitEvents = eventsData.filter(
          (event) => event.type === "PushEvent"
        );
        const commitCount = commitEvents.length;
        //  console.log(`Total commits: ${commitCount}`);

        // Process the commit events or display the commit graph as needed
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {avaUrl !== "" && <ResponsiveAppBar img={avaUrl} url={url} />}
      <div className="box">
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& .MuiTextField-root": { m: 1, width: "28ch" },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            required
            id="outlined-required"
            className="input"
            placeholder="Enter Username here"
            onChange={(e) => setUsername(e.target.value)}
            style={{ border: "1px solid black" }}
          />
        </Box>
      </div>
      {avaUrl !== "" && (
        <Cardg
          image={avaUrl}
          title={userName}
          description={followersCount}
          following={followingCount}
          bio={bio}
          repCount={repCount}
          comp={company}
          name={name}
          doj={date}
        />
      )}

      {repos.length > 0 && (
        <div style={{ marginTop: "5%", padding: "2%" }}>
          <div
            style={{
              textAlign: "center",
              // marginTop: "5%",
              // marginBottom: "3%",
            }}
          >
            <h4 style={{ fontWeight: "bold" }}>Top Repositories:</h4>
          </div>
          <Row style={{ padding: "2%" }}>
            {repos.map((repo) => (
              <Col key={repo.id} sm={6} md={3} lg={6}>
                <Card
                  style={{
                    marginBottom: "1%",
                    border: "2px solid",
                    borderColor:
                      "linear-gradient(90deg, rgba(61,51,226,1) 0%, rgba(144,26,222,1) 18%, rgba(121,9,96,1) 56%, rgba(0,212,255,1) 100%)",
                  }}
                >
                  <Card.Body>
                    <div style={{}}>
                      <Card.Title
                        style={{
                          fontSize: isMedScreen ? "1rem" : "1.3rem",
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="26"
                          height="26"
                          fill="currentColor"
                          className="bi bi-github"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>{" "}
                        {repo.name}
                      </Card.Title>
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "2px",

                        backgroundImage:
                          "linear-gradient(90deg, rgba(61,51,226,1) 0%, rgba(144,26,222,1) 18%, rgba(121,9,96,1) 56%, rgba(0,212,255,1) 100%)",
                        margin: "10px 0",
                      }}
                    ></div>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link"
                    >
                      View Repo
                    </a>

                    <Card.Text>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>{" "}
                      {repo.stargazers_count}
                    </Card.Text>
                    <Card.Text>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M 5 3.25 a 0.75 0.75 0 1 1 -1.5 0 a 0.75 0.75 0 0 1 1.5 0 Z m 0 2.122 a 2.25 2.25 0 1 0 -1.5 0 v 0.878 A 2.25 2.25 0 0 0 5.75 8.5 h 1.5 v 2.128 a 2.251 2.251 0 1 0 1.5 0 V 8.5 h 1.5 a 2.25 2.25 0 0 0 2.25 -2.25 v -0.878 a 2.25 2.25 0 1 0 -1.5 0 v 0.878 a 0.75 0.75 0 0 1 -0.75 0.75 h -4.5 A 0.75 0.75 0 0 1 5 6.25 v -0.878 Z m 3.75 7.378 a 0.75 0.75 0 1 1 -1.5 0 a 0.75 0.75 0 0 1 1.5 0 Z m 3 -8.75 a 0.75 0.75 0 1 0 0 -1.5 a 0.75 0.75 0 0 0 0 1.5 Z" />
                      </svg>
                      {repo.forks}
                    </Card.Text>
                    <div style={{ height: "10px", width: "auto" }}>
                      <Card.Text style={{ fontSize: "small" }}>
                        {repo.language}
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}

export default Main;
