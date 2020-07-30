import React from 'react'
import styled from 'styled-components'

const StyledDateDuration = styled.div`
  color: ${props => props.theme.colors.mediumBlue};
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: 300;
  font-size: 20px;
  display: flex;
`

const StyledDate = styled.p`
  text-transform: uppercase;
  margin-right: 24px;
`

const MigraineRecord = () => {
  return (
    <StyledDateDuration>
      <StyledDate>Monday, 20</StyledDate>
      <p>3 hours 17 minutes</p>
    </StyledDateDuration>
  )
}

export default MigraineRecord
