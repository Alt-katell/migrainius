import React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'

import Layout from '../layouts/Layout'
import Button from '../components/Button'
import MigraineRecord from '../components/MigraineRecord'

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

const StyledTitle3 = styled.h3`
  font-size: 26px;
  color: ${props => props.theme.colors.lightGrey};
  font-weight: normal;
  font-family: ${props => props.theme.fonts.roboto};
`

const StyledNoMigraine = styled.h3`
  color: ${props => props.theme.colors.lightGrey};
  font-weight: normal;

  & a {
    color: ${props => props.theme.colors.lightGrey};
  }
`

const Dashboard = (props) => {
  const existingRecords = true;

  const recordList = props.data.allMigraine.edges.map(migraine => (
    <MigraineRecord
      key={migraine.node.id}
      startDayNumber={migraine.node.startDayNumber}
      startDayDay={migraine.node.startDayDay}
      startDayMonth={migraine.node.startDayMonth}
      startHour={migraine.node.startHour}
      endDayNumber={migraine.node.endDayNumber}
      endDayDay={migraine.node.endDayDay}
      endDayMonth={migraine.node.endDayMonth}
      endHour={migraine.node.endHour}
      medicationTaken={migraine.node.medicationTaken}
      medicationName={migraine.node.medicationName}
      medicationQuantity={migraine.node.medicationQuantity}
      medicationEfficiency={migraine.node.medicationEfficiency}
      activityAtStart={migraine.node.activityAtStart}
      hypoglycemic={migraine.node.hypoglycemic}
      physicalActivity={migraine.node.physicalActivity}
      stressed={migraine.node.stressed}
      angry={migraine.node.angry}
      hoursOfSleep={migraine.node.hoursOfSleep}
      minutesOfSleep={migraine.node.minutesOfSleep}
      intensity={migraine.node.intensity}/>
    )
  )

  let records = (
    <div>
      <StyledTitle3>RECORDS</StyledTitle3>
      <StyledNoMigraine>You did not record any migraine yet</StyledNoMigraine>
      <StyledNoMigraine><Link to="/new-migraine/"><FontAwesomeIcon icon={faPlus} style={{marginRight: "8px"}} /> Record a new migraine now</Link></StyledNoMigraine>
    </div>
  )

  if (existingRecords) {
    records = (
      <div>
        <StyledTitle3>RECORDS</StyledTitle3>
        {recordList}
      </div>
    )
  }

  return (
    <Layout>
      <StyledTitle1>DASHBOARD</StyledTitle1>
      <StyledNewCurrentMigraine>
        <Link to="/new-migraine/"><Button background="transparent" hoverBackground="orange"><FontAwesomeIcon icon={faPlus} />New migraine</Button></Link>
        <StyledCurrentMigraine>
          <h3>CURRENT MIGRAINE</h3>
          <p>No current migraine</p>
        </StyledCurrentMigraine>
      </StyledNewCurrentMigraine>

      {records}

    </Layout>
  )
}

export const query = graphql`
  {
    allMigraine {
      edges {
        node {
          activityAtStart
          angry
          endHour
          hoursOfSleep
          hypoglycemic
          id
          intensity
          medicationEfficiency
          medicationName
          medicationQuantity
          medicationTaken
          minutesOfSleep
          physicalActivity
          startHour
          stressed
          endDayDay
          endDayMonth
          endDayNumber
          startDayDay
          startDayMonth
          startDayNumber
        }
      }
    }
  }

`

export default Dashboard
