import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import Button from '../components/Button'
import AccountForm from '../components/account-forms/AccountForm'
import AccountFormInput from '../components/account-forms/AccountFormInput'

const Account = () => {
  return (
    <div>
      <AccountForm>
        <AccountFormInput type="text" name="name" placeholder="Name" />
        <AccountFormInput type="email" name="email" placeholder="Email" />
        <Button background="orange" hoverBackground="transparent"><FontAwesomeIcon icon={faCheck} />Save changes</Button>
      </AccountForm>
    </div>
  )
}

export default Account
