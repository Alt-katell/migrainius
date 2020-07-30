import React from 'react'
// import styled from 'styled-components'

import Layout from '../layouts/Layout'
import Button from '../components/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
  return (
    <Layout>
      <h1>DASHBOARD</h1>
      <div>
        <Button><FontAwesomeIcon icon={faPlus} />New migraine</Button>
        <div>
          <h3>CURRENT MIGRAINE</h3>
          <p>No current migraine</p>
        </div>
      </div>

      <h3>RECORDS</h3>
      <p>You did not record any migraine yet</p>
      <p><FontAwesomeIcon icon={faPlus} /> Record a new migraine now</p>
    </Layout>
  )
}

export default Dashboard
