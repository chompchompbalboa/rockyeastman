//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Form, Header, Input as SemanticUIInput, Segment, Tab, TextArea } from 'semantic-ui-react'
import CMSImage from '../../lib/CMS/CMSImage'
import ListActions from '../../lib/ListActions/ListActions'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPageTeam extends Component {

  render() {
    const { team, update } = this.props
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Splash</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.team.splash.header"
            value={team.splash.header}
            onChange={update} />
          <StyledInput 
            fluid
            label="Line 1"
            name="pages.team.splash.text.0"
            value={team.splash.text[0]}
            onChange={update} />
          <StyledInput 
            fluid
            label="Line 2"
            name="pages.team.splash.text.1"
            value={team.splash.text[1]}
            onChange={update} />
        </Segment>

        {team.members.map((member, index) => {
          return (
            <Segment key={index}>
              <Header as="h4">{member.name}</Header>          
              <CMSImage
                src={team.members[index].img}
                label="Image"
                name={"pages.team.members." + index + ".img"}
                onChange={update} />
              <StyledInput 
                fluid
                label="Name"
                name={"pages.team.members." + index + ".name"}
                value={team.members[index].name}
                onChange={update} />
              <StyledInput 
                fluid
                label="Name"
                name={"pages.team.members." + index + ".title"}
                value={team.members[index].title}
                onChange={update} />
              <StyledInput 
                fluid
                label="Phone"
                name={"pages.team.members." + index + ".phone"}
                value={team.members[index].phone}
                onChange={update} />
              <StyledInput 
                fluid
                label="Email"
                name={"pages.team.members." + index + ".email"}
                value={team.members[index].email}
                onChange={update} />
              <HorizontalContainer>
                <StyledInput 
                  label={"Link Text"}
                  name={"pages.team.members." + index + ".link.text"}
                  value={team.members[index].link.text}
                  onChange={update}
                  style={{width: "49%"}} />
                <StyledInput 
                  label={"Link Href"}
                  name={"pages.team.members." + index + ".link.href"}
                  value={team.members[index].link.href}
                  onChange={update}
                  style={{width: "49%"}} />
              </HorizontalContainer>
              {member.profile && member.profile.map((item, profileIndex) => {
                return (
                  <HorizontalContainer key={profileIndex}>
                    <StyledForm>
                      <TextArea
                        autoHeight
                        name={"pages.team.members." + index + ".profile." + profileIndex}
                        value={team.members[index].profile[profileIndex]}
                        onChange={update}/>
                    </StyledForm>
                    <ListActions
                      index={index}
                      itemTemplate={""}
                      name={"pages.team.members." + index + ".profile"}
                      list={team.members[index].profile}
                      onChange={update} />
                  </HorizontalContainer>
                )
              })}
            </Segment>
          )
        })}

      </Tab.Pane>
    )
  }
}

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const StyledInput = styled(SemanticUIInput)`
  margin: 1.5vh 0 0 0;
`

const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledForm = styled(Form)`
  margin-top: 1.5vh;
  width: 98%;
`