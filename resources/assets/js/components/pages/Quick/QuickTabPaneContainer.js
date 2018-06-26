//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'

import { Segment } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickTabPaneContainer extends Component {

  render() {
    const { children } = this.props
    return (
      <Container>
        {children}
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled(Segment)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`