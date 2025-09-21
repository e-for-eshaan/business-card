import React from "react";

import "./SideBar.scss";

export const SideBar = ({ menu, selector, selected }) => {
  return (
    <div className="sideBar">
      <div className="selector" style={{ top: 320 / 4 * selected.index }} >
        <div className="extenders topRound">
          <div className="topWithin" />
        </div>
        <div className="extenders bottomRound" >
          <div className="bottomWithin" />
        </div>
      </div>
      <ul>
        {
          menu.map((item, index) => {
            return <li key={index} style={{ color: index === selected.index ? "white" : "black " }} onClick={() => selector({ ...item, index })}>
              <img src={item.icon} alt="404" />
            </li>
          })
        }
      </ul>
    </div>
  )
}
