//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import colors from '../../config/colors'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditorSegment extends Component {

  state = {
    contentVisible: this.props.startOpen
  }

  static propTypes = {
    alignItems: string,
    flexFlow: string,
    header: string,
    justifyContent: string
  }

  static defaultProps = {
    alignItems: "flex-start",
    flexFlow: "column nowrap",
    header: "Segment",
    justifyContent: "flex-start"
  }

  render () {
    const {
      alignItems,
      flexFlow,
      header,
      justifyContent,
      children
    } = this.props

    const { 
      contentVisible 
    } = this.state

    return (
      <Container>
        <Header
          contentVisible={contentVisible}
          onClick={() => this.setState({contentVisible: !contentVisible})}>
          {header}
        </Header>
        {
          contentVisible && 
          <Content 
            alignItems={alignItems}
            flexFlow={flexFlow}
            justifyContent={justifyContent}>
            {children}
          </Content>
        }
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin: 1vh 0;
  width: 100%;
  box-shadow: 1px 1px 8px rgb(150,150,150);
`

const Header = styled.div`
  cursor: pointer;
  user-select: none;
  width: 100%;
  padding: 1vh 0.5vw;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: white;
  background-color: ${colors.primary};
  border-radius: ${props => props.contentVisible ? "7.5px 7.5px 0 0" : "7.5px"};
`

const Content = styled.div`
  width: 100%;
  padding: 1vh 0.5vw;
  background-color: ${colors.light};
  border-radius: 0 0 7.5px 7.5px;
  display: flex;
  flex-flow: ${props => props.flexFlow};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`
