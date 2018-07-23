//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import {  } from 'prop-types'
import styled from 'styled-components'

import layout from '../../styles/layout'

import { phone } from '../lib/Icon/icons'
import Icon from '../lib/Icon/Icon'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const PracticeAreas = ({ practiceAreas, styles }) => {
  return (
    <Container>
      <Content>
        <Introduction>
          <IntroductionHeader>
            {practiceAreas.header}
          </IntroductionHeader>
          <Divider 
            backgroundColor={styles.colors.secondary}/>
          <PracticeAreasContainer>
            {practiceAreas.practiceAreas.map((practiceArea, index) => {
              return (
                <PracticeArea key={index}> 
                  <PracticeAreaHeader>{practiceArea.header}</PracticeAreaHeader>
                  <PracticeAreaBlurb>{practiceArea.blurb}</PracticeAreaBlurb>
                </PracticeArea>
              )
            })}
          </PracticeAreasContainer>
        </Introduction>
        <ConsultationContainer>
          <ConsultationContent
            backgroundColor={styles.colors.primaryDark}>
            <ConsultationBlurb>
              {practiceAreas.consultation.blurb}
            </ConsultationBlurb>
            <ConsultationContact>
              <ConsultationContactHeader>
                Get a private
                <br />
                consultation today
              </ConsultationContactHeader>
              <ConsultationContactPhone
                href={"tel:" + practiceAreas.consultation.phone}>
                <Icon
                  color="white"
                  icon={phone}
                  size="1.25em"/>
                {practiceAreas.consultation.phone}
              </ConsultationContactPhone>
            </ConsultationContact>
          </ConsultationContent>
        </ConsultationContainer>
      </Content>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
PracticeAreas.propTypes = {
}
PracticeAreas.defaultProps = {
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Introduction = styled.div`
  padding: 7.5vh 0 5.5vh 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IntroductionHeader = styled.div`
  font-family: Lora;
  font-size: 1.75em;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  @media (${layout.breakpoints.tabletUpString}) {
    width: 50%;
  }
`

const Divider = styled.div`
  margin: 5vh 0;
  width: 25%;
  height: 2px;
  background-color: ${props => props.backgroundColor};
  @media (${layout.breakpoints.tabletUpString}) {
    width: 15%;
  }
`

const PracticeAreasContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (${layout.breakpoints.tabletUpString}) {
    width: 90%;
    flex-direction: row;
  }
`

const PracticeArea = styled.div`
  margin-bottom: 3vh;
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${layout.breakpoints.tabletUpString}) {
    width: 27%;
  }
`

const PracticeAreaHeader = styled.div`
  margin-bottom: 1vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  text-transform: uppercase;
`

const PracticeAreaBlurb = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const ConsultationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ConsultationContent = styled.div`
  padding: 7.5vh 0;
  width: 100vw;
  background-color: ${props => props.backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  @media (${layout.breakpoints.tabletUpString}) {
    width: 90%;
    margin: 0;
  }
`

const ConsultationBlurb = styled.div`
  white-space: pre-line;
  width: 87%;
  text-align: center;
  font-family: Lora;
  letter-spacing: 0.5px;
  line-height: 1.5;
`

const ConsultationContact = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${layout.breakpoints.tabletUpString}) {
    margin-top: 2vh;
    flex-direction: row;
    justify-content: space-around;
  }
`

const ConsultationContactHeader = styled.div`
  margin: 3vh 0;
  font-family: Lora;
  font-size: 1.5em;
  text-align: center;
  text-transform: uppercase;
`

const ConsultationContactPhone = styled.a`
  padding: 1.25vh 3vw;
  display: flex;
  justify-content: space-between;
  aling-items: center;
  font-size: 1.25em;
  border: 2px solid white;
`

export default PracticeAreas