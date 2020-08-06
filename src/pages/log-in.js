import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Layout from '../layouts/Layout'
import Button from '../components/Button'
import AccountForm from '../components/account-forms/AccountForm'
import AccountFormInput from '../components/account-forms/AccountFormInput'

const StyledP = styled.p`
  font-style: italic;
  color: ${props => props.theme.colors.darkGrey};
  font-size: 14px;
  text-align: center;
  margin-bottom: 30px;

  & a {
    color: ${props => props.theme.colors.darkGrey};
  }
`

const logIn = () => {
  return (
    <Layout>
      <AccountForm>
          <AccountFormInput type="email" name="email" placeholder="Email" />
          <AccountFormInput type="password" name="password" placeholder="Password" marginBottom="0" />
          <StyledP style={{alignSelf: "flex-start"}}><Link to="/reset-password/">Forgot your password?</Link></StyledP>
          <Button background="orange" hoverBackground="transparent"><FontAwesomeIcon icon={faPaperPlane} />Log in</Button>
        <StyledP>Don't have an account yet? <Link to="/sign-up/">Sign up</Link></StyledP>
      </AccountForm>
    </Layout>
  )
}

export default logIn

