//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import {  } from 'prop-types'
import styled from 'styled-components'

import layout from '../../styles/layout'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const About = ({ about, styles }) => {
  return (
    <Container
      backgroundImage={about.backgroundImage}>
      <Content>
        <Introduction>
          <IntroductionHeader>
            {about.header}
          </IntroductionHeader>
          <Divider 
            backgroundColor={styles.colors.primary}/>
          <InfoContainer>
            {about.details.map((detail, index) => {
              return (
                <Info key={index}> 
                  <InfoHeader>{detail.header}</InfoHeader>
                  <InfoBlurb>{detail.blurb}</InfoBlurb>
                </Info>
              )
            })}
          </InfoContainer>
        </Introduction>
        <HeadshotBlurbContainer
          backgroundColor={styles.colors.primary}>
          <Headshot src={about.highlight.img}/>
          <Blurb>
            {about.highlight.blurb}
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
  background: ${props => "linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9)), url(" + props.backgroundImage + ")"};
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
  background-color: ${props => props.backgroundColor};
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
  white-space: pre-line;
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
  background-color: ${props => props.backgroundColor};
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