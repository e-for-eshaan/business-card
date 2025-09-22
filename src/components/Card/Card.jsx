import React, { useState } from "react";
import { 
  FaUser, 
  FaGraduationCap, 
  FaCode, 
  FaBriefcase, 
  FaTrophy 
} from "react-icons/fa";

import "./Card.scss";
import { Image, SideBar } from "../../components";
import { Awards, Education, Skills, Experience, Introduction } from "./Content";

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
    icon: FaUser,
    content: <Introduction />
  },
  {
    name: "Education",
    icon: FaGraduationCap,
    content: <Education />
  },
  {
    name: "Experience",
    icon: FaBriefcase,
    content: <Experience />
  },
  {
    name: "Awards",
    icon: FaTrophy,
    content: <Awards />
  },
  {
    name: "Skills",
    icon: FaCode,
    content: <Skills />
  },
]
