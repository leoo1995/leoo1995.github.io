import styled from "styled-components"

export const ProjectsWrapper = styled.div`
  width: calc(100% - 40px);
  max-width: 1366px;
  margin: 40px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

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
