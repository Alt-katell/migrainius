import React, { useState } from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const StyledDateDuration = styled.div`
  color: ${props => props.theme.colors.mediumBlue};
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: bold;
  font-size: 20px;
  display: flex;
  cursor: pointer;
`

const StyledChevronIcon = styled(FontAwesomeIcon)`
  margin-left: 16px;
  transition: transform 0.6s ease;
  ${props => props.active === "isActive" && `
    transform: rotate(180deg);
  `}
`

const StyledDate = styled.p`
  text-transform: uppercase;
  margin-right: 24px;
`

const StyledTableContainer = styled.div`
  margin-bottom: 40px;
  display: none;
  ${props => props.active === "isActive" && `
    display: block;
  `}
`

const StyledInnerTable = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const StyledHeaderDataGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: row;
    margin-bottom: 32px;
    align-items: start;
  }
`

const StyledHeader = styled.p`
  text-transform: uppercase;
  color: ${props => props.theme.colors.green};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  height: 30px;

  @media (max-width: 1024px) {
    width: 200px;
    text-align: left;
    margin: 0;
  }
`

const StyledData = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  text-align: center;

  @media (max-width: 1024px) {
    text-align: left;
    margin: 0;
  }
`

const MigraineRecord = (props) => {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive(!active)
  };

  let durationTotalMinutes;
  const startTime = props.startHour.split(':');
  const startMinutes = (startTime[0] * 60) + (startTime[1] * 1);
  const endTime = props.endHour.split(':');
  const endMinutes = (endTime[0] * 60) + (endTime[1] * 1);

  if (props.startDayNumber === props.endDayNumber) {
    durationTotalMinutes = endMinutes - startMinutes;
  } else if ((props.startDayNumber === props.endDayNumber + 1) || (props.startDayNumber === (31 || 30) && props.endDayNumber === 1)) {
    durationTotalMinutes = endMinutes - startMinutes + 1440;
  }

  const durationHours = Math.floor(durationTotalMinutes / 60);
  const durationMinutes = durationTotalMinutes - (durationHours * 60);

  return (
    <div>
      <StyledDateDuration onClick={toggleActive}>
        <StyledDate>{props.startDayDay}, {props.startDayNumber}</StyledDate>
        <p>{durationHours} hour{durationHours > 1 ? "s" : ""} {durationMinutes} minute{durationMinutes > 1 ? "s" : ""}<StyledChevronIcon icon={faChevronDown} active={active ? "isActive" : ""} /></p>
      </StyledDateDuration>
      <StyledTableContainer active={active ? "isActive" : ""}>
        <StyledInnerTable>
          <StyledHeaderDataGroup>
            <StyledHeader>Start</StyledHeader>
            <StyledData>{props.startDayNumber}<br/>{props.startDayDay}<br/>{props.startHour}</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>End</StyledHeader>
            <StyledData>{props.endDayNumber}<br/>{props.endDayDay}<br/>{props.endHour}</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Medication</StyledHeader>
            <StyledData>{props.medicationTaken}<br/>{props.medicationQuantity} {props.medicationName}</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Medication<br/>efficiency</StyledHeader>
            <StyledData>{props.medicationEfficiency}</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Activity when<br/>started</StyledHeader>
            <StyledData>{props.activityAtStart}</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Hypoglycemia</StyledHeader>
            <StyledData>{props.hypoglycemic}</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Stress</StyledHeader>
            <StyledData>{props.stressed}</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Anger</StyledHeader>
            <StyledData>{props.angry}</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Sport or<br/>yoga</StyledHeader>
            <StyledData>{props.physicalActivity}</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Hours of<br/>sleep</StyledHeader>
            <StyledData>{props.hoursOfSleep}:{props.minutesOfSleep}</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Intensity</StyledHeader>
            <StyledData>{props.intensity}/10</StyledData>
          </StyledHeaderDataGroup>
        </StyledInnerTable>
      </StyledTableContainer>
    </div>
  )
}

export default MigraineRecord
