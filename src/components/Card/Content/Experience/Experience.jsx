import React from "react";

import "./Experience.scss";

import zomato from "../../../../assets/zomato.png"
import techwondoe from "../../../../assets/techwondoe.jpg"
import phurti from "../../../../assets/phurti.jpg"
import studiohedgefund from "../../../../assets/studiohedgefund.jpeg"
import middleware from "../../../../assets/middlewarehq.png"

export const Experience = () => {
  return (
    <div className="content experience">
      <h1>Experience</h1>
      <div className="timeline">
        <div style={{ width: EXPERIENCE_DATA.length * 300 + 90 }}>
          <div className="line" style={{ width: EXPERIENCE_DATA.length * 340 }} />
          {EXPERIENCE_DATA.map((item, index) => {
            return <div
              className={`experienceCard ${!(index % 2) ? "upCard" : "downCard"}`}
              style={{ left: 20 + index * 300 }}
            >
              <div className={`bullet ${!(index % 2) ? "upBullet" : "downBullet"}`} />

              <div className="title">
                <div className="logo">
                  <img src={item.logo} alt="" />
                </div>
                <h3>
                  {item.company}
                </h3>
              </div>
              <h3>{item.title}</h3>

              <p>{item.date.start} - {item.date.end}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

const EXPERIENCE_DATA = [
  {
    company: "STUDIO HEDGE FUND",
    title: "Software Engineer",
    description: [
      "Stripped down React JS to its core to allow cautious rendering of heavy, data-intensive components.",
      "Shipped end-to-end features, from conception, to design, to algorithms.",
      "Created an in-house diffing algorithm to sync global and local states.",
      "Set up testing suites, commit hooks, linting checks, and other configurations.",
      "Revamped the frontend setup and design, and made the codebase production-ready ahead of the fund’s launch."
    ],
    skills: ["ReactJS", "Algorithms", "Testing", "CI/CD", "Frontend Architecture"],
    date: {
      start: "March 2025",
      end: "Present"
    },
    location: "Remote",
    logo: studiohedgefund
  },
  {
    company: "MIDDLEWARE",
    title: "Founding Engineer",
    description: [
      "Delivered responsive, high-performance UIs using Next.js, Material-UI, and Knex, ensuring scalability and cross-browser compatibility.",
      "Developed in-house tooling, optimization wrappers, auto-error handling, dev-CLIs, dev-automations and dashboards, both for users and developers.",
      "Designed and built custom data-visualization charts and reusable components.",
      "Developed a sync orchestrator and link-sharing populator, enabling users and developers to debug data effectively."
    ],
    skills: ["Next.js", "Material-UI", "Knex", "Tooling", "Dashboards", "Data Visualization"],
    date: {
      start: "September 2023",
      end: "March 2025"
    },
    location: "Gurugram, India",
    logo: middleware
  },
  {
    company: "ZOMATO",
    title: "Software Developer Intern",
    description: [
      "Developed the entire bulk operation service dashboard using ReactJS, Redux, and React-JSS, with Golang-based microservices and DynamoDB.",
      "Created the front-end architecture for the novel dining menu service for merchants, using MySQL and Amazon S3.",
      "Built and automated the entire micro-service for merchant emails to acknowledge tax-compliance updates in the menu using Kafka, Go, PHP, and gRPC while integrating relational and non-relational databases.",
      "Revamped and optimized the POS and Non-POS menu validation flows to enable dynamic checks."
    ],
    skills: ["ReactJS", "Redux", "React-JSS", "Golang", "DynamoDB", "MySQL", "Amazon S3", "Kafka", "PHP", "gRPC"],
    date: {
      "start": "January 2023",
      "end": "June 2023"
    },
    location: "Gurugram, India",
    logo: zomato
  },
  {
    company: "TECHWONDOE",
    title: "Software Developer Intern",
    description: [
      "Front-end spearhead for the client, actively participating in client meets and client negotiations.",
      "Rolled out 2 apps for foreign clients using NextJS, Tailwind, headless CMS, Django, and Swagger.",
      "Documented every component and flow using Storybook library.",
      "Actively participated in code reviews, hot-fixes, deadline negotiations, and design reviews."
    ],
    skills: ["NextJS", "Tailwind", "headless CMS", "Django", "Swagger", "Storybook"],
    date: {
      "start": "May 2022",
      "end": "August 2022"
    },
    location: "Auckland, New Zealand",
    logo: techwondoe
  },
  {
    company: "PHURTI",
    title: "Software Developer Intern",
    description: [
      "Reinvented and redesigned the entire front-end code base with ReactJS, Redux-Saga, and JavaScript.",
      "Developed Back-end systems with Django, implementing new features like pagination, developed APIs, etc.",
      "Designed and created the entire architecture of how discounts are applied.",
      "Programmed complex behaviors and animations using Sass and JavaScript."
    ],
    skills: ["ReactJS", "Redux-Saga", "JavaScript", "Django", "Sass"],
    date: {
      "start": "November 2021",
      "end": "January 2022"
    },
    location: "Bengaluru, India",
    logo: phurti
  }
]


