import React, { useState } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Theme from './Theme'

import { FirebaseContext, useAuth } from '../components/Firebase'

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
  const {user, firebase, loading} = useAuth()

  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  };

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  };

  return (
    <FirebaseContext.Provider value={{user, firebase, loading}}>
      <Container>
      <Theme>
        <GlobalStyle/>
        <Navbar />
        <SideDrawer
          open={sideDrawerIsVisible}
          closed={sideDrawerClosedHandler}
          drawerToggleClicked={sideDrawerToggleHandler} />
          {children}
        <Footer />
      </Theme>
      </Container>
    </FirebaseContext.Provider>
  )
}

export default Layout
