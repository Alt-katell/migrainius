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

  & a {
    color: ${props => props.theme.colors.darkGrey};
  }
`

const SignUp = () => {
  return (
    <Layout>
      <AccountForm>
          <AccountFormInput type="text" name="name" placeholder="Name" />
          <AccountFormInput type="email" name="email" placeholder="Email" />
          <AccountFormInput type="password" name="password" placeholder="Password" />
          <Button background="orange" hoverBackground="transparent"><FontAwesomeIcon icon={faPaperPlane} />Sign up</Button>
        <StyledP>Already have an account? <Link to="/log-in/">Log in</Link></StyledP>
      </AccountForm>
    </Layout>
  )
}

export default SignUp
