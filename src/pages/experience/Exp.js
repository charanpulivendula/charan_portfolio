import React from "react";
import "./Exp.css";
import ExpSection from "./ExpSection";
import { Fade } from "react-reveal";

export default function Exp(props) {
  console.log(props);

  const theme = props.theme;
  return (
    <div className="main" id="exp">
      <div className="exp-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="exp-header" style={{ color: theme.text }}>
            career
          </h1>
        </Fade>
      </div>
      <ExpSection theme={theme} />
    </div>
  );
}
