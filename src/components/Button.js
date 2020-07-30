import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background: ${props => props.theme.colors.orange};
  border: 1px solid ${props => props.theme.colors.orange};
  width: 220px;
  padding: 14px 14px;
  border-radius: 32px;
  align-self: center;
  color: white;
  font-family: ${props => props.theme.fonts.montserrat};
  font-size: 20px;

  &:hover {
    background: transparent;
    border: 1px solid ${props => props.theme.colors.orange};
  }

  & svg {
    margin-right: 20px;
  }
`

const Button = ({children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

export default Button
