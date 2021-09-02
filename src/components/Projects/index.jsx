import ProjectCard from "../ProjectCard"
import gifos from "../../assets/projects/gifos.jpeg"
import markdownNotes from "../../assets/projects/markdown-notes.jpeg"
import rewardsStore from "../../assets/projects/rewards-store.jpeg"
import { ProjectsWrapper } from "./styles"
const projectList = [
  {
    img: markdownNotes,
    title: "Markdown Notes",
    description: `CRUD system of markdown notes that lets users save their respective notes and see them in HTML.`,
    technologies: ["ReactJs", "Styled components", "Firebase"],
    links: {
      domain: "https://markdown-notes-65f6e.web.app/dashboard",
      github: "https://github.com/leoo1995/markdown-notes"
    }
  },
  {
    img: gifos,
    title: "GIFOs",
    description: `GIF search with the GHIPHY search engine.`,
    technologies: ["ReactJs", "Sass"],
    links: {
      domain: "https://leoo1995.github.io/GIFOs/",
      github: "https://github.com/leoo1995/GIFOs"
    }
  },
  {
    img: rewardsStore,
    title: "Rewards Store",
    description: `This is the Aerolab Challenge, a store where the user can redeem products with points.`,
    technologies: ["ReactJs", "Styled components"],
    links: {
      domain: "https://leoo1995.github.io/rewards-store/",
      github: "https://github.com/leoo1995/GIFOs"
    }
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
