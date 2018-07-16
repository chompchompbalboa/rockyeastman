//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import {  } from 'prop-types'
import geocode from 'react-geocode'
import styled from 'styled-components'

import colors from '../../styles/colors'
import layout from '../../styles/layout'
import { email, location, phone } from './Icon/icons'

import Icon from './Icon/Icon'
import Map from './Map'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class Contact extends Component {

  state = {
    latLng: {
      lat: -34.397, lng: 150.644
    }
  }

  componentWillMount = () => {
    geocode.setApiKey("AIzaSyDpSuaak0-tdnP-LLFG3V7BLeS88xTLbF0")
    geocode.fromAddress("119 1st Avenue South, Suite 500, Seattle WA 98104")
      .then(
        response => {
          const { lat, lng } = response.results[0].geometry.location
          this.setState({
            latLng: {
              lat: lat,
              lng: lng
            }
          })
        },
        error => {
          console.error(error)
        }
      )
  }

  render() {
    const { latLng } = this.state
    const contactInformation = [
      {
        "icon": phone,
        "text": "(206) 264-2979"
      },
      {
        "icon": email,
        "text": "eric@schurmanlaw.com"
      },
      {
        "icon": location,
        "text": "119 1st Avenue South, Suite 500, Seattle WA 98104"
      }
    ]
    return (
      <Container>
        <Content>
          <IntroductionContainer>
            <IntroductionHeader>
              Contact Eric
            </IntroductionHeader>
            <Divider />
          </IntroductionContainer>
          <ContactContainer>
            <ContactInformationContainer>
              <ContactInformationBlurb>
                When your freedom and reputation are at stake, you need an aggressive, experienced, and effective criminal law attorney to defend you. Eric Schurman has more than 19 years of trial experience, so you can trust him to provide the best defense for your case.
              </ContactInformationBlurb>
              {contactInformation.map((info, index) => {
                return (
                  <ContactInformation key={index}>
                    <ContactInformationIcon>
                      <Icon
                        color="black" 
                        icon={info.icon}
                        size="1.5em"/>
                    </ContactInformationIcon>
                    <ContactInformationText>
                      {info.text}
                    </ContactInformationText>
                  </ContactInformation>
                )
              })}
            </ContactInformationContainer>
            <MapContainer>
              <Map latLng={latLng}/>
            </MapContainer>
          </ContactContainer>
        </Content>
      </Container>
    )
  }
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Contact.propTypes = {
}
Contact.defaultProps = {
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
  background-color: rgb(250,246,245);
  color: black;
`

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const IntroductionContainer = styled.div`
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
  margin: 5vh 0 0 0;
  width: 25%;
  height: 2px;
  background-color: ${colors.secondary};
  @media (${layout.breakpoints.tabletUpString}) {
    width: 15%;
  }
`

const ContactContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${layout.breakpoints.tabletUpString}) {
    flex-direction: row;
  }
`

const ContactInformationContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (${layout.breakpoints.tabletUpString}) {
    width: 50%;
  }
`

const ContactInformation = styled.div`
  margin-bottom: 4vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContactInformationBlurb = styled.div`
  margin-bottom: 6vh;
  width: 100%;
  @media (${layout.breakpoints.tabletUpString}) {
    align-self: flex-start;
    width: 82%;
  }
`

const ContactInformationIcon = styled.div`
  width: 10%;
`

const ContactInformationText = styled.div`
  width: 85%;
`

const MapContainer = styled.div`
  width: 100%;
  @media (${layout.breakpoints.tabletUpString}) {
    width: 50%;
  }
`