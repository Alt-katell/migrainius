import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import colors from '../layouts/Layout'

import logo from './logo.svg'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Ul = styled.ul`
  list-style: none;
  display: flex;
  text-decoration: none;
`

const NavLink = styled(Link)`
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

const Logo = styled.img`
  width: 128px;
  height: auto;
`

const Navbar = () => {
  return (
    <Header>
      <Logo src={logo} alt="Migrainius Logo"/>
      <nav>
        <Ul>
          <li>
            <NavLink to="/" activeClassName="active">About</NavLink>
          </li>
          <li>
            <NavLink to="" activeClassName="active">Sign up</NavLink>
          </li>
          <li>
            <NavLink to="" activeClassName="active">Log in</NavLink>
          </li>
        </Ul>
      </nav>
    </Header>
  )
}

export default Navbar
