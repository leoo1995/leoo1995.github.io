import ProjectCard from "../ProjectCard"
import gifos from "../../assets/projects/gifos.jpeg"
import markdownNotes from "../../assets/markdown-notes.jpeg"
import rewardsStore from "../../assets/projects/rewards-store.jpeg"
import { ProjectsWrapper } from "./styles"
const projectList = [
  {
    img: markdownNotes,
    title: "Markdown Notes",
    description: `CRUD system of markdown notes that lets users save their respective notes and see them in HTML.`,
    technologies: ["ReactJs", "Styled components", "Firebase"]
  },
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
const Projects = () => {
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
