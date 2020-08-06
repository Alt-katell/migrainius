import React from 'react'
import styled from 'styled-components'

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

  @media (max-width: 1024px) {
    width: 250px;
    padding: 60px 20px;
  }
`

const AccountForm = ({children}) => {
  return (
    <StyledBackground>
      <StyledForm>
        {children}
      </StyledForm>
    </StyledBackground>
  )
}

export default AccountForm
