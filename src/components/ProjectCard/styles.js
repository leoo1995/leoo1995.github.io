import styled from "styled-components"

export const StyledCard = styled.div`
  /* width: calc(100% - 40px); */
  max-width: 400px;
  margin: auto;
  background: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  position: relative;
  box-sizing: border-box;
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); */
  color: rgba(227, 205, 250, 1);

  /* gap: 20px; */

  img {
    border-radius: 10px 10px 0px 0px;
    cursor: pointer;
    max-height: 300px;
    width: 100%;
    /* & + .links {
      display: none;
    } */
    /* &:hover + .links,
    &:hover + .links:hover {
      background-color: rgba(0, 0, 0, 0.5);
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 5;
    } */
  }
  .links {
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    gap: 10px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .technologies {
    display: flex;
    /* justify-content: space-between; */
    gap: 10px;
    span {
      padding: 0.2em;
      border-radius: 5px;
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.secondary};
    }
  }
`
