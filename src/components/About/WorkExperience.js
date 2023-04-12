import React from "react";
import "./workExperience.css";

export default function WorkExperience({ experiences }) {
  return (
    <div className="work-experience">
      {experiences?.length !== 0 &&
        experiences.map((experience) => {
          return (
            <div className="experience-container">
              <div className="experience-time-line">
                <div className="experience-circle" />
                <div className="experience-line" />
              </div>
              <div className="experience-data">
                <h3>
                  {experience.position}, {experience.company}
                </h3>
                <h3>
                  {experience.date_start}-{experience.date_end}
                </h3>
                <ul>
                  {experience.activities.map((activiti) => (
                    <li>{activiti}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
    </div>
  );
}
