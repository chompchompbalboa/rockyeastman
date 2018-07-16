//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import {  } from 'prop-types'
import styled from 'styled-components'

import colors from '../../styles/colors'
import config from '../../styles/config'
import layout from '../../styles/layout'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const About = (props) => {
  return (
    <Container>
      <Content>
        <Introduction>
          <IntroductionHeader>
            About Eric
          </IntroductionHeader>
          <Divider />
          <InfoContainer>
            <Info> 
              <InfoHeader>Personalized Service</InfoHeader>
              <InfoBlurb>What sets Eric apart from the rest of the industry is his dedication to personalized service.  Eric is available to his clients anytime.  He is happy to answer questions as they arise, and understands not all problems occur between 9 and 5, and is available after hours and weekends.  He’ll take your problems from you and make them his mission to solve.</InfoBlurb>
            </Info>
            <Info> 
              <InfoHeader>Affordable Defense</InfoHeader>
              <InfoBlurb>Superlative criminal defense doesn’t have to be expensive.  Eric’s affordable flat fee includes the personalized service you deserve and is far less costly than going without an experienced defense attorney or an overworked public defender, who could cost you your freedom, a criminal record, and excessive court fines and fees.</InfoBlurb>
            </Info>
            <Info> 
              <InfoHeader>Extensive Experience</InfoHeader>
              <InfoBlurb>Eric will help you navigate though the intimidating legal process.  He understands that being charged with a crime can cause anxiety, stress, even depression.  Eric is dedicated to providing aggressive and exceptional legal representation and has vast experience examining defense cases from all angles.</InfoBlurb>
            </Info>
          </InfoContainer>
        </Introduction>
        <HeadshotBlurbContainer>
          <Headshot src={config.assetsPath + "/img/headshot.png"}/>
          <Blurb>
            Eric Schurman founded his law practice in 1999 on the principle that every person has the right to exceptional legal representation when charged with a crime.  The Washington State court system can be overwhelming and confusing without experience legal representation.  Eric will be your personal advocate, fighting for your constitutional rights and advocating for the best possible outcome.
          </Blurb>
        </HeadshotBlurbContainer>
      </Content>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
About.propTypes = {
}
About.defaultProps = {
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding-bottom: 5vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)), url(/assets/schurman-law/img/seattle.jpg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  color: black;
`

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HeadshotBlurbContainer = styled.div`
  padding: 2vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  color: white;
  text-align: center;
  font-family: Lora;
  letter-spacing: 0.5px;
  line-height: 1.5;
  @media (${layout.breakpoints.tabletUpString}) {
    padding: 2vh 3vw;
    width: 90%;
    flex-direction: row;
  }
`

const Headshot = styled.img`
  margin: 2vh 0;
  width: 100%;
  border-radius: 4px;
  @media (${layout.breakpoints.tabletUpString}) {
    margin-right: 5%;
    height: 35vh;
    width: auto;
  }
`

const Blurb = styled.div`
  width: 100%;
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
  width: 80%;
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

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (${layout.breakpoints.tabletUpString}) {
    width: 90%;
    flex-direction: row;
    align-items: flex-start
  }
`

const Info = styled.div`
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

const InfoHeader = styled.div`
  margin-bottom: 1vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5em;
  text-transform: uppercase;
  text-align: center;
`

const InfoBlurb = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export default About