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
    <div>
      <StyledDateDuration>
        <StyledDate>Monday, 20</StyledDate>
        <p>3 hours 17 minutes</p>
      </StyledDateDuration>
      <table>
        <thead>
          <tr>
            <th>Start</th>
            <th>End</th>
            <th>Medication</th>
            <th>Medication efficiency</th>
            <th>Activity when started</th>
            <th>Hypoglycemia</th>
            <th>Stress</th>
            <th>Anger</th>
            <th>Sport or yoga</th>
            <th>Hours of sleep</th>
            <th>Intensity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              20<br/>
              Monday<br/>
              17:00
            </td>
            <td>
              20<br/>
              Monday<br/>
              20:17
            </td>
            <td>
              Yes<br/>
              1 Ketum
            </td>
            <td>Yes</td>
            <td>TV</td>
            <td>No</td>
            <td>Yes</td>
            <td>No</td>
            <td>Yoga</td>
            <td>
              7 hours<br/>
              30 minutes
            </td>
            <td>7/10</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default MigraineRecord
