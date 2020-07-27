import React from "react"

import { createGlobalStyle } from 'styled-components'

import { Container } from './Container'
import Navbar from '../components/Navbar'

const GlobalStyle = createGlobalStyle`
  body {
    background: #121327;
  }
`

export default function Layout({children}) {
  return (
    <div>
      <GlobalStyle/>
      <Navbar/>
      <Container>
        {children}
      </Container>
    </div>
  )
}
