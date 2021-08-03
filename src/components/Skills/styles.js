import styled from "styled-components"
export const Wrapper = styled.div`
  width: calc(100% - 40px);
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1366px;

  #skills {
    /* grid-column: 1/-1; */
    justify-items: center;
    margin: unset auto;
    display: inline-block;
    /* background: red; */
  }
  .techs {
    color: white;
    width: 100%;
    padding: 28px;
    box-sizing: border-box;
    border-radius: 10px;
    display: flex;
    background-color: ${({ theme }) => theme.secondary};
    flex-wrap: wrap;
    /* grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); */
    justify-content: space-evenly;
  }
  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  svg {
    height: 80px;
  }
`
