import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "../Components/main";
import ResponsiveAppBar from "../Components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BouncingImage from "../Components/bounce.jsx";
import Lander from "../Components/lander";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Main />
              <BouncingImage />
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
