import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  padding: 0 0 5px 0;
  background: ${props => props.theme.colors.darkBlue};
  outline: none;
  color: ${props => props.theme.colors.lightGrey};
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: 300;
  font-size: 16px;
  width: 100%;
  margin-bottom: 40px;

  &::placeholder {
    color: ${props => props.theme.colors.darkGrey};
  }

  &:last-of-type {
    margin-bottom: ${props => props.marginBottom === "0" ? "0" : "30px"};
  }
`

const AccountFormInput = ({type, name, placeholder, marginBottom, changed}) => {
  return (
    <StyledInput
      type={type}
      name={name}
      placeholder={placeholder}
      marginBottom={marginBottom}
      required
      onChange={changed} />
  )
}

export default AccountFormInput
