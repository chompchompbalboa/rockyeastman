//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, shape, string } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Dropdown, Form, Header, Input, Segment, Tab, TextArea } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentSendInvitationTemplate extends Component {

  static propTypes = {
    email: shape({
      message: string,
      templates: array
    })
  }

  convertEmailTemplatesToOptions = (templates) => {
    return templates.map((template, index) => {
      return {
        value: index, text: _.capitalize(template).replace(".blade.php", "")
      }
    })
  }

  render() {
    const { active, email, change } = this.props
    const options = this.convertEmailTemplatesToOptions(email.templates)
    const value = (options[active] ? options[active].value : "" )
    if(true) {
      return (
        <Tab.Pane>

          <Segment>
            <Header as="h4">Template</Header>
            <Dropdown
            fluid search selection
            options={options}
            value={value}
            onChange={() => change.activeEmailTemplate()}/>
          </Segment>

          <Segment>
            <Header as="h4">Subject Line</Header>
            <Form>
              <Input 
                fluid
                name="subjectLine"
                value={email.subjectLine}
                onChange={(e, data) => change.email(e, data)}/>
            </Form>
          </Segment>

          <Segment>
            <Header as="h4">Message</Header>
            <Form>
              <TextArea 
                autoHeight
                name="message"
                value={email.message}
                onChange={change.email}/>
            </Form>
          </Segment>

        </Tab.Pane>
      )
    }
    else {
      return <Tab.Pane />
    }
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``