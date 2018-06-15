//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Input, Tab } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenHead extends Component {

  render() {
    const { head, update } = this.props
    if(head) {
      return (
        <Tab.Pane>
          <Input
            fluid
            label="Title"
            name="head.title"
            value={head.title}
            onChange={update}/>
        </Tab.Pane>
      )
    }
    return (
      <Tab.Pane />
    )
  }
}
