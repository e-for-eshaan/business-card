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
          return <div className="iconLink">
            <img src={item.icon} alt="" />
          </div>
        })}
      </div>
    </div>
  )
}

const links = [
  {
    icon: github,
    link: "",
  },
  {
    icon: portfolio,
    link: "",
  },
  {
    icon: linkedin,
    link: "",
  },
  {
    icon: instagram,
    link: "",
  },

  {
    icon: twitter,
    link: "",
  },


]
