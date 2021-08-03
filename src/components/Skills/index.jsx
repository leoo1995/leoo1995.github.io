import React from "react"
import { Html5 } from "@styled-icons/boxicons-logos/Html5"
import { Css3 } from "@styled-icons/boxicons-logos/Css3"
import { Sass } from "@styled-icons/fa-brands/Sass"
import { ReactLogo } from "@styled-icons/fa-brands/ReactLogo"
import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents"
import { Javascript } from "@styled-icons/boxicons-logos/Javascript"
import { Wrapper } from "./styles"

const Skills = props => {
  return (
    <Wrapper>
      <h2 id="skills">Skills</h2>
      <div className="techs">
        <div className="card">
          <Html5 color="#e34c26" />
          <span>HTML5</span>
        </div>
        <div className="card">
          <Css3 color="#264de4" />
          <span>CSS3</span>
        </div>
        <div className="card">
          <Sass color="#CD6799" />
          <span>Sass</span>
        </div>
        <div className="card">
          <Styledcomponents color="#aaa" />
          <span>Styled components</span>
        </div>
        <div className="card">
          <ReactLogo color="#61DBFB" />
          <span>ReactJs</span>
        </div>
        <div className="card">
          <Javascript color="#F0DB4F" />
          <span>JavaScript</span>
        </div>
      </div>
    </Wrapper>
  )
}

export default Skills
