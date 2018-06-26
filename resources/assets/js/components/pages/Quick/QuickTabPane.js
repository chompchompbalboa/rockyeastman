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
export default class QuickTabPane extends Component {

  render() {
    const { children } = this.props
    return (
      <StyledTabPane>
        {children}
      </StyledTabPane>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledTabPane = styled(Tab.Pane)`
`
