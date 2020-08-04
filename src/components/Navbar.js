import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

import logo from './logo.svg'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.colors.green};
  margin-left: 24px;
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 6px;

  &.active {
    border-bottom: 4px solid ${props => props.theme.colors.green};
  }
`

const StyledLogo = styled.img`
  width: 128px;
  height: auto;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 8px;
`

const Navbar = () => {
  return (
    <StyledHeader>
      <Link to="/"><StyledLogo src={logo} alt="Migrainius Logo"/></Link>
      <nav>
        <StyledUl>
          <li>
            <StyledLink to="/" activeClassName="active">About</StyledLink>
          </li>
          <li>
            <StyledLink to="/sign-up/" activeClassName="active">Sign up</StyledLink>
          </li>
          <li>
            <StyledLink to="/log-in/" activeClassName="active">Log in</StyledLink>
          </li>
          <li>
            <StyledLink to="/dashboard/" activeClassName="active">Dashboard</StyledLink>
          </li>
          <li>
            <StyledLink to="/account/" activeClassName="active">Account<StyledFontAwesomeIcon icon={faUserAstronaut} /></StyledLink>
          </li>
        </StyledUl>
      </nav>
    </StyledHeader>
  )
}

export default Navbar
