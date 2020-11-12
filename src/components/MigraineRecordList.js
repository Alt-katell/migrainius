import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FirebaseContext } from '../components/Firebase'

import MigraineRecord from '../components/MigraineRecord'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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

const MigraineRecordList = () => {
  const existingRecords = true;

  const {user, firebase} = useContext(FirebaseContext)

  useEffect(() => {
    firebase.getMigraines({userId: user.uid})
  }, [])

  // const recordList = props.data.allMigraine.edges.map(migraine => (
  //   <MigraineRecord
  //     key={migraine.node.id}
  //     startDayNumber={migraine.node.startDayNumber}
  //     startDayDay={migraine.node.startDayDay}
  //     startDayMonth={migraine.node.startDayMonth}
  //     startHour={migraine.node.startHour}
  //     endDayNumber={migraine.node.endDayNumber}
  //     endDayDay={migraine.node.endDayDay}
  //     endDayMonth={migraine.node.endDayMonth}
  //     endHour={migraine.node.endHour}
  //     medicationTaken={migraine.node.medicationTaken}
  //     medicationName={migraine.node.medicationName}
  //     medicationQuantity={migraine.node.medicationQuantity}
  //     medicationEfficiency={migraine.node.medicationEfficiency}
  //     activityAtStart={migraine.node.activityAtStart}
  //     hypoglycemic={migraine.node.hypoglycemic}
  //     physicalActivity={migraine.node.physicalActivity}
  //     stressed={migraine.node.stressed}
  //     angry={migraine.node.angry}
  //     hoursOfSleep={migraine.node.hoursOfSleep}
  //     minutesOfSleep={migraine.node.minutesOfSleep}
  //     intensity={migraine.node.intensity}/>
  //   )
  // )

  let records = (
    <div>
      <StyledTitle3>RECORDS</StyledTitle3>
      <StyledNoMigraine>You did not record any migraine yet</StyledNoMigraine>
      <StyledNoMigraine><Link to="/new-migraine/"><FontAwesomeIcon icon={faPlus} style={{marginRight: "8px"}} /> Record a new migraine now</Link></StyledNoMigraine>
    </div>
  )

  // if (existingRecords) {
  //   records = (
  //     <div>
  //       <StyledTitle3>RECORDS</StyledTitle3>
  //       {recordList}
  //     </div>
  //   )
  // }

  return (
    <div>
      {records}
    </div>

  )
}

export default MigraineRecordList
