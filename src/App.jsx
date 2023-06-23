import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Main from "../Components/main";
import ResponsiveAppBar from "../Components/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BouncingImage from "../Components/bounce.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BouncingImage /> */}
      <Main />
      <BouncingImage />
    </>
  );
}

export default App;
