import React from 'react'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

import Layout from '../layouts/Layout'
import Button from '../components/Button'
import AccountForm from '../components/account-forms/AccountForm'
import AccountFormInput from '../components/account-forms/AccountFormInput'

const ResetPassword = () => {
  return (
    <Layout>
      <AccountForm>
        <AccountFormInput type="email" name="email" placeholder="Email"/>
        <Button background="orange" hoverBackground="transparent"><FontAwesomeIcon icon={faPaperPlane} />Reset</Button>
        </AccountForm>
    </Layout>
  )
}

export default ResetPassword

