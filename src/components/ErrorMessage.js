import React from 'react'
import styled from 'styled-components'

const StyledErrorMessage = styled.p`
  color: ${props => props.theme.colors.orange};
  text-align: center;
`

const ErrorMessage = ({children}) => {
  return (
    <StyledErrorMessage>{children}</StyledErrorMessage>
  )
}

export default ErrorMessage
