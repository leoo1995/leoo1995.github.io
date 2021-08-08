import photo from "../../assets/photo.png"
import githubIcon from "../../assets/icons/github-icon.svg"
import linkedinIcon from "../../assets/icons/logos_linkedin-icon.svg"
import mailIcon from "../../assets/icons/Vectormail.svg"
import { Profile } from "./styles"
//icons
import { QuoteAltLeft } from "@styled-icons/boxicons-solid/QuoteAltLeft"
import { QuoteAltRight } from "@styled-icons/boxicons-solid/QuoteAltRight"

const AboutMe = props => {
  return (
    <Profile {...props}>
      <img src={photo} alt="Luis Ortiz" id="about" />
      <p>
        <QuoteAltLeft size="40px" className="quotes" />I like programming due to
        is an useful art wich I can express with code my ideas especially in the
        front-end world. <br />
        In the other hand, I have the passion for the videogames and technology.
        <QuoteAltRight size="40px" className="quotes" />
        <span className="social-networks">
          <a
            target="_blank"
            href="https://github.com/leoo1995"
            rel="noreferrer"
          >
            <img src={githubIcon} alt="github link" />
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/luis-eduardo-ortiz/"
          >
            <img src={linkedinIcon} alt="linkedin link" />
          </a>
          <a href="#contact-me">
            <img src={mailIcon} alt="contact link" />
          </a>
        </span>
      </p>
    </Profile>
  )
}

export default AboutMe
