import styled from "styled-components"
const StyledButton = styled.button`
  background: ${props =>
    props.primary ? props.theme.secondary : props.theme.primary};
  color: ${({ primary, theme }) => (primary ? theme.primary : theme.secondary)};
  font-size: 18px;
  border-radius: 10px;
  padding: 0.47em 1.33em;
  max-width: ${({ width }) => (width ? width : "150px")};
  min-height: 2.22em;
  text-align: center;
  border: none;
  display: grid;
  place-content: center;
  font-weight: 700;
  box-sizing: border-box;
  width: ${({ width }) => width};
`
const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
