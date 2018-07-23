//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { number, string } from 'prop-types'
import styled from 'styled-components'

import colors from '../../../styles/colors'

import Tile from './__Tile'
import TileHeader from './__TileHeader'
import TileParagraph from './__TileParagraph'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Resources = (props) => {
  const resources = [
    {title: "File Name", info: "Here's where you would put a little bit of information about the file or the class you're enrolling people in", buttonText: "Download"},
    {title: "File Name", info: "Here's where you would put a little bit of information about the file or the class you're enrolling people in", buttonText: "Download"},
    {title: "Class Name", info: "Here's where you would put a little bit of information about the file or the class you're enrolling people in", buttonText: "I'm interested"},
    {title: "Class Name", info: "Here's where you would put a little bit of information about the file or the class you're enrolling people in", buttonText: "I'm interested"}
  ]
  return (
    <Tile  {...props}
      backgroundImage="/assets/redlinelaw/img/office_1.jpg">
      <Content>
        <LeftContainer>
          <TileHeader>Download the forms you need right here</TileHeader>
          <TileParagraph>Or sign up for one of the invaluable classes I teach to Adult Family Home owners and their employees. Don't wait until it's too late. Learn how to avoid complaints before they happen.</TileParagraph>
          <TileParagraph>You can submit payment directly using the Paypal button next to the form or class you're looking for.</TileParagraph>
        </LeftContainer>
        <RightContainer>
          <ResourcesContainer>
            {resources.map((resource, index) => {
              return (
                <Resource key={index}>
                  <ResourceInfoContainer>
                    <ResourceTitle>{resource.title}</ResourceTitle>
                    <ResourceDescription>{resource.info}</ResourceDescription>
                  </ResourceInfoContainer>
                  <ResourceButtonContainer>
                    <ResourceButton>{resource.buttonText}</ResourceButton>
                  </ResourceButtonContainer>
                </Resource>
              )
            })}
          </ResourcesContainer>
        </RightContainer>
      </Content>
    </Tile>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftContainer = styled.div`
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const RightContainer = styled.div`
  width: calc(90% - 40vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const ResourcesContainer = styled.div`
  width: 100%;
  padding: 1vh 1.5vw;
  background-color: ${colors.resourcesContainerBackground};
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgb(0,0,0,0.5);
`

const Resource = styled.div`
  margin: 2vh 0;
  padding: 1vw;
  width: 100%;
  background-color: ${colors.resourceBackground};
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 2px;
  box-shadow: 1px 1px 10px rgb(0,0,0,0.5);
`

const ResourceInfoContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const ResourceTitle = styled.h5`
  width: 100%;
  text-transform: uppercase;
`

const ResourceDescription = styled.p`
  width: 100%;
  font-size: 0.75em;
  text-align: justify;
`

const ResourceButtonContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const ResourceButton = styled.div`
  cursor: pointer;
  padding: 1.5vh 0;
  width: 90%;
  background-color: ${colors.resourceButtonBackground};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`

export default Resources