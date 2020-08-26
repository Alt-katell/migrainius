import React, { useState, useContext } from 'react'

import { navigate } from 'gatsby'

import { FirebaseContext } from '../components/Firebase'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Button from '../components/Button'
import AccountForm from '../components/account-forms/AccountForm'
import AccountFormInput from '../components/account-forms/AccountFormInput'
import ErrorMessage from '../components/ErrorMessage'

const ResetPassword = () => {
  const [formValues, setFormValues] = useState({
    email: "",
  })

  const [errorMessage, setErrorMessage] = useState("")

  const {firebase} = useContext(FirebaseContext)

  const changeHandler = (event) => {
    setErrorMessage(false)
    const updatedFormValues = {
      ...formValues
    }

    const {name, value} = event.target
    updatedFormValues[name] = value
    setFormValues(updatedFormValues)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    firebase.resetPassword({
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password,
    })
    .then(() => navigate("/log-in/"))
    .catch(error => setErrorMessage(error.message))
  }

  return (
    <div>
      <AccountForm submitted={submitHandler}>
        <AccountFormInput
          type="email"
          name="email"
          placeholder="Email"
          changed={changeHandler}
          value={formValues.email}/>
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        <Button background="orange" hoverBackground="transparent"><FontAwesomeIcon icon={faPaperPlane} />Reset</Button>
        </AccountForm>
    </div>
  )
}

export default ResetPassword

