import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../layouts/Layout'
import Button from '../components/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const StyledTitle1 = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.colors.mediumBlue};
`

const StyledCategory = styled.div`
  margin-bottom: 50px;
`

const StyledCategoryTitle = styled.p`
  text-transform: uppercase;
  color: ${props => props.theme.colors.mediumBlue};
  font-family: ${props => props.theme.fonts.roboto};
  font-weight: 300;
  font-size: 20px;
`

const StyledCategoryQuestions = styled.div`
  display: flex;
  justify-content: space-between;

  &:last-child {
    margin-right: 0;
  }
`

const StyledCategorySubQuestions = styled.div`
  display: flex;
  flex-direction: column;

  & div {
    margin-bottom: 20px;
  }
`

const StyledQuestion = styled.div`
`

const StyledQuestionQuestion = styled.p`
  color: ${props => props.theme.colors.green};
`

const StyledInput = styled.input`
  margin-right: 6px;
`

const StyledLabel = styled.label`
  color: ${props => props.theme.colors.lightGrey};
  margin-right: 24px;
`

const NewMigraine = () => {
  return (
    <Layout>
      <StyledTitle1>NEW MIGRAINE</StyledTitle1>
      <Button background="transparent" hoverBackground="orange"><Link to="/dashboard/"><FontAwesomeIcon icon={faTimes} />Cancel</Link></Button>

      <form>
        <StyledCategory>
          <StyledCategoryTitle>Hours</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestion>
            <StyledQuestionQuestion>When did your migraine start?</StyledQuestionQuestion>
              <StyledInput type="radio" id="now" name="start" value="now"/>
              <StyledLabel for="now">Now</StyledLabel>

              <StyledInput type="radio" id="another-moment" name="start" value="another-moment"/>
              <StyledLabel for="another-moment">Another moment</StyledLabel>
            </StyledQuestion>

            <StyledQuestion>
              <StyledQuestionQuestion>When did your migraine end?</StyledQuestionQuestion>
              <StyledInput type="radio" id="now" name="end" value="now"/>
              <StyledLabel for="now">Now</StyledLabel>

              <StyledInput type="radio" id="another-moment" name="end" value="another-moment"/>
              <StyledLabel for="another-moment">Another moment</StyledLabel>

              <StyledInput type="radio" id="ongoing" name="end" value="ongoing"/>
              <StyledLabel for="ongoing">Ongoing</StyledLabel>
            </StyledQuestion>
          </StyledCategoryQuestions>
        </StyledCategory>


        <StyledCategory>
          <StyledCategoryTitle>Medication</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestion>
              <StyledQuestionQuestion>Did you take any medication?</StyledQuestionQuestion>
              <StyledInput type="radio" id="yes" name="medication" value="yes"/>
              <StyledLabel for="yes">Yes</StyledLabel>

              <StyledInput type="radio" id="no" name="medication" value="no"/>
              <StyledLabel for="no">No</StyledLabel>
            </StyledQuestion>

            <StyledCategorySubQuestions>
              <StyledQuestion>
                <StyledQuestionQuestion>What is the name of the medication and what quantity did you take?</StyledQuestionQuestion>
                <StyledLabel for="medication">Name</StyledLabel>
                <StyledInput type="text" name="medication"/>

                <StyledLabel for="quantity">Quantity</StyledLabel>
                <StyledInput type="number" id="quantity" name="quantity" value="no" step="1" value="1"/>
              </StyledQuestion>

              <StyledQuestion>
                <StyledQuestionQuestion>Was the medication efficient?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="efficiency" value="yes"/>
                <StyledLabel for="efficiency">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="efficiency" value="no"/>
                <StyledLabel for="efficiency">No</StyledLabel>
              </StyledQuestion>
            </StyledCategorySubQuestions>
          </StyledCategoryQuestions>
        </StyledCategory>


        <StyledCategoryTitle>Activity when it started</StyledCategoryTitle>

        <StyledQuestionQuestion>What were you doing when it started?</StyledQuestionQuestion>
        <StyledLabel for="activity">Activity</StyledLabel>
        <StyledInput type="text" name="activity"/>



        <StyledCategoryTitle>Events during this day</StyledCategoryTitle>

        <StyledQuestionQuestion>Have you been hypoglycemic or very hungry today?</StyledQuestionQuestion>
        <StyledInput type="radio" id="yes" name="efficiency" value="yes"/>
        <StyledLabel for="efficiency">Yes</StyledLabel>

        <StyledInput type="radio" id="no" name="efficiency" value="no"/>
        <StyledLabel for="efficiency">No</StyledLabel>

      </form>
    </Layout>
  )
}

export default NewMigraine
