import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";
import FrontEndImg from "./FrontEndImg";
import BackEndImg from "./BackEndImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";

function GetSkillSvg(props) {
  if (props.fileName === "FrontEndImg")
    return <FrontEndImg theme={props.theme} />;
  else if (props.fileName === "BackEndImg")
    return <BackEndImg theme={props.theme} />;
  else if (props.fileName === "CloudInfraImg")
    return <CloudInfraImg theme={props.theme} />;
  return <DesignImg theme={props.theme} />;
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div
              key={i}
              className={
                i % 2 === 0 ? "skills-main-div" : "skills-main-div-reverse"
              }
            >
              <Fade
                {...(i % 2 === 0 ? { left: true } : { right: true })}
                duration={2000}
              >
                <div className="skills-image-div">
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade
                  {...(i % 2 === 0 ? { right: true } : { left: true })}
                  duration={1000}
                >
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade
                  {...(i % 2 === 0 ? { right: true } : { left: true })}
                  duration={1500}
                >
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade
                  {...(i % 2 === 0 ? { right: true } : { left: true })}
                  duration={2000}
                >
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
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

export default SkillSection;
