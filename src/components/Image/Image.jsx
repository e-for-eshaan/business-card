import React from "react";

import "./Image.scss";


import me from "../../assets/myImage.jpeg"

export const Image = () => {
  return (
    <div className="imageSection">
      <img className="profile" src={me} alt="" />
      <div>
        <h2>Eshaan Yadav</h2>
        <h3>Software Developer</h3>
        <em>@ Zomato</em>
      </div>
    </div>
  )
}
