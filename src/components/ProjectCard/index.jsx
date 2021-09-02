import { useState } from "react"
import { StyledCard } from "./styles"
import { LinkAlt } from "@styled-icons/boxicons-regular/LinkAlt"
import { Github } from "@styled-icons/boxicons-logos/Github"
const ProjectCard = props => {
  const [isHover, setIsHover] = useState(false)
  return (
    <StyledCard {...props}>
      <img
        src={props.img}
        alt={props.title}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      />
      <div
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="links"
        style={isHover ? null : { display: "none" }}
      >
        <a href={props.links.domain} target="_blank">
          <LinkAlt size={80} color="#55FFCC" />
        </a>
        <a href={props.links.github} target="_blank">
          <Github size={80} color="#55FFCC" />
        </a>
      </div>
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="technologies">
          {props.technologies.map((tech, i) => (
            <span key={Date.now() + i}>{tech}</span>
          ))}
        </div>
      </div>
    </StyledCard>
  )
}

export default ProjectCard
