import styled, { keyframes } from "styled-components"

const media = {
  tablet: "@media (min-width: 768px)",
  desktop: "media (min-width: 1024px)"
}
const deployBurgerMenu = keyframes`
from{
  transform: translateX(-100%);

}
to{
  transform: translateX(0);
}

`

export const StyledNavbar = styled.nav`
  z-index: 1;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.primary};
  position: sticky;
  padding: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
  top: 0;
  box-sizing: border-box;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1366px;
  }
  ${media.desktop} {
    padding: 0 100px;
    height: 120px;
  }

  .menu-icon {
    cursor: pointer;
    ${media.tablet} {
      display: none;
    }
  }

  .menu-bar {
    padding: 0;
    img {
      width: 90px;
      height: 40px;
    }
    list-style-type: none;
    display: none;
    min-width: 620px;
    justify-content: space-between;
    a {
      text-decoration: none;
      height: 100%;
      color: #fff;
      display: flex;
      align-items: center;
      font-weight: 700;
      text-transform: uppercase;
      scroll-behavior: smooth;
      :hover {
        color: ${({ theme }) => theme.primary};
      }
    }
    ${media.tablet} {
      display: flex;
    }
  }
  .burguer-menu {
    position: absolute;
    list-style-type: none;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    margin: 0;
    padding: 0;
    top: 100%;
    box-sizing: border-box;
    width: 100%;
    animation: ${deployBurgerMenu} 0.3s ease;

    a {
      display: block;
      text-decoration: none;
      padding: 0.5em;
      text-align: center;
    }
  }
`
