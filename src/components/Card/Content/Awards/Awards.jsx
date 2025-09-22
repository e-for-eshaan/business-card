import React from "react";
import { FaTrophy } from "react-icons/fa";

import "./Awards.scss";

export const Awards = () => {
  return (
    <div className="content awards">
      <h1>Awards</h1>
      <table>
        {
          prizes.map((item, index) => {
            return <tr key={index}>
              <td>
                <FaTrophy />
              </td>
              <td>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </td>
            </tr>
          })
        }
      </table>
    </div>
  )
}

const prizes =
  [
    {
      "title": "WINNER",
      "description": "IEEE Quollab Product Development Competition using HTML, CSS, and jQuery.",
      "organizer": "IEEE Quollab"
    },
    {
      "title": "TOP 8",
      "description": "Innovathon Built a startup platform using MERN stack, ranking 8th among a pool of 25",
      "organizer": "Innovathon"
    }
  ]

