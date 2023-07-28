import React from "react";

import "./Experience.scss";

import zomato from "../../../../assets/zomato.png"
import techwondoe from "../../../../assets/techwondoe.jpg"
import phurti from "../../../../assets/phurti.jpg"

export const Experience = () => {
  return (
    <div className="content experience">
      <h2>Experience</h2>
      <div className="timeline">
        <div style={{ width: experience.length * 300 + 90 }}>
          <div className="line" style={{ width: experience.length * 340 }} />
          {experience.map((item, index) => {
            return <div
              className={`experienceCard ${!(index % 2) ? "upCard" : "downCard"}`}
              style={{ left: 20 + index * 300 }}
            >
              <div className={`bullet ${!(index % 2) ? "upBullet" : "downBullet"}`} />

              <div className="title">
                <div className="logo">
                  <img src={item.logo} alt="" />
                </div>
                <h2>
                  {item.company}
                </h2>
              </div>

              <p>{item.date.start} - {item.date.end}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}


const experience = [
  {
    "company": "ZOMATO",
    "description": [
      "Developed the entire bulk operation service dashboard using ReactJS, Redux, and React-JSS, with Golang-based microservices and DynamoDB.",
      "Created the front-end architecture for the novel dining menu service for merchants, using MySQL and Amazon S3.",
      "Built and automated the entire micro-service for merchant emails to acknowledge tax-compliance updates in the menu using Kafka, Go, PHP, and gRPC while integrating relational and non-relational databases.",
      "Revamped and optimized the POS and Non-POS menu validation flows to enable dynamic checks."
    ],
    "skills": ["ReactJS", "Redux", "React-JSS", "Golang", "DynamoDB", "MySQL", "Amazon S3", "Kafka", "PHP", "gRPC"],
    "date": {
      "start": "January 2023",
      "end": "June 2023"
    },
    "location": "Gurugram, India",
    logo: zomato
  },
  {
    "company": "TECHWONDOE",
    "description": [
      "Front-end spearhead for the client, actively participating in client meets and client negotiations.",
      "Rolled out 2 apps for foreign clients using NextJS, Tailwind, headless CMS, Django, and Swagger.",
      "Documented every component and flow using Storybook library.",
      "Actively participated in code reviews, hot-fixes, deadline negotiations, and design reviews."
    ],
    "skills": ["NextJS", "Tailwind", "headless CMS", "Django", "Swagger", "Storybook"],
    "date": {
      "start": "May 2022",
      "end": "August 2022"
    },
    "location": "Auckland, New Zealand",
    logo: techwondoe
  },
  {
    "company": "PHURTI",
    "description": [
      "Reinvented and redesigned the entire front-end code base with ReactJS, Redux-Saga, and JavaScript.",
      "Developed Back-end systems with Django, implementing new features like pagination, developed APIs, etc.",
      "Designed and created the entire architecture of how discounts are applied.",
      "Programmed complex behaviors and animations using Sass and JavaScript."
    ],
    "skills": ["ReactJS", "Redux-Saga", "JavaScript", "Django", "Sass"],
    "date": {
      "start": "November 2021",
      "end": "January 2022"
    },
    "location": "Bengaluru, India",
    logo: phurti
  }
]


