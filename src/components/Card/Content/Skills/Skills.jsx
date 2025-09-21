import React from "react";

import "./Skills.scss";

export const Skills = () => {
  return (
    <div className="content">
      <h1>Skills</h1>
      <div className="skillGrid">
        {skills.map((item, index) => {
          return <div className="skill">{item}</div>
        })}
      </div>
    </div>
  )
}

const skills = [
  "ReactJS", "Redux", "React-JSS", "Golang", "DynamoDB",
  "MySQL", "Amazon S3", "Kafka", "PHP", "gRPC",
  "Redux-Saga", "JavaScript", "Django", "Sass",
  "NextJS", "Tailwind", "headless CMS", "Swagger", "Storybook"
]
