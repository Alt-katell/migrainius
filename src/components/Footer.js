import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.theme.colors.darkGrey};
  margin-top: 200px;

  @media (max-width: 1024px) {
    margin-top: 100px;
  }

  & p {
    margin: 0;
    text-align: center;
  }

  & p:first-child {
    margin: 0 0 32px 0;
  }
`

const StyledUl = styled.ul`
  list-style: none;
  display: flex;
  text-decoration: none;
  padding: 0;
`

const StyledA = styled.a`
  margin: 0 16px;
  color: ${props => props.theme.colors.darkGrey};
  font-size: 24px;

  &:hover{
    color: ${props => props.theme.colors.green}
  }
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p><StyledFontAwesomeIcon icon={faUserAstronaut} />Hi, I'm Katell Goaër and I developed this demo app</p>
      <p>Contact me</p>
      <StyledUl>
        <li><StyledA href="https://www.linkedin.com/in/katellgoaer/"><FontAwesomeIcon icon={faLinkedinIn} /></StyledA></li>
        <li><StyledA href="https://github.com/Alt-katell/migrainius"><FontAwesomeIcon icon={faGithubAlt} /></StyledA></li>
        <li><StyledA href="https://alt-katell.github.io/"><FontAwesomeIcon icon={faUser} /></StyledA></li>
      </StyledUl>
    </StyledFooter>
  )
}

export default Footer
