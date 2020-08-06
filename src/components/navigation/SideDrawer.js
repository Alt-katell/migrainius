import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import NavigationItem from './NavigationItem'
import Backdrop from './Backdrop'

import logo from './logo.svg'

const StyledSideDrawer = styled.div`
  position: fixed;
  width: 220px;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 200;
  background: ${props => props.theme.colors.background};
  padding: 32px 16px;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${props => props.show ? "translateX(0)" : "translateX(-100%)"};

  @media (min-width: 1024px) {
    display: none;
  }
`

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  align-items: flex-start;
`

const StyledBurgerIcon = styled(FontAwesomeIcon)`
  color: ${props => props.theme.colors.green};
  font-size: 32px;
  margin-top: 32px;
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 0;
`

const StyledLogo = styled.img`
  width: 128px;
  height: auto;
`

const StyledOffIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
`

const SideDrawer = (props) => {
  return (
    <div>
      <Backdrop show={props.open ? true : false} clicked={props.closed} />
      <StyledHeader>
        <StyledBurgerIcon icon={faBars} onClick={props.drawerToggleClicked}/>
        <Link to="/"><StyledLogo src={logo} alt="Migrainius Logo"/></Link>
        <StyledSideDrawer show={props.open} >
          <nav>
            <StyledUl>
              <NavigationItem link="/">About</NavigationItem>
              <NavigationItem link="/sign-up/">Sign up</NavigationItem>
              <NavigationItem link="/log-in/">Log in</NavigationItem>
              <NavigationItem link="/dashboard/">Dashboard</NavigationItem>
              <NavigationItem link="/account/">Account</NavigationItem>
              <NavigationItem link="/">Log out<StyledOffIcon icon={faPowerOff} /></NavigationItem>
            </StyledUl>
          </nav>
        </StyledSideDrawer>
      </StyledHeader>
    </div>
  )
}

export default SideDrawer
