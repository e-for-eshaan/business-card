import React from "react";

import "./Introduction.scss";

import instagram from '../../../../assets/insta.svg'
import linkedin from '../../../../assets/linkedin.svg'
import twitter from '../../../../assets/twitter.svg'
import portfolio from '../../../../assets/portfolio.svg'
import github from "../../../../assets/github.svg"

export const Introduction = () => {
  return (
    <div className="content introduction">
      <h1>I create, because I can!</h1>
      <div className="introductionContent">
        <ul>
          <li><span className="emojiBullet">🌍</span>  I'm based in New Delhi</li>
          <li><span className="emojiBullet">✉️</span>  You can contact me at eshaanyadav24@gmail.com</li>
          <li><span className="emojiBullet">🚀</span>  I'm currently working at Zomato</li>
          <li><span className="emojiBullet">🧠</span>  I'm learning WebDev Frameworks</li>
          <li><span className="emojiBullet">🤝</span>  I'm open to collaborating on projects</li>
          <li><span className="emojiBullet">🎵</span>  I also play Guitar and Piano!</li>
        </ul>

      </div>
      <div className="iconTray">
        {links.map((item) => {
          return <a href={item.link} target="_blank" className="iconLink">
            <img src={item.icon} alt="" />
          </a>
        })}
      </div>
    </div>
  )
}

const links = [
  {
    icon: github,
    link: "https://github.com/e-for-eshaan",
  },
  {
    icon: portfolio,
    link: "https://e-for-eshaan.github.io/",
  },
  {
    icon: linkedin,
    link: "https://www.linkedin.com/in/eshaan-yadav-22b94b1b4/",
  },
  {
    icon: instagram,
    link: "https://instagram.com/eshaan_with_an_e",
  },

  {
    icon: twitter,
    link: "https://twitter.com/Eshaaaaann",
  },
]
