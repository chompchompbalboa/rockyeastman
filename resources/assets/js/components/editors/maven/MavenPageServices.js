//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Divider, Form, Header, Input as SemanticUIInput, Segment, Tab, TextArea } from 'semantic-ui-react'
import ListActions from '../../lib/ListActions/ListActions'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPageServices extends Component {

  render() {
    const { services, update } = this.props
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Splash</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.services.splash.header"
            value={services.splash.header}
            onChange={update} />
          <StyledInput 
            fluid
            label="Line 1"
            name="pages.services.splash.text.0"
            value={services.splash.text[0]}
            onChange={update} />
          <StyledInput 
            fluid
            label="Line 2"
            name="pages.services.splash.text.1"
            value={services.splash.text[1]}
            onChange={update} />
        </Segment>

        <Segment>
          <Header as="h4">Services</Header>
          {services.services.map((service, index) => {
            const lastIndex = services.services.length - 1
            return (
              <React.Fragment key={index}>
                <HorizontalContainer>
                  <Header as="h5">{services.services[index].header}</Header>
                  <ListActions 
                    index={index}
                    itemTemplate={{
                      header: "",
                      subheader: "",
                      list: [""],
                      button: {
                        text: "",
                        href: ""
                      },
                      text: [""]
                    }}
                    name="pages.services.services"
                    list={services.services}
                    onChange={update} />
                </HorizontalContainer>
                <StyledInput 
                  fluid
                  key={index + "-header"}
                  label={"Service " + (index + 1) + " Header"}
                  name={"pages.services.services." + index + ".header"}
                  value={services.services[index].header}
                  onChange={update} />
                <StyledInput 
                  fluid
                  key={index + "-subheader"}
                  label={"Service " + (index + 1) + " Subheader"}
                  name={"pages.services.services." + index + ".subheader"}
                  value={services.services[index].subheader}
                  onChange={update} />
                  {service.list.map((item, listIndex) => {
                    return (
                      <HorizontalContainer key={listIndex}>
                        <StyledInput
                          label={"Service " + (index + 1) + " List Item " + (listIndex + 1)}
                          name={"pages.services.services." + index + ".list." + listIndex}
                          value={item}
                          onChange={update}
                          style={{width: "78%"}}/>
                        <ListActions 
                          index={listIndex}
                          itemTemplate={""}
                          name={"pages.services.services." + index + ".list"}
                          list={services.services[index].list}
                          onChange={update} />
                      </HorizontalContainer>
                    )
                  })}
                  <StyledInput 
                    fluid
                    key={index + "-buttonText"}
                    label={"Service " + (index + 1) + " Button Text"}
                    name={"pages.services.services." + index + ".button.text"}
                    value={services.services[index].button.text}
                    onChange={update} />
                  <StyledInput 
                    fluid
                    key={index + "-buttonHref"}
                    label={"Service " + (index + 1) + " Button Href"}
                    name={"pages.services.services." + index + ".button.href"}
                    value={services.services[index].button.href}
                    onChange={update} />
                  {service.text.map((item, textIndex) => {
                    return (
                      <StyledForm key={index + "-" + textIndex}>
                        <TextArea
                          autoHeight
                          label={"Service " + (index + 1) + " Text " + (textIndex + 1)}
                          name={"pages.services.services." + index + ".text." + textIndex}
                          value={item}
                          onChange={update}/>
                      </StyledForm>
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

const StyledForm = styled(Form)`
  margin-top: 1.5vh;
`

const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`