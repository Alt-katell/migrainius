import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import { FirebaseContext } from '../components/Firebase'

import Button from '../components/Button'
import MigraineRecordList from '../components/MigraineRecordList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const StyledTitle1 = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.colors.mediumBlue};
`

const StyledNewCurrentMigraine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    flex-direction: column;

    & div {
      margin-top: 30px;
    }
  }
`

const StyledCurrentMigraine = styled.div`
  background: ${props => props.theme.colors.darkBlue};
  padding: 8px 26px;
  width: 600px;
  border-radius: 15px;
  color: ${props => props.theme.colors.lightGrey};

  & h3 {
    font-family: ${props => props.theme.fonts.roboto};
    font-weight: 300;
    font-size: 26px;
  }

  @media (max-width: 1024px) {
    width: 300px;
  }
`

const Dashboard = (props) => {
  const {user, firebase} = useContext(FirebaseContext)

  return (
    <div>
      <StyledTitle1>DASHBOARD</StyledTitle1>
      <StyledNewCurrentMigraine>
        <Link to="/new-migraine/"><Button background="transparent" hoverBackground="orange"><FontAwesomeIcon icon={faPlus} />New migraine</Button></Link>
        <StyledCurrentMigraine>
          <h3>CURRENT MIGRAINE</h3>
          <p>No current migraine</p>
        </StyledCurrentMigraine>
      </StyledNewCurrentMigraine>
      {!!firebase && <MigraineRecordList />}
    </div>
  )
}

// export const query = graphql`
//   {
//     allMigraine {
//       edges {
//         node {
//           activityAtStart
//           angry
//           endDayDay
//           endDayMonth
//           endHour
//           endDayNumber
//           hoursOfSleep
//           hypoglycemic
//           id
//           intensity
//           medicationEfficiency
//           medicationName
//           medicationQuantity
//           medicationTaken
//           physicalActivity
//           startDayDay
//           startDayMonth
//           startHour
//           startDayNumber
//           stressed
//           minutesOfSleep
//         }
//       }
//     }
//   }
// `

export default Dashboard
