import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { Link, navigate } from 'gatsby'

import { FirebaseContext } from '../components/Firebase'

import Button from '../components/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const StyledTitleButton = styled.div`
  display: flex;
  flex-direction: column;

  & a {
    align-self: flex-end;

    @media (max-width: 1024px) {
      align-self: flex-start;
      margin-bottom: 42px;
    }
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

  @media (max-width: 1024px) {
    width: 100%;
  }
`

const StyledQuestionRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  & div {
    margin-bottom: 20px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
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

  @media (max-width: 1024px) {
    margin-top: 6px;
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
  const {user, firebase} = useContext(FirebaseContext)

  const [migraineForm, setMigraineForm] = useState({
    startHour: "",
    endHour: "",
    medicationTaken: "",
    medicationName: "",
    medicationQuantity: "",
    medicationEfficiency: "",
    activityAtStart: "",
    hypoglycemic: "",
    physicalActivity: "",
    stressed: "",
    angry: "",
    hoursOfSleep: "",
    minutesOfSleep: "",
    intensity: "",
  })

  const [ongoingMigraine, setOngoingMigraine] = useState(false)

  const changeHandler = (event) => {
    const updatedMigraineForm = {
      ...migraineForm,
      user: user
    }

    const {name, value} = event.target
    if (value === "now") {
      const today = new Date()
      const time = today.getHours() + ":" + today.getMinutes()
      updatedMigraineForm[name] = time
    } else {
      updatedMigraineForm[name] = value
    }

    if (value === "ongoing") {
      setOngoingMigraine(true)
    }

    setMigraineForm(updatedMigraineForm)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    firebase.addMigraine({
      userId: user.uid,
      data: migraineForm
    })
    .then(() => navigate("/dashboard/"))
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  }

  return (
    <div>
      <StyledTitleButton>
        <StyledTitle1>NEW MIGRAINE</StyledTitle1>
        <Link to="/dashboard/"><Button background="transparent" hoverBackground="orange"><FontAwesomeIcon icon={faTimes} />Cancel</Button></Link>
      </StyledTitleButton>

      <StyledForm onSubmit={submitHandler}>
        <StyledCategory>
          <StyledCategoryTitle>Hours</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <div className="question-group">
                <StyledQuestionQuestion>When did your migraine start?</StyledQuestionQuestion>
                  <StyledInput type="radio" id="now" name="startHour" value="now" onChange={changeHandler}/>
                  <StyledLabel htmlFor="now">Now</StyledLabel>

                  <StyledInput type="radio" id="another-moment" name="startHour" value="another moment" onChange={changeHandler}/>
                  <StyledLabel htmlFor="another-moment">Another moment</StyledLabel>
              </div>
            </StyledQuestionLeft>

            <StyledQuestionRight>
              <div className="question-group">
                <StyledQuestionQuestion>When did your migraine end?</StyledQuestionQuestion>
                <StyledInput type="radio" id="now" name="endHour" value="now" onChange={changeHandler}/>
                <StyledLabel htmlFor="now">Now</StyledLabel>

                <StyledInput type="radio" id="another-moment" name="endHour" value="another moment" onChange={changeHandler}/>
                <StyledLabel htmlFor="another-moment">Another moment</StyledLabel>

                <StyledInput type="radio" id="ongoing" name="endHour" value="ongoing" onChange={changeHandler}/>
                <StyledLabel htmlFor="ongoing">Ongoing</StyledLabel>
              </div>
            </StyledQuestionRight>
          </StyledCategoryQuestions>
        </StyledCategory>


        <StyledCategory>
          <StyledCategoryTitle>Medication</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <div className="question-group">
                <StyledQuestionQuestion>Did you take any medication?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="medicationTaken" value="yes" onChange={changeHandler}/>
                <StyledLabel htmlFor="yes">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="medicationTaken" value="no" onChange={changeHandler}/>
                <StyledLabel htmlFor="no">No</StyledLabel>
              </div>
            </StyledQuestionLeft>


            <StyledQuestionRight>
              <div className="question-group">
                <StyledQuestionQuestion>What is the name of the medication and what quantity did you take?</StyledQuestionQuestion>
                <StyledLabel htmlFor="medication">Name</StyledLabel>
                <StyledInput type="text" name="medicationName" onChange={changeHandler}/>

                <StyledLabel htmlFor="quantity">Quantity</StyledLabel>
                <StyledInput type="number" name="medicationQuantity" onChange={changeHandler}/>
              </div>

              <div className="question-group">
                <StyledQuestionQuestion>Was the medication efficient?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="medicationEfficiency" value="yes" onChange={changeHandler}/>
                <StyledLabel htmlFor="efficiency">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="medicationEfficiency" value="no" onChange={changeHandler}/>
                <StyledLabel htmlFor="efficiency">No</StyledLabel>
              </div>
            </StyledQuestionRight>
          </StyledCategoryQuestions>
        </StyledCategory>

        <StyledCategory>
          <StyledCategoryTitle>Activity when it started</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <div className="question-group">
                <StyledQuestionQuestion>What were you doing when it started?</StyledQuestionQuestion>
                <StyledLabel htmlFor="activity">Activity</StyledLabel>
                <StyledInput type="text" name="activityAtStart" onChange={changeHandler}/>
              </div>
            </StyledQuestionLeft>
          </StyledCategoryQuestions>
        </StyledCategory>

        <StyledCategory>
          <StyledCategoryTitle>Events during this day</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <div className="question-group">
                <StyledQuestionQuestion>Have you been hypoglycemic or very hungry today?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="hypoglycemic" value="yes" onChange={changeHandler}/>
                <StyledLabel htmlFor="hypoglycemic">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="hypoglycemic" value="no" onChange={changeHandler}/>
                <StyledLabel htmlFor="hypoglycemic">No</StyledLabel>
              </div>

              <div className="question-group">
                <StyledQuestionQuestion>Did you do any physical activity or yoga today?</StyledQuestionQuestion>
                <StyledInput type="radio" id="sport" name="physicalActivity" value="sport" onChange={changeHandler}/>
                <StyledLabel htmlFor="physical-activity">Sport</StyledLabel>

                <StyledInput type="radio" id="yoga" name="physicalActivity" value="yoga" onChange={changeHandler}/>
                <StyledLabel htmlFor="efficiency">Yoga</StyledLabel>

                <StyledInput type="radio" id="both" name="physicalActivity" value="both" onChange={changeHandler}/>
                <StyledLabel htmlFor="physical-activity">Both</StyledLabel>
              </div>
            </StyledQuestionLeft>

            <StyledQuestionRight>
              <div className="question-group">
                <StyledQuestionQuestion>Have you been stressed today?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="stressed" value="yes" onChange={changeHandler}/>
                <StyledLabel htmlFor="stressed">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="stressed" value="no" onChange={changeHandler}/>
                <StyledLabel htmlFor="stressed">No</StyledLabel>
              </div>

              <div className="question-group">
                <StyledQuestionQuestion>Have you been angry today?</StyledQuestionQuestion>
                <StyledInput type="radio" id="yes" name="angry" value="yes" onChange={changeHandler}/>
                <StyledLabel htmlFor="angry">Yes</StyledLabel>

                <StyledInput type="radio" id="no" name="angry" value="no" onChange={changeHandler}/>
                <StyledLabel htmlFor="angry">No</StyledLabel>
              </div>
            </StyledQuestionRight>
          </StyledCategoryQuestions>
        </StyledCategory>

        <StyledCategory>
          <StyledCategoryTitle>Hours of sleep</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <div className="question-group">
                <StyledQuestionQuestion>How many hours did you sleep last night?</StyledQuestionQuestion>
                <StyledLabel htmlFor="hours">Hours</StyledLabel>
                <StyledInput type="number" name="hoursOfSleep" onChange={changeHandler}/>

                <StyledLabel htmlFor="minutes">Minutes</StyledLabel>
                <StyledInput type="number" name="minutesOfSleep" onChange={changeHandler}/>
              </div>
            </StyledQuestionLeft>
          </StyledCategoryQuestions>
        </StyledCategory>

        <StyledCategory>
          <StyledCategoryTitle>Intensity</StyledCategoryTitle>

          <StyledCategoryQuestions>
            <StyledQuestionLeft>
              <div className="question-group">
                <StyledQuestionQuestion>On a scale from 1 to 10 (1 = not very painful, 10 =  extremely painful), what is the intensity of this migraine?</StyledQuestionQuestion>
                <StyledLabel htmlFor="intensity">Intensity</StyledLabel>
                <StyledSelect name="intensity" onChange={changeHandler}>
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
              </div>
            </StyledQuestionLeft>
          </StyledCategoryQuestions>
        </StyledCategory>

        <Button background="orange" hoverBackground="transparent"><FontAwesomeIcon icon={faCheck} />Submit</Button>
      </StyledForm>
    </div>
  )
}

export default NewMigraine
