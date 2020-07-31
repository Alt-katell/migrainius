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

const StyledTable = styled.table`
  margin-bottom: 70px;
`

const StyledHeader = styled.th`
  text-transform: uppercase;
  color: ${props => props.theme.colors.green};
  font-size: 14px;
  padding: 0 12px 4px 12px;
`

const StyledData = styled.td`
  color: ${props => props.theme.colors.lightGrey};
  text-align: center;
  padding: 0 12px 4px 12px;
`

const MigraineRecord = () => {
  return (
    <div>
      <StyledDateDuration>
        <StyledDate>Monday, 20</StyledDate>
        <p>3 hours 17 minutes</p>
      </StyledDateDuration>
      <StyledTable>
        <thead>
          <tr>
            <StyledHeader>Start</StyledHeader>
            <StyledHeader>End</StyledHeader>
            <StyledHeader>Medication</StyledHeader>
            <StyledHeader>Medication efficiency</StyledHeader>
            <StyledHeader>Activity when started</StyledHeader>
            <StyledHeader>Hypoglycemia</StyledHeader>
            <StyledHeader>Stress</StyledHeader>
            <StyledHeader>Anger</StyledHeader>
            <StyledHeader>Sport or yoga</StyledHeader>
            <StyledHeader>Hours of sleep</StyledHeader>
            <StyledHeader>Intensity</StyledHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <StyledData>
              20<br/>
              Monday<br/>
              17:00
            </StyledData>
            <StyledData>
              20<br/>
              Monday<br/>
              20:17
            </StyledData>
            <StyledData>
              Yes<br/>
              1 Ketum
            </StyledData>
            <StyledData>Yes</StyledData>
            <StyledData>TV</StyledData>
            <StyledData>No</StyledData>
            <StyledData>Yes</StyledData>
            <StyledData>No</StyledData>
            <StyledData>Yoga</StyledData>
            <StyledData>
              7 hours<br/>
              30 minutes
            </StyledData>
            <StyledData>7/10</StyledData>
          </tr>
        </tbody>
      </StyledTable>
    </div>
  )
}

export default MigraineRecord
