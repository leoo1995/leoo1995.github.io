import styled from "styled-components"

export const ProjectsWrapper = styled.div`
  width: calc(100% - 40px);
  max-width: 1366px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  /* display: grid;
  align-items: start;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); */
  gap: 10px;

  #portfolio {
    /* background: red; */
    text-align: center;
    /* grid-column: 1/-1; */
    /* width: 100%; */
    flex-basis: 100%;
    /* flex-grow: 3; */
    flex-shrink: 0;
    justify-self: center;
    scroll-behavior: smooth;
  }
  /* .card {
    flex-grow: 1;
  } */
`
