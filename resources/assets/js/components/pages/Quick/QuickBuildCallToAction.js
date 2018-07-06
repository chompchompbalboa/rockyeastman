//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

import { Checkbox, Dropdown, Input } from 'semantic-ui-react'
import ListActions from '../../lib/ListActions/ListActions'
import QuickBuildCollapsible from './QuickBuildCollapsible'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickBuildEmail extends Component {

  static propTypes = {
    callToAction: object,
    actions: object
  }

  render() {
    const { 
      callToAction, 
      actions 
    } = this.props

    return (
      <QuickBuildCollapsible header="Call To Action">
        <StyledInput 
          fluid
          label="Call"
          name="build.seed.blocks.callToAction.call"
          value={callToAction.call === null ? "" : callToAction.call}
          onChange={actions.update} />
        <StyledInput 
          fluid
          label="Header"
          name="build.seed.blocks.callToAction.header"
          value={callToAction.header === null ? "" : callToAction.header}
          onChange={actions.update} />
        <StyledInput 
          fluid
          label="Text"
          name="build.seed.blocks.callToAction.text"
          value={callToAction.text === null ? "" : callToAction.text}
          onChange={actions.update} />
        <StyledInput 
          fluid
          label="Link Text"
          name="build.seed.blocks.callToAction.link.text"
          value={callToAction.link.text === null ? "" : callToAction.link.text}
          onChange={actions.update} />
        <StyledInput 
          fluid
          label="Link Href"
          name="build.seed.blocks.callToAction.link.href"
          value={callToAction.link.href === null ? "" : callToAction.link.href}
          onChange={actions.update} />
      </QuickBuildCollapsible>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledInput = styled(Input)`
  margin: 0.5vh 1vw 0.5vh 0;
  width: 100%
`
