import { createGlobalStyle, ThemeProvider } from "styled-components"
import AboutMe from "./components/AboutMe"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import ContactMe from "./components/ContactMe"

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding:0;
    font-family: 'Oxygen', sans-serif;
    
  }
  .App{
    min-height: 100vh;
    background: ${({ theme }) => theme.bgColor};
  }

`
const theme = {
  primary: "#55FFCC",
  secondary: "#54257A",
  bgColor: "rgba(160, 199, 254, 1)"
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Navbar />
        <AboutMe />
        <Projects />
        <Skills />
        <ContactMe />
      </div>
    </ThemeProvider>
  )
}

export default App
