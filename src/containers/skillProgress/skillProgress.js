import React from "react"
import "./Progress.css"
import { techStack } from "../../portfolio"
import { Fade } from "react-reveal"

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    const colorArray = [
      "#6C6CE5",
      "#DC62CC",
      "#FF9476",
      "#F9F871",
      "#B0A8DF",
      "#DF3F46",
      "#008B6A",
    ]
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <h1 className="skills-heading">Proficiency</h1>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage,
                background:
                  colorArray[Math.floor(Math.random() * colorArray.length)],
              }
              return (
                <div className="skill" key={i}>
                  <div className="skill-info">
                    <p style={{ fontWeight: 500 }}>{exp.Stack}</p>
                    <p className="float-right">{exp.progressPercentage}</p>
                  </div>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="skills-image">
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          </div>
        </div>
      </Fade>
    )
  }
  return null
}
