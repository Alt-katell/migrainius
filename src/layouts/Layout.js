import React, { useState } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Theme from './Theme'

import Navbar from '../components/navigation/Navbar'
import SideDrawer from '../components/navigation/SideDrawer'
import Footer from '../components/Footer'

const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
  }

  body {
    background: #121327;
    margin: 0;
    font-family: "Montserrat";
  }
`

const Container = styled.div`
  margin: 0 40px;

  @media (max-width: 1024px) {
    margin: 0 12px;
  }
`

const Layout = ({children, data}) => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <div>
      <Container>
      <Theme>
        <GlobalStyle/>
        <Navbar />
        <SideDrawer
          open={sideDrawerIsVisible}
          closed={sideDrawerClosedHandler}/>
        {children}
        <Footer />
      </Theme>
      </Container>
    </div>
  )
}

export default Layout
