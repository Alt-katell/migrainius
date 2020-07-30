import React from 'react'
import styled from 'styled-components'

import Layout from '../layouts/Layout'
import Button from '../components/Button'

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
`

const Dashboard = () => {
  const existingRecords = false;

  let records = (
    <div>
      <StyledTitle3>RECORDS</StyledTitle3>
      <StyledNoMigraine>You did not record any migraine yet</StyledNoMigraine>
      <StyledNoMigraine><FontAwesomeIcon icon={faPlus} style={{marginRight: "8px"}} /> Record a new migraine now</StyledNoMigraine>
    </div>
  )

  if (existingRecords) {
    records = (
      <div>
        <StyledTitle3>RECORDS</StyledTitle3>
        <p>Write records here</p>
      </div>
    )
  }

  return (
    <Layout>
      <StyledTitle1>DASHBOARD</StyledTitle1>
      <StyledNewCurrentMigraine>
        <Button><FontAwesomeIcon icon={faPlus} />New migraine</Button>
        <StyledCurrentMigraine>
          <h3>CURRENT MIGRAINE</h3>
          <p>No current migraine</p>
        </StyledCurrentMigraine>
      </StyledNewCurrentMigraine>

      {records}

    </Layout>
  )
}

export default Dashboard
