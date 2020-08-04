import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => props.background === "transparent" ? "transparent" : props.theme.colors[props.background]};
  border: 1px solid ${props => props.theme.colors.orange};
  width: 220px;
  padding: 14px 14px;
  border-radius: 32px;
  align-self: center;
  color: ${props => props.theme.colors.lightGrey};
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 20px;
  cursor: pointer;

  & a {
    color: ${props => props.theme.colors.lightGrey};
    text-decoration: none;
  }

  &:hover {
    background: ${props => props.hoverBackground === "transparent" ? "transparent" : props.theme.colors[props.hoverBackground]};
    border: 1px solid ${props => props.theme.colors.orange};
  }

  & svg {
    margin-right: 20px;
  }
`

const Button = ({children, background, hoverBackground}) => {
  return (
    <StyledButton background={background} hoverBackground={hoverBackground}>
      {children}
    </StyledButton>
  )
}

export default Button
