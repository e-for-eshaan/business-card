import React, { useState } from "react";

import "./Card.scss";
import { Image, SideBar } from "../../components";
import { Awards, Education, Skills, Experience, Introduction } from "./Content";

import profile from '../../assets/profile.svg'
import education from '../../assets/education.svg'
import skills from '../../assets/skills.svg'
import experience from '../../assets/experience.svg'
import awards from '../../assets/awards.svg'

export const Card = () => {
  const [selectedMenu, setSelectedMenu] = useState({ ...navbarContent[0], index: 0 })
  const selectMenu = (menu) => {
    setSelectedMenu(menu)
  }
  return (
    <div className="cardWrapper">
      <div className="leftPane">
        <Image />
      </div>
      <div className="rightPane">
        <div className="section">
          {selectedMenu.content}
        </div>
        <div>
          <SideBar
            selected={selectedMenu}
            menu={navbarContent}
            selector={selectMenu} />
        </div>
      </div>
    </div>
  )
}

const navbarContent = [
  {
    name: "Introduction",
    icon: profile,
    content: <Introduction />
  },
  {

    name: "Experience",
    icon: experience,
    content: <Experience />
  },
  {
    name: "Awards",
    icon: awards,
    content: <Awards />
  },
  {
    name: "Skills",
    icon: skills,
    content: <Skills />
  },
  {
    name: "Education",
    icon: education,
    content: <Education />
  },
]
