import ProjectCard from "../ProjectCard"
import gifos from "../../assets/projects/gifos.jpeg"
import rewardsStore from "../../assets/projects/rewards-store.jpeg"
import { ProjectsWrapper } from "./styles"
const projectList = [
  {
    img: gifos,
    title: "GIFOs",
    description: `GIF search with the GHIPHY search engine.`,
    technologies: ["ReactJs", "Sass"]
  },
  {
    img: rewardsStore,
    title: "Rewards Store",
    description: `This is the Aerolab Challenge, a store where the user can redeem products with points.`,
    technologies: ["ReactJs", "Styled components"]
  }
]
const Projects = props => {
  return (
    <>
      <ProjectsWrapper>
        <h2 id="portfolio">My latest works</h2>
        {projectList.map((project, i) => (
          <ProjectCard className="card" key={Date.now() + i} {...project} />
        ))}
      </ProjectsWrapper>
    </>
  )
}

export default Projects