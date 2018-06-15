//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, object, shape, string } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import clipboard from '../../../helpers/clipboard'

import { Button, Dropdown, Form, Header, Input, Segment, Tab, TextArea } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentSendInvitationMessage extends Component {

  static propTypes = {
    active: object,
    change: object,
    email: shape({
      message: string,
      templates: array
    })
  }

  convertEmailTemplatesToOptions = (templates) => {
    return templates.map((template, index) => {
      return {
        value: index, text: _.capitalize(template). replace(".blade.php", "")
      }
    })
  }

  copyMessageToClipboard = () => {
    clipboard.copyInputContents(this.messageTextarea.ref)
  }

  render() {
    const { active, email, change } = this.props
    const options = this.convertEmailTemplatesToOptions(email.templates)
    const value = (options[active.emailTemplate] ? options[active.emailTemplate].value : "" )
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Template</Header>
          <Dropdown
          fluid search selection
          name="emailTemplate"
          options={options}
          value={value}
          onChange={(e, data) => change.active(e, data)}/>
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
          <HorizontalContainer>
            <Header as="h4">Message</Header>
            <Button onClick={this.copyMessageToClipboard}>Copy Message</Button>
          </HorizontalContainer>
          <Form>
            <TextArea 
              ref={c => this.messageTextarea = c}
              autoHeight
              name="message"
              value={email.message}
              onChange={change.email}/>
          </Form>
        </Segment>

      </Tab.Pane>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div``

const HorizontalContainer = styled.div`
  padding: 1vh 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`