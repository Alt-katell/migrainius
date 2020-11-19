import React, { useEffect, useContext, useState } from 'react'
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

  const {user, firebase} = useContext(FirebaseContext);

  const [migraineList, setMigraineList] = useState([]);

  useEffect(() => {
    firebase.getMigraines(user.uid)
      .then(querySnapshot => {
        const tempList = querySnapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() }
        })
        setMigraineList(tempList)
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      })
  }, []);

  const recordList = migraineList.map(migraine => (
    <MigraineRecord
      key={migraine.id}
      startDayNumber={migraine.startDayNumber}
      startDayDay={migraine.startDayDay}
      startDayMonth={migraine.startDayMonth}
      startHour={migraine.startHour}
      endDayNumber={migraine.endDayNumber}
      endDayDay={migraine.endDayDay}
      endDayMonth={migraine.endDayMonth}
      endHour={migraine.endHour}
      medicationTaken={migraine.medicationTaken}
      medicationName={migraine.medicationName}
      medicationQuantity={migraine.medicationQuantity}
      medicationEfficiency={migraine.medicationEfficiency}
      activityAtStart={migraine.activityAtStart}
      hypoglycemic={migraine.hypoglycemic}
      physicalActivity={migraine.physicalActivity}
      stressed={migraine.stressed}
      angry={migraine.angry}
      hoursOfSleep={migraine.hoursOfSleep}
      minutesOfSleep={migraine.minutesOfSleep}
      intensity={migraine.intensity}/>
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
    <div>
      {records}
    </div>

  )
}

export default MigraineRecordList
