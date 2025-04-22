import React, { Component } from "react";
import "./Exp.css";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { exp } from "../../portfolio";
import { Fade } from "react-reveal";
import FrontEndImg from "./FrontEndImg";
import BackEndImg from "./BackEndImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import Boozimba_logo from "./Boozimba.gif";
import Vail_logo from "./Vail_logo.png";
import HP_logo from "./HP_logo.png";
import Vail_img from "./vail_image.avif";
import HP_img from "./HP_img.png";

function GetImageSvg(props) {
  if (props.fileName === "HP") return <></>;

  if (props.fileName === "VAIL") {
    return (
      <div className="vail-image-wrapper">
        <img src={Vail_img} alt="VAIL_img" />
      </div>
    );
  }

  if (props.fileName === "Booz") return <></>;

  return <></>;
}

function GetLogo(props) {
  if (props.fileName === "HP") {
    return (
      <a href="https://www.hp.com/us-en/home.html">
        <img src={HP_img} className="hp-logo" alt="HP_logo" />
      </a>
    );
  } else if (props.fileName === "VAIL") {
    return (
      <a href="https://vail.sice.indiana.edu/">
        <img src={Vail_logo} className="vail-logo" alt="VAIL_logo" />
      </a>
    );
  } else if (props.fileName === "BOOZ") {
    return (
      <a href="https://boozimba.netlify.app">
        <img
          src={Boozimba_logo}
          className="boozimba-logo"
          alt="Boozimba_logo"
        />
      </a>
    );
  }
}

class ExpSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {exp.data.map((exp, i) => {
          return (
            <div
              key={i}
              className={i % 2 === 0 ? "exp-main-div" : "exp-main-div-reverse"}
            >
              <Fade
                {...(i % 2 === 0 ? { left: true } : { right: true })}
                duration={2000}
              >
                <div className="flex flex-col company_div">
                  <div className="company_logo">
                    <GetLogo theme={theme} fileName={exp.fileName} />
                  </div>
                  <h1 className="exp-heading" style={{ color: theme.text }}>
                    {exp.company}
                  </h1>
                  <h2 className="exp-sub-heading" style={{ color: theme.text }}>
                    {exp.title}
                  </h2>
                  <div className="exp-image-div">
                    <GetImageSvg fileName={exp.fileName} theme={theme} />
                  </div>
                </div>
              </Fade>

              <div className="exp-text-div">
                <Fade
                  {...(i % 2 === 0 ? { right: true } : { left: true })}
                  duration={1000}
                ></Fade>
                <Fade
                  {...(i % 2 === 0 ? { right: true } : { left: true })}
                  duration={1500}
                ></Fade>
                <Fade
                  {...(i % 2 === 0 ? { right: true } : { left: true })}
                  duration={2000}
                >
                  <div>
                    {exp.responsibilities.map((resp, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle exp-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {resp}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ExpSection;
