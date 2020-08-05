import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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

const NavigationItem = ({link, children}) => {
  return (
    <li>
      <StyledLink to={link} activeClassName="active">{children}</StyledLink>
    </li>
  )
}

export default NavigationItem
