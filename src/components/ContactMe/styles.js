import styled from "styled-components"
export const Form = styled.div`
  #contact-me {
    scroll-behavior: smooth;
  }
  width: calc(100% - 40px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    margin: auto;
    display: flex;
    padding-bottom: 4rem;
    flex-direction: column;
    width: 100%;
    max-width: 700px;
    input {
      margin-bottom: 16px;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 1px solid ${({ theme }) => theme.secondary};
      padding: 0.5em;
      /* box-sizing: border-box; */
    }
    textarea {
      background: transparent;
      resize: none;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.secondary};
      margin-bottom: 16px;
    }
  }
`
