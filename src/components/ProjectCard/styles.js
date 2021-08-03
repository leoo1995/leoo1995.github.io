import styled from "styled-components"

export const StyledCard = styled.div`
  /* width: calc(100% - 40px); */
  max-width: 400px;
  margin: auto;
  background: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  overflow: hidden;
  padding: 5px;
  /* display: grid; */
  /* grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); */
  color: rgba(227, 205, 250, 1);

  /* gap: 20px; */
  img {
    width: 100%;
    max-height: 300px;
    border-radius: 10px 10px 0px 0px;
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
