import React from "react";

import "./Image.scss";
import qr from "../../assets/qr.svg"

import me from "../../assets/myImage.jpeg"

export const Image = () => {
  return (
    <div className="imageSection">
      <div className="profile">
        <img className="qrcode" src={qr} alt="" />
        <img className="dp" src={me} alt="" />
        <img src="" alt="" />
      </div>
      <div>
        <h2>Eshaan Yadav</h2>
        <h3>Software Developer</h3>
        <em>@ Zomato</em>
      </div>
    </div>
  )
}
