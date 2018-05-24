//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Tab, Dropdown } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentSendInvitationTemplate extends Component {

  static propTypes = {
    emailTemplates: array
  }

  convertEmailTemplatesToOptions = (templates) => {
    return templates.map((template, index) => {
      return {
        value: index, text: _.capitalize(template)
      }
    })
  }

  render() {
    const { active, emailTemplates, updateActive } = this.props
    const options = this.convertEmailTemplatesToOptions(emailTemplates)
    const value = (options[active] ? options[active].value : "" )
    if(true) {
      return (
        <Tab.Pane>
          <Dropdown
          fluid search selection
          options={options}
          value={value}
          onChange={updateActive}/>
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