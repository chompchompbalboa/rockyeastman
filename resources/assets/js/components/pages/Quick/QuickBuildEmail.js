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
    email: object,
    actions: object
  }

  render() {
    const { 
      email, 
      actions 
    } = this.props

    return (
      <QuickBuildCollapsible header="Email">
        <HorizontalContainer>
          <StyledInput
            fluid
            label="Subject"
            name="build.email.subject"
            value={email.subject === null ? "" : email.subject}
            onChange={actions.update}/>
          <StyledInput
            fluid
            label="Next Page"
            name="build.email.nextPage"
            value={email.nextPage === null ? "" : email.nextPage}
            onChange={actions.update}/>
          <Dropdown
            fluid selection
            label="Template"
            name="build.email.templates.active"
            options={email.templates.options}
            value={email.templates.active === null ? "default" : email.templates.active}
            onChange={(e, data) => actions.update(e, data, true)}/>
        </HorizontalContainer>
        <HorizontalContainer>
          <StyledInput
            fluid
            label="Year"
            name="build.email.time.year"
            value={email.time.year === null ? "" : email.time.year}
            onChange={actions.update}/>
          <StyledInput
            fluid
            label="Month"
            name="build.email.time.month"
            value={email.time.month === null ? "" : email.time.month}
            onChange={actions.update}/>
          <StyledInput
            fluid
            label="Day"
            name="build.email.time.day"
            value={email.time.day === null ? "" : email.time.day}
            onChange={actions.update}/>
          <StyledInput
            fluid
            label="Hour"
            name="build.email.time.hour"
            value={email.time.hour === null ? "" : email.time.hour}
            onChange={actions.update}/>
          <StyledInput
            fluid
            label="Minute"
            name="build.email.time.minute"
            value={email.time.minute === null ? "" : email.time.minute}
            onChange={actions.update}/>
          <Checkbox 
            name="build.email.time.now"
            checked={email.time.now === null ? false : email.time.now}
            onChange={(e, data) => actions.update(e, data, true)}/>
          <NowContainer>
            Now
          </NowContainer>
        </HorizontalContainer>
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

const NowContainer = styled.div`
  margin-left: 0.5vw;
`
