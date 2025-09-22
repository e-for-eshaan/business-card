import React from "react";

import "./Education.scss";
import { Counter } from "../../../Counter/Counter";


export const Education = () => {
  return (
    <div className="content education">
      <h1>Education</h1>
      <div className="educationWrapper">
        {
          EDUCATION_DATA.map(item => {
            return <div>
              <div className="degree">
                <h2>{item.title}</h2>
              </div>
              <div className="details">
                <div>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="marks">
                <h2>
                  {item.marks}
                </h2>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

const EDUCATION_DATA = [
  {
    title: "B.Tech",
    description: "Delhi Technological University",
    marks: <div>
      <Counter number={8} />
      .
      <Counter number={0} />
      <Counter number={5} />
    </div>
  },
  {

    title: "CBSE XII",
    description: "Apeejay School, Pitampura",
    marks: <div>
      <Counter number={9} />
      <Counter number={2} /> %
    </div>
  },
  {
    title: "CBSE X",
    description: "Apeejay School, Pitampura",
    marks: <div>
      <Counter number={9} />
      .
      <Counter number={6} />
    </div>
  },

]