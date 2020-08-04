import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../layouts/Layout'
import Button from '../components/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const StyledTitleButton = styled.div`
  display: flex;
  flex-direction: column;

  & a {
    align-self: flex-end;
  }
`

const StyledTitle1 = styled.h1`
  font-size: 30px;
  color: ${props => props.theme.colors.mediumBlue};
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
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

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

const StyledQuestionLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  & div {
    margin-bottom: 20px;
  }
`

const StyledQuestionRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  & div {
    margin-bottom: 20px;
  }
`

const StyledQuestionGroup = styled.div`
`

const StyledQuestion = styled.div`
`

const StyledQuestionQuestion = styled.p`
  color: ${props => props.theme.colors.green};
`

const StyledInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0 6px 0 0;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.mediumBlue};
  border-radius: 5px;
  padding: 6px 8px;
  color: ${props => props.theme.colors.lightGrey};
  font-family: inherit;

  &[type="radio"] {
    height: 17px;
    width: 16px;
    border-radius: 50%;
  }

  &:checked {
    background: ${props => props.theme.colors.mediumBlue};
  }

  &[type="text"] {
    margin-right: 32px;
  }

  &[type="number"] {
    margin-right: 32px;
    width: 40px;
  }
`

const StyledSelect = styled.select`
  border: 1px solid ${props => props.theme.colors.mediumBlue};
  background: transparent;
  border-radius: 5px;
  padding: 6px 8px;
  color: ${props => props.theme.colors.lightGrey};
`

const StyledLabel = styled.label`
  color: ${props => props.theme.colors.lightGrey};
  margin-right: 24px;
`

const NewMigraine = () => {
  return (
    <Layout>
      <StyledTitleButton>
        <StyledTitle1>NEW MIGRAINE</StyledTitle1>
        <Link to="/dashboard/"><Button background="transparent" hoverBackground="orange"><FontAwesomeIcon icon={faTimes} />Cancel</Button></Link>
      </StyledTitleButton>

      <StyledForm>
        <StyledCategory>
          <StyledCategoryTitle>Hours</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <StyledQuestionGroup>
                <StyledQuestionQuestion>When did your migraine start?</StyledQuestionQuestion>
                  <StyledInput type="radio" id="now" name="start" value="now"/>
                  <StyledLabel htmlFor="now">Now</StyledLabel>

                  <StyledInput type="radio" id="another-moment" name="start" value="another-moment"/>
                  <StyledLabel htmlFor="another-moment">Another moment</StyledLabel>
              </StyledQuestionGroup>
            </StyledQuestionLeft>

            <StyledQuestionRight>
              <StyledQuestionGroup>
                <StyledQuestionQuestion>When did your migraine end?</StyledQuestionQuestion>
                <StyledInput type="radio" id="now" name="end" value="now"/>
                <StyledLabel htmlFor="now">Now</StyledLabel>

                <StyledInput type="radio" id="another-moment" name="end" value="another-moment"/>
                <StyledLabel htmlFor="another-moment">Another moment</StyledLabel>

                <StyledInput type="radio" id="ongoing" name="end" value="ongoing"/>
                <StyledLabel htmlFor="ongoing">Ongoing</StyledLabel>
              </StyledQuestionGroup>
            </StyledQuestionRight>
          </StyledCategoryQuestions>
        </StyledCategory>


        <StyledCategory>
          <StyledCategoryTitle>Medication</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <StyledQuestionGroup>
                <StyledQuestionQuestion>Did you take any medication?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="medication" value="yes"/>
                <StyledLabel htmlFor="yes">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="medication" value="no"/>
                <StyledLabel htmlFor="no">No</StyledLabel>
              </StyledQuestionGroup>
            </StyledQuestionLeft>


            <StyledQuestionRight>
              <StyledQuestionGroup>
                <StyledQuestionQuestion>What is the name of the medication and what quantity did you take?</StyledQuestionQuestion>
                <StyledLabel htmlFor="medication">Name</StyledLabel>
                <StyledInput type="text" name="medication"/>

                <StyledLabel htmlFor="quantity">Quantity</StyledLabel>
                <StyledInput type="number" name="quantity"/>
              </StyledQuestionGroup>

              <StyledQuestionGroup>
                <StyledQuestionQuestion>Was the medication efficient?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="efficiency" value="yes"/>
                <StyledLabel htmlFor="efficiency">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="efficiency" value="no"/>
                <StyledLabel htmlFor="efficiency">No</StyledLabel>
              </StyledQuestionGroup>
            </StyledQuestionRight>
          </StyledCategoryQuestions>
        </StyledCategory>

        <StyledCategory>
          <StyledCategoryTitle>Activity when it started</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <StyledQuestionGroup>
                <StyledQuestionQuestion>What were you doing when it started?</StyledQuestionQuestion>
                <StyledLabel htmlFor="activity">Activity</StyledLabel>
                <StyledInput type="text" name="activity"/>
              </StyledQuestionGroup>
            </StyledQuestionLeft>
          </StyledCategoryQuestions>
        </StyledCategory>

        <StyledCategory>
          <StyledCategoryTitle>Events during this day</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <StyledQuestionGroup>
                <StyledQuestionQuestion>Have you been hypoglycemic or very hungry today?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="hypoglycemic" value="yes"/>
                <StyledLabel htmlFor="hypoglycemic">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="hypoglycemic" value="no"/>
                <StyledLabel htmlFor="hypoglycemic">No</StyledLabel>
              </StyledQuestionGroup>

              <StyledQuestionGroup>
                <StyledQuestionQuestion>Did you do any physical activity or yoga today?</StyledQuestionQuestion>
                <StyledInput type="radio" id="sport" name="physical-activity" value="sport"/>
                <StyledLabel htmlFor="physical-activity">Sport</StyledLabel>

                <StyledInput type="radio" id="yoga" name="physical-activity" value="yoga"/>
                <StyledLabel htmlFor="efficiency">Yoga</StyledLabel>

                <StyledInput type="radio" id="both" name="physical-activity" value="both"/>
                <StyledLabel htmlFor="physical-activity">Both</StyledLabel>
              </StyledQuestionGroup>
            </StyledQuestionLeft>

            <StyledQuestionRight>
              <StyledQuestionGroup>
                <StyledQuestionQuestion>Have you been stressed today?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="stressed" value="yes"/>
                <StyledLabel htmlFor="stressed">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="stressed" value="no"/>
                <StyledLabel htmlFor="stressed">No</StyledLabel>
              </StyledQuestionGroup>

              <StyledQuestionGroup>
                <StyledQuestionQuestion>Have you been angry today?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="angry" value="yes"/>
                <StyledLabel htmlFor="angry">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="angry" value="no"/>
                <StyledLabel htmlFor="angry">No</StyledLabel>
              </StyledQuestionGroup>
            </StyledQuestionRight>
          </StyledCategoryQuestions>
        </StyledCategory>

        <StyledCategory>
          <StyledCategoryTitle>Hours of sleep</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <StyledQuestionGroup>
                <StyledQuestionQuestion>How many hours did you sleep last night?</StyledQuestionQuestion>
                <StyledLabel htmlFor="hours">Hours</StyledLabel>
                <StyledInput type="number" name="hours"/>

                <StyledLabel htmlFor="minutes">Minutes</StyledLabel>
                <StyledInput type="number" name="minutes"/>
              </StyledQuestionGroup>
            </StyledQuestionLeft>
          </StyledCategoryQuestions>
        </StyledCategory>

        <StyledCategory>
          <StyledCategoryTitle>Intensity</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <StyledQuestionGroup>
                <StyledQuestionQuestion>On a scale from 1 to 10 (1 = not very painful, 10 =  extremely painful), what is the intensity of this migraine?</StyledQuestionQuestion>
                <StyledLabel htmlFor="intensity">Intensity</StyledLabel>
                <StyledSelect name="intensity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </StyledSelect>
              </StyledQuestionGroup>
            </StyledQuestionLeft>
          </StyledCategoryQuestions>
        </StyledCategory>

        <Button background="orange" hoverBackground="transparent"><FontAwesomeIcon icon={faCheck} />Submit</Button>
      </StyledForm>
    </Layout>
  )
}

export default NewMigraine
