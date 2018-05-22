//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Divider, Header, Input as SemanticUIInput, Segment, Tab } from 'semantic-ui-react'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPageServices extends Component {

  render() {
    const { services, updateJson } = this.props
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Splash</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.services.splash.header"
            value={services.splash.header}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Line 1"
            name="pages.services.splash.text.0"
            value={services.splash.text[0]}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Line 2"
            name="pages.services.splash.text.1"
            value={services.splash.text[1]}
            onChange={updateJson} />
        </Segment>

        <Segment>
          <Header as="h4">Services</Header>
          {services.services.map((service, index) => {
            const lastIndex = services.services.length - 1
            return (
              <React.Fragment key={index}>
                <StyledInput 
                  fluid
                  key={index + "-header"}
                  label={"Service " + (index + 1) + " Header"}
                  name={"pages.services.services." + index + ".header"}
                  value={services.services[index].header}
                  onChange={updateJson} />
                <StyledInput 
                  fluid
                  key={index + "-subheader"}
                  label={"Service " + (index + 1) + " Subheader"}
                  name={"pages.services.services." + index + ".subheader"}
                  value={services.services[index].subheader}
                  onChange={updateJson} />
                  {service.list.map((item, listIndex) => {
                    return (
                      <StyledInput 
                        fluid
                        key={index + "-" + listIndex}
                        label={"Service " + (index + 1) + " List Item " + (listIndex + 1)}
                        name={"pages.services.services.list." + listIndex}
                        value={item}
                        onChange={updateJson} />
                    )
                  })}
                  <StyledInput 
                    fluid
                    key={index + "-buttonText"}
                    label={"Service " + (index + 1) + " Button Text"}
                    name={"pages.services.services." + index + ".button.text"}
                    value={services.services[index].button.text}
                    onChange={updateJson} />
                  <StyledInput 
                    fluid
                    key={index + "-buttonHref"}
                    label={"Service " + (index + 1) + " Button Href"}
                    name={"pages.services.services." + index + ".button.href"}
                    value={services.services[index].button.href}
                    onChange={updateJson} />
                  {service.text.map((item, textIndex) => {
                    return (
                      <StyledInput 
                        fluid
                        key={index + "-" + textIndex}
                        label={"Service " + (index + 1) + " Text " + (textIndex + 1)}
                        name={"pages.services.services.text." + textIndex}
                        value={item}
                        onChange={updateJson} />
                    )
                  })}
                  {index !== lastIndex && <Divider section/>}
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