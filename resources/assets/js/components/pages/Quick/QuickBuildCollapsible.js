//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool, string } from 'prop-types'
import styled from 'styled-components'

import clipboard from '../../../helpers/clipboard'

import { Header, Icon } from 'semantic-ui-react'
import QuickTabPaneContainer from './QuickTabPaneContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickBuildCollapsible extends Component {

  state = {
    collapsed: !this.props.startOpen
  }

  static propTypes = {
    header: string,
    startOpen: bool
  }

  static defaultProps = {
    startOpen: true
  }

  render() {
    const { children, header } = this.props
    const { collapsed } = this.state

    return (
      <QuickTabPaneContainer>
        <HeaderContainer onClick={() => this.setState({collapsed: !collapsed})}>
          <Header as="h3">{header}</Header>
        </HeaderContainer>
        {!collapsed && children}
      </QuickTabPaneContainer>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const HeaderContainer = styled.div`
  cursor: pointer;
  margin-bottom: 1vh;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`