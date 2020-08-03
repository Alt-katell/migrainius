import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

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
`

const Account = () => {
  return (
    <Layout>
      <StyledBackground>
        <StyledForm>
          <StyledInput type="text" name="name" placeholder="Name" required />
          <StyledInput type="email" name="email" placeholder="Email" required />
          <Button background="orange" hoverBackground="transparent"><FontAwesomeIcon icon={faCheck} />Save changes</Button>
        </StyledForm>
      </StyledBackground>
    </Layout>
  )
}

export default Account
