import { useState } from "react";
import "./App.css";
import Main from "../Components/main";
import ResponsiveAppBar from "../Components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BouncingImage from "../Components/bounce.jsx";
import Lander from "../Components/lander";
import Lottie from "react-lottie";
import animationData from "../Lotties/github";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Main />
              <div style={{ marginTop: "-4%" }}>
                <Lottie options={defaultOptions} height={200} width={200} />
              </div>
              {/* <BouncingImage /> */}
              <Lander />
            </div>
          }
        />{" "}
        <Route
          path="/search"
          element={
            <div>
              <Main />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
