import styled, { keyframes } from "styled-components"

const media = {
  tablet: "@media (min-width: 768px)",
  desktop: "media (min-width: 1024px)"
}

export const Profile = styled.section`
  width: calc(100% - 40px);
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  margin: 0 auto;
  max-width: 1366px;
  /* gap: 10px; */
  /* background-color: red; */
  ${media.tablet} {
    flex-direction: row;
  }
  img {
    width: 100%;
    /* height: 280px; */
    ${media.tablet} {
      width: 50%;
      height: unset;
    }
  }
  p {
    margin-top: 30px;
    position: relative;
    font-size: 14px;
    width: 100%;
    background-color: transparent;
    z-index: 0;
    text-align: center;
    ${media.tablet} {
      width: 50%;
      height: unset;
    }
    ::after {
      content: "";
      display: block;
      position: absolute;
      background: ${({ theme }) => theme.primary};
      border-radius: 60%;
      width: 100%;
      height: 130%;
      top: 0;
      transform: translateY(-12%);
      z-index: -1;
      /* border: 1px solid red; */
    }
  }

  .quotes {
    color: ${({ theme }) => theme.secondary};
    opacity: 50%;
  }

  .social-networks {
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 200px;
    box-sizing: border-box;
    margin: auto;
    a {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    img {
      height: 40px;
      max-width: 50px;
      min-width: 40px;
      display: inline;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  }
`
