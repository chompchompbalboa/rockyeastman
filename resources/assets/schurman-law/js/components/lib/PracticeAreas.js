//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import {  } from 'prop-types'
import styled from 'styled-components'

import colors from '../../styles/colors'
import layout from '../../styles/layout'
import { phone } from '../lib/Icon/icons'

import Icon from '../lib/Icon/Icon'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const PracticeAreas = (props) => {
  return (
    <Container>
      <Content>
        <Introduction>
          <IntroductionHeader>
            Get outstanding representation throughout Western Washington
          </IntroductionHeader>
          <Divider />
          <PracticeAreasContainer>
            <PracticeArea> 
              <PracticeAreaHeader>Domestic Violence</PracticeAreaHeader>
              <PracticeAreaBlurb>From spousal abuse to kidnapping, our firm offers exceptional domestic violence representation. Eric Schurman is very experienced in this field and can help you through this difficult time.</PracticeAreaBlurb>
            </PracticeArea>
            <PracticeArea> 
              <PracticeAreaHeader>Drug Crimes</PracticeAreaHeader>
              <PracticeAreaBlurb>When you’re being accused of a drug crime, let us provide the criminal defense you require. Our attorney represents clients for petty drug possession, serious intent to distribute, and smugglings.</PracticeAreaBlurb>
            </PracticeArea>
            <PracticeArea> 
              <PracticeAreaHeader>Vehicular Crimes</PracticeAreaHeader>
              <PracticeAreaBlurb>A DUI or DWI can ruin your life. Call on Eric Schurman for aggressive legal representation in your traffic law case. He researches each case extensively to ensure the best results.</PracticeAreaBlurb>
            </PracticeArea>
          </PracticeAreasContainer>
        </Introduction>
        <ConsultationContainer>
          <ConsultationContent>
            <ConsultationBlurb>
              Since 1999, Eric Schurman has successfully defended clients throughout Western Washington. With aggressive and experienced legal representation, you will be confident you will get the best results possible. Choose Eric Schurman, Attorney at Law, to defend you against your criminal charge.
Because arrests and criminal charges do not arise only during business hours, Eric Schurman is available 24 hours a day, 7 days a week for emergency consultation.
            </ConsultationBlurb>
            <ConsultationContact>
              <ConsultationContactHeader>
                Get a private
                <br />
                consultation today
              </ConsultationContactHeader>
              <ConsultationContactPhone
                href="tel:2066242979">
                <Icon
                  color="white"
                  icon={phone}
                  size="1.25em"/>
                (206) 264-2979
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
  background-color: ${colors.secondary};
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
  background-color: ${colors.primaryDark};
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