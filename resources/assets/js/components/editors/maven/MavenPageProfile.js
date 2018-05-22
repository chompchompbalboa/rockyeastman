//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Header, Input as SemanticUIInput, Segment, Tab } from 'semantic-ui-react'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPageProfile extends Component {

  render() {
    const { profile, updateJson } = this.props
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Splash</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.profile.splash.header"
            value={profile.splash.header}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Line 1"
            name="pages.profile.splash.text.0"
            value={profile.splash.text[0]}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Line 2"
            name="pages.profile.splash.text.1"
            value={profile.splash.text[1]}
            onChange={updateJson} />
        </Segment>

        <Segment>
          <Header as="h4">Quote</Header>
          <StyledInput 
            fluid
            label="Quote Text"
            name="pages.profile.quote.text"
            value={profile.quote.text}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Quote Attribution"
            name="pages.profile.quote.attribution"
            value={profile.quote.attribution}
            onChange={updateJson} />
        </Segment>

        <Segment>
          <Header as="h4">Slider</Header>
          {profile.slider.map((item, index) => {
            return (
              <StyledInput 
                fluid
                key={index}
                label={"Slider " + (index + 1)}
                name={"pages.profile.slider." + index}
                value={profile.slider[index]}
                onChange={updateJson} />
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
            onChange={updateJson} />
          {profile.profile.text.map((item, index) => {
            return (
              <StyledInput 
                fluid
                key={index}
                label={"List Item " + (index + 1)}
                name={"pages.profile.profile.text." + index}
                value={profile.profile.text[index]}
                onChange={updateJson} />
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
                  onChange={updateJson} />
                <StyledInput 
                  fluid
                  key={index + "-blurb"}
                  label={"Metric " + (index + 1) + " Blurb"}
                  name={"pages.profile.metrics." + index + ".blurb"}
                  value={profile.metrics[index].blurb}
                  onChange={updateJson} />
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