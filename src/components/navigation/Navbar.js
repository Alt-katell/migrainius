import React, { useContext } from 'react'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'

import { FirebaseContext} from '../Firebase'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

import NavigationItem from './NavigationItem'

import logo from './logo.svg'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    display: none;
  }
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
`

const StyledLogo = styled.img`
  width: 128px;
  height: auto;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
`

const Navbar = () => {
  const {firebase, user} = useContext(FirebaseContext)

  const logoutHandler = () => {
    firebase.logout().then(() => navigate('/'))
  }

  let navItemList
  if (!!user) {
    navItemList = (
      <StyledUl>
        <NavigationItem link="/">About</NavigationItem>
        <NavigationItem link="/dashboard/">Dashboard</NavigationItem>
        <NavigationItem link="/account/">Account</NavigationItem>
        <NavigationItem link="#" clicked={logoutHandler}>Log out<StyledFontAwesomeIcon icon={faPowerOff} /></NavigationItem>
      </StyledUl>
    )
  } else {
    navItemList = (
      <StyledUl>
        <NavigationItem link="/">About</NavigationItem>
        <NavigationItem link="/sign-up/">Sign up</NavigationItem>
        <NavigationItem link="/log-in/">Log in</NavigationItem>
      </StyledUl>
    )
  }

  return (
    <StyledHeader>
      <Link to="/"><StyledLogo src={logo} alt="Migrainius Logo"/></Link>
      <nav>
        {navItemList}
      </nav>
    </StyledHeader>
  )
}

export default Navbar
