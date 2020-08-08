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

const MigraineRecord = () => {
  const [active, setActive] = useState(false)

  const toggleActive = () => {
    setActive(!active)
  }

  return (
    <div>
      <StyledDateDuration onClick={toggleActive}>
        <StyledDate>Monday, 20</StyledDate>
        <p>3 hours 17 minutes<StyledChevronIcon icon={faChevronDown} active={active ? "isActive" : ""} /></p>
      </StyledDateDuration>
      <StyledTableContainer active={active ? "isActive" : ""}>
        <StyledInnerTable>
          <StyledHeaderDataGroup>
            <StyledHeader>Start</StyledHeader>
            <StyledData>20<br/>Monday<br/>17:00</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>End</StyledHeader>
            <StyledData>20<br/>Monday<br/>20:17</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Medication</StyledHeader>
            <StyledData>Yes<br/>1 Ketum</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Medication<br/>efficiency</StyledHeader>
            <StyledData>Yes</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Activity when<br/>started</StyledHeader>
            <StyledData>TV</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Hypoglycemia</StyledHeader>
            <StyledData>No</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Stress</StyledHeader>
            <StyledData>Yes</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Anger</StyledHeader>
            <StyledData>No</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Sport or<br/>yoga</StyledHeader>
            <StyledData>Yoga</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Hours of<br/>sleep</StyledHeader>
            <StyledData>7 hours<br/>30 minutes</StyledData>
          </StyledHeaderDataGroup>
          <StyledHeaderDataGroup>
            <StyledHeader>Intensity</StyledHeader>
            <StyledData>7/10</StyledData>
          </StyledHeaderDataGroup>
        </StyledInnerTable>
      </StyledTableContainer>
    </div>
  )
}

export default MigraineRecord
