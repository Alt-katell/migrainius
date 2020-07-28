import React from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Theme from './Theme'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
  body {
    background: #121327;
    margin: 0;
    font-family: "Montserrat"
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
        <Navbar />
        {children}
        <Footer />
      </Theme>
      </Container>
    </div>
  )
}
