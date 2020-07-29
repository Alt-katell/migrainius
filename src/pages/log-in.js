import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Layout from '../layouts/Layout'
import Button from '../components/Button'

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`

const StyledBackground = styled.div`
  width: 300px;
  background: ${props => props.theme.colors.darkBlue};
  padding: 80px 40px;
  border-radius: 15px;
  margin: 0 auto;
`

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
    margin-bottom: 0;
  }
`

const StyledP = styled.p`
  font-style: italic;
  color: ${props => props.theme.colors.darkGrey};
  font-size: 14px;
  text-align: center;

  & a {
    color: ${props => props.theme.colors.darkGrey};
  }
`

const logIn = () => {
  return (
    <Layout>
      <StyledBackground>
        <StyledForm>
          <StyledInput type="email" name="email" placeholder="Email" required />
          <StyledInput type="password" name="password" placeholder="Password" required />
          <StyledP style={{alignSelf: "flex-start"}}>Forgot your password?</StyledP>
          <Button><FontAwesomeIcon icon={faPaperPlane} />Log in</Button>
        </StyledForm>
        <StyledP>Don't have an account yet? <Link to="/sign-up/">Sign up</Link></StyledP>
      </StyledBackground>
    </Layout>
  )
}

export default logIn

