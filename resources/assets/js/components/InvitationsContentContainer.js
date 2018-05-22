//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { Tab } from 'semantic-ui-react'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentContainer extends Component {
  render() {
    const { children } = this.props
    return (
      <Tab.Pane>
        {children}
      </Tab.Pane>
    )
  }
}
