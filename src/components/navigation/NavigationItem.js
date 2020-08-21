import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const StyledLi = styled.li`
  @media (max-width: 1024px) {
    margin-bottom: 32px;
  }
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

  @media (max-width: 1024px) {
    margin-left: 0;
  }
`

const NavigationItem = ({link, children, clicked}) => {
  return (
    <StyledLi>
      <StyledLink
        to={link}
        activeClassName="active"
        onClick={clicked}>
        {children}
      </StyledLink>
    </StyledLi>
  )
}

export default NavigationItem
