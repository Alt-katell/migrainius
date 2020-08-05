import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

import NavigationItem from './NavigationItem'
import Backdrop from './Backdrop'

import logo from './logo.svg'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  flex-direction: row-reverse;
  align-items: flex-start;

  @media (min-width: 1024px) {
    display: none;
  }
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

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
`

const SideDrawer = (props) => {
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed}/>
      <StyledHeader>
        <Link to="/"><StyledLogo src={logo} alt="Migrainius Logo"/></Link>
        <nav>
          <StyledUl>
            <NavigationItem link="/">About</NavigationItem>
            <NavigationItem link="/sign-up/">Sign up</NavigationItem>
            <NavigationItem link="/log-in/">Log in</NavigationItem>
            <NavigationItem link="/dashboard/">Dashboard</NavigationItem>
            <NavigationItem link="/account/">Account<StyledFontAwesomeIcon icon={faUserAstronaut} /></NavigationItem>
          </StyledUl>
        </nav>
      </StyledHeader>
    </div>

  )
}

export default SideDrawer
