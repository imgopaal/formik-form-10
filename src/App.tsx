import React from "react";
import "./App.css";

import { BsArrowUpRight } from "react-icons/bs";

import HorizontalLabelPositionBelowStepper from "./stepper/Stepper";
function App() {
  return (
    <div>
      <div className="App">
        <div className="stepper">
          <h1>Signup Form With Formik</h1>
          <HorizontalLabelPositionBelowStepper />
        </div>
      </div>
      <footer>
        Made With ❤ By{" "}
        <a
          href="https://github.com/gopaldas123"
          rel="noreferrer"
          target="_blank"
        >
          &nbsp;Gopal Das
          <BsArrowUpRight />
        </a>
      </footer>
    </div>
  );
}

export default App;
