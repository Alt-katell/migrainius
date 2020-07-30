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
    margin-bottom: 30px;
  }
`

const resetPassword = () => {
  return (
    <Layout>
      <StyledBackground>
        <StyledForm>
          <StyledInput type="email" name="email" placeholder="Email" required />
          <Button><FontAwesomeIcon icon={faPaperPlane} />Reset</Button>
        </StyledForm>
      </StyledBackground>
    </Layout>
  )
}

export default resetPassword

