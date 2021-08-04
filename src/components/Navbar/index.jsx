import { useState } from "react"
import { StyledNavbar } from "./styles.js"
import { Menu } from "@styled-icons/boxicons-regular/Menu"
import { Close } from "@styled-icons/evaicons-solid/Close"
import CV from "../../assets/CV.pdf"
import Button from "../Button"
import logo from "../../assets/logo.svg"
const Navbar = props => {
  const [showBurguerMenu, setShowBurguerMenu] = useState(false)
  const handleClick = () => {
    setShowBurguerMenu(!showBurguerMenu)
  }
  return (
    <StyledNavbar {...props}>
      <div>
        {!showBurguerMenu ? (
          <Menu size="40" className="menu-icon" onClick={handleClick} />
        ) : (
          <Close size="40" className="menu-icon" onClick={handleClick} />
        )}

        <ul className="menu-bar">
          <li>
            <a href="#about">
              <img src={logo} alt="LEO logo" />
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact-me">Contact me</a>
          </li>
        </ul>
        <Button as="a" href={CV} target="_blank" download="CV-Luis Ortiz">
          CURRICULUM
        </Button>
      </div>
      {showBurguerMenu ? (
        <ul className="burguer-menu">
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact-me">Contact me</a>
          </li>
        </ul>
      ) : undefined}
    </StyledNavbar>
  )
}

export default Navbar
