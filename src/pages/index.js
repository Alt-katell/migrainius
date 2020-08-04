import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faFistRaised } from '@fortawesome/free-solid-svg-icons'

import Layout from '../layouts/Layout'

const StyledBanner = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 60px 200px 60px;

  & a {
    align-self: center;
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    margin: 0 30px 100px 30px;
    align-items: center;
  }
`

const StyledTextPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
  margin-right: 50px;
  color: ${props => props.theme.colors.mediumBlue};

  @media (max-width: 1024px) {
    margin-right: 0;
  }

  & p:first-child {
    font-size: 40px;
    font-family: ${props => props.theme.fonts.roboto};
    font-weight: 300;
    margin-bottom: 10px;

    @media (max-width: 1024px) {
      text-align: center;
    }
  }

  & p:last-child {
    font-size: 20px;
    max-width: 450px;

    @media (max-width: 1024px) {
      text-align: center;
    }
  }
`

const StyledHomeButton = styled.button`
  background: ${props => props.theme.colors.darkBlue};
  border: 1px solid ${props => props.theme.colors.darkBlue};
  width: 220px;
  padding: 14px 14px;
  border-radius: 32px;
  margin-top: 30px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-family: ${props => props.theme.fonts.montserrat};
  color: white;

  &:hover {
    background: ${props => props.theme.colors.background};
    border: 1px solid ${props => props.theme.colors.darkBlue};
  }
`

const StyledAppImg = styled.img`
  width: 450px;
  height: auto;
  border-radius: 160px;

  @media (max-width: 1024px) {
    width: 280px;
  }
`

const StyledBenefitList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const StyledBenefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 380px;

  @media (max-width: 1024px) {
    margin-bottom: 52px;
  }
`

const StyledBenefitIcon = styled.div`
  color: ${props => props.theme.colors.green};
  font-size: 56px;
`

const StyledBenefitTitle = styled.p`
  color: ${props => props.theme.colors.green};
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: 300;
  font-size: 30px;
`

const StyledBenefitContent = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  text-align: center;
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
          <Link to="/sign-up/"><StyledHomeButton>Start Now</StyledHomeButton></Link>
        </StyledTextPart>

        <div className="img-part">
          <StyledAppImg src="/migrainius_app.jpeg" alt="Migrainius App" />
        </div>
      </StyledBanner>


      <StyledBenefitList>
        <StyledBenefit>
          <StyledBenefitIcon><FontAwesomeIcon icon={faEye} /></StyledBenefitIcon>
          <StyledBenefitTitle>Observe</StyledBenefitTitle>
          <StyledBenefitContent>Record all your migraines by filling in an easy to use questionnaire to keep track of all the details of your crises</StyledBenefitContent>
        </StyledBenefit>

        <StyledBenefit>
          <StyledBenefitIcon><FontAwesomeIcon icon={faLightbulb} /></StyledBenefitIcon>
          <StyledBenefitTitle>Understand</StyledBenefitTitle>
          <StyledBenefitContent>Get to better know what can cause a migraine by identifying your crises most common patterns</StyledBenefitContent>
        </StyledBenefit>

        <StyledBenefit>
          <StyledBenefitIcon><FontAwesomeIcon icon={faFistRaised} /></StyledBenefitIcon>
          <StyledBenefitTitle>Act</StyledBenefitTitle>
          <StyledBenefitContent>Limit your exposition to your personal triggers to reduce the number of crises and predict the moment when they happen</StyledBenefitContent>
        </StyledBenefit>
      </StyledBenefitList>
    </Layout>
  )
}
