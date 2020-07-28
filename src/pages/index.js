import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../layouts/Layout'

const StyledBanner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 60px;
`

const StyledTextPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  margin-right: 50px;
  color: ${props => props.theme.colors.mediumBlue};

  & p:first-child {
    font-size: 40px;
    font-family: ${props => props.theme.fonts.roboto};
    font-weight: 300;
    margin-bottom: 10px;
  }

  & p:last-child {
    font-size: 20px;
    max-width: 450px;
  }
`

const StyledHomeButton = styled.button`
  background: ${props => props.theme.colors.darkBlue};
  border: 1px solid ${props => props.theme.colors.darkBlue};
  width: 200px;
  padding: 18px 14px;
  border-radius: 32px;
  margin-top: 30px;
  align-self: center;

  &:hover {
    background: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.darkBlue};
  }

  & a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    font-family: ${props => props.theme.fonts.montserrat};
    font-weight: bold;
  }


`

const StyledAppImg = styled.img`
  width: 450px;
  height: auto;
  border-radius: 160px;
`

export default function Home() {
  return (
    <Layout>
      <StyledBanner>
        <StyledTextPart>
          <div className="text">
            <p>IT’S TIME TO FIGHT BACK!</p>
            <p>Start recording your migraines to better control them</p>
          </div>
          <StyledHomeButton><Link to="">Start Now</Link></StyledHomeButton>
        </StyledTextPart>

        <div className="img-part">
          <StyledAppImg src="/migrainius_app.jpeg" alt="Migrainius App" />
        </div>
      </StyledBanner>
    </Layout>
  )
}
