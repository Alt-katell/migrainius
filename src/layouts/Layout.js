import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Theme from './Theme'

import Navbar from '../components/Navbar'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,700;1,300&family=Roboto:wght@300;400&display=swap');

  body {
    background: #121327;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`

const Container = styled.div`
  margin: 0 40px;
`

export default function Layout({children}) {
  return (
    <div>
      <Container>
      <Theme>
        <GlobalStyle/>
        <Navbar/>
        {children}
      </Theme>
      </Container>
    </div>
  )
}
