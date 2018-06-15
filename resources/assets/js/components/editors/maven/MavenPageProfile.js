//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Divider, Form, Header, Input as SemanticUIInput, Segment, Tab, TextArea } from 'semantic-ui-react'
import CMSImage from '../../lib/CMS/CMSImage'
import ListActions from '../../lib/ListActions/ListActions'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPageProfile extends Component {

  render() {
    const { profile, update } = this.props
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Splash</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.profile.splash.header"
            value={profile.splash.header}
            onChange={update} />
          <StyledInput 
            fluid
            label="Line 1"
            name="pages.profile.splash.text.0"
            value={profile.splash.text[0]}
            onChange={update} />
          <StyledInput 
            fluid
            label="Line 2"
            name="pages.profile.splash.text.1"
            value={profile.splash.text[1]}
            onChange={update} />
        </Segment>

        <Segment>
          <Header as="h4">Quote</Header>
          <StyledInput 
            fluid
            label="Quote Text"
            name="pages.profile.quote.text"
            value={profile.quote.text}
            onChange={update} />
          <StyledInput 
            fluid
            label="Quote Attribution"
            name="pages.profile.quote.attribution"
            value={profile.quote.attribution}
            onChange={update} />
        </Segment>

        <Segment>
          <Header as="h4">Slider</Header>
          {profile.slider.map((item, index) => {
            return (
              <VerticalContainer key={index}>
                <ListActions
                  index={index}
                  itemTemplate={""}
                  name="pages.profile.slider"
                  list={profile.slider}
                  onChange={update} />
                <CMSImage
                  src={profile.slider[index]}
                  label="Image"
                  name={"pages.profile.slider." + index}
                  onChange={update} />
                <Divider />
              </VerticalContainer>
            )
          })}
        </Segment>

        <Segment>
          <Header as="h4">Profile</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.profile.profile.header"
            value={profile.profile.header}
            onChange={update} />
          {profile.profile.text.map((item, index) => {
            return (
              <HorizontalContainer key={index}>
                <StyledForm>
                  <TextArea
                    autoHeight
                    name={"pages.profile.profile.text." + index}
                    value={profile.profile.text[index]}
                    onChange={update}/>
                </StyledForm>
                <ListActions
                  index={index}
                  itemTemplate={""}
                  name="pages.profile.profile.text"
                  list={profile.profile.text}
                  onChange={update} />
              </HorizontalContainer>
            )
          })}
        </Segment>

        <Segment>
          <Header as="h4">Metrics</Header>
          {profile.metrics.map((testimonial, index) => {
            return (
              <React.Fragment key={index}>
                <StyledInput 
                  fluid
                  key={index + "-metric"}
                  label={"Metric " + (index + 1) + " Metric"}
                  name={"pages.profile.metrics." + index + ".metric"}
                  value={profile.metrics[index].metric}
                  onChange={update} />
                <StyledInput 
                  fluid
                  key={index + "-blurb"}
                  label={"Metric " + (index + 1) + " Blurb"}
                  name={"pages.profile.metrics." + index + ".blurb"}
                  value={profile.metrics[index].blurb}
                  onChange={update} />
              </React.Fragment>
            )
          })}
        </Segment>

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

const VerticalContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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