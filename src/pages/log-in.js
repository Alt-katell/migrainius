import React, { useState } from 'react'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'

import { useAuth } from '../components/Firebase'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

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

const LogIn = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  })

  const {firebase} = useAuth()

  const changeHandler = (event) => {
    const updatedFormValues = {
      ...formValues
    }

    const {name, value} = event.target
    updatedFormValues[name] = value
    setFormValues(updatedFormValues)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    firebase.login({email: formValues.email, password: formValues.password}).then(() => navigate("/dashboard/"))
  }

  return (
    <div>
      <AccountForm submitted={submitHandler}>
          <AccountFormInput type="email" name="email" placeholder="Email" changed={changeHandler} />
          <AccountFormInput type="password" name="password" placeholder="Password" marginBottom="0" changed={changeHandler} />
          <StyledP style={{alignSelf: "flex-start"}}><Link to="/reset-password/">Forgot your password?</Link></StyledP>
          <Button background="orange" hoverBackground="transparent"><FontAwesomeIcon icon={faPaperPlane} />Log in</Button>
        <StyledP>Don't have an account yet? <Link to="/sign-up/">Sign up</Link></StyledP>
      </AccountForm>
    </div>
  )
}

export default LogIn

