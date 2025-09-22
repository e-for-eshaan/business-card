import React from "react";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaGlobe 
} from "react-icons/fa";

import "./Introduction.scss";

export const Introduction = () => {
  return (
    <div className="content introduction">
      <h1>I create, because I can!</h1>
      <div className="introductionContent">
        <ul>
          <li><span className="emojiBullet">🌍</span>  I'm based in Gurgaon</li>
          <li><span className="emojiBullet">✉️</span>  You can contact me at eshaanyadav24@gmail.com</li>
          <li><span className="emojiBullet">🚀</span>  I'm currently working at Lotus Hedge Fund</li>
          <li><span className="emojiBullet">🧠</span>  I'm learning to twist React, to achieve performance</li>
          <li><span className="emojiBullet">🤝</span>  I'm open to collaborating on projects</li>
          <li><span className="emojiBullet">🎵</span>  I also play Guitar and Piano!</li>
        </ul>

      </div>
      <div className="iconTray">
        {links.map((item, index) => {
          return <a href={item.link} target="_blank" rel="noopener noreferrer" className="iconLink" key={index}>
            <item.icon />
          </a>
        })}
      </div>
    </div>
  )
}

const links = [
  {
    icon: FaGithub,
    link: "https://github.com/e-for-eshaan",
  },
  {
    icon: FaGlobe,
    link: "https://e-for-eshaan.vercel.app/",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/eshaan-yadav-22b94b1b4/",
  },
 
]
