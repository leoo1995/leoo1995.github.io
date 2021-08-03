import { StyledCard } from "./styles"
const ProjectCard = props => {
  return (
    <StyledCard {...props}>
      <img src={props.img} alt={props.title} />
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
