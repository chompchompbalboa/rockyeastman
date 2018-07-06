//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Segment } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickTabPaneContainer extends Component {

  static propTypes = {
    color: string
  }

  static defaultProps = {
    color: "blue"
  }

  render() {
    const { children, color } = this.props
    return (
      <Container
        color={color}>
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