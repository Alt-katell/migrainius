import React from 'react'
import styled from 'styled-components'

import Layout from '../layouts/Layout'

const StyledBackground = styled.div`
  width: 300px;
  background: ${props => props.theme.colors.darkBlue};
  padding: 80px 40px;
  border-radius: 15px;
`

const StyledField = styled.div`
  margin-bottom: 40px;
`

const StyledLabel = styled.label`
  display: none;
`

const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid ${props => props.theme.colors.lightGrey};
  padding-bottom: 0 0 5px 0;
  background: ${props => props.theme.colors.darkBlue};
  outline: none;
  color: ${props => props.theme.colors.lightGrey};
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: 300;
  font-size: 16px;
  width: 100%;

  &::placeholder {
    color: ${props => props.theme.colors.lightGrey};
  }
`

const signUp = () => {
  return (
    <Layout>
      <StyledBackground>
        <form>
          <StyledField>
            <StyledLabel for="name"></StyledLabel>
            <StyledInput type="text" name="name" placeholder="Name" required />
          </StyledField>

          <StyledField>
            <StyledLabel for="email"></StyledLabel>
            <StyledInput type="email" name="email" placeholder="Email" required />
          </StyledField>

          <StyledField>
            <StyledLabel for="password"></StyledLabel>
            <StyledInput type="password" name="password" placeholder="Password" required />
          </StyledField>
        </form>
      </StyledBackground>
    </Layout>
  )
}

export default signUp
