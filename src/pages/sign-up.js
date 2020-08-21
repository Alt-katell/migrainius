import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'

import { FirebaseContext } from '../components/Firebase'

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

  & a {
    color: ${props => props.theme.colors.darkGrey};
  }
`

const SignUp = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  const {firebase} = useContext(FirebaseContext)

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

    if (formValues.password === formValues.confirmPassword) {
      firebase.signup({
        email: formValues.email,
        password: formValues.password,
      }).then(() => navigate("/dashboard/"))
    }
  }

  return (
    <div>
      <AccountForm submitted={submitHandler}>
          <AccountFormInput type="text" name="name" placeholder="Name" changed={changeHandler} value={formValues.name} />
          <AccountFormInput type="email" name="email" placeholder="Email" changed={changeHandler} value={formValues.email} />
          <AccountFormInput type="password" name="password" placeholder="Password" changed={changeHandler} value={formValues.password} />
          <AccountFormInput type="password" name="confirmPassword" placeholder="Confirm password" changed={changeHandler} value={formValues.confirmPassword} />
          <Button background="orange" hoverBackground="transparent"><FontAwesomeIcon icon={faPaperPlane} />Sign up</Button>
        <StyledP>Already have an account? <Link to="/log-in/">Log in</Link></StyledP>
      </AccountForm>
    </div>
  )
}

export default SignUp
