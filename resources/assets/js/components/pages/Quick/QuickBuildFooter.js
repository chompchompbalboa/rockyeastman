//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

import { Divider, Input } from 'semantic-ui-react'
import ListActions from '../../lib/ListActions/ListActions'
import QuickBuildCollapsible from './QuickBuildCollapsible'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickBuildFooter extends Component {

  static propTypes = {
    footer: object,
    actions: object
  }

  render() {
    const { 
      footer, 
      actions 
    } = this.props

    return (
      <QuickBuildCollapsible header="Footer">
        <StyledInput 
          fluid
          label="Big Text"
          name="build.seed.blocks.footer.bigText"
          value={footer.bigText === null ? "" : footer.bigText}
          onChange={actions.update} />
        {footer.links.map((item, index) => {
          return (
            <HorizontalContainer key={index}>
              <StyledInput 
                key={index + "-text"}
                label={"Link " + (index + 1) + " Text"}
                name={"build.seed.blocks.footer.links." + index + ".text"}
                value={footer.links[index].text === null ? "" : footer.links[index].text}
                onChange={actions.update} 
                style={{width: "49%"}}/>
              <StyledInput 
                key={index + "-href"}
                label={"Link " + (index + 1) + " Href"}
                name={"build.seed.blocks.footer.links." + index + ".href"}
                value={footer.links[index].href === null ? "" : footer.links[index].href}
                onChange={actions.update}
                style={{width: "49%"}}/>
            </HorizontalContainer>
          )
        })}
        <Divider section/>
        <StyledInput 
          fluid
          label="Call"
          name="build.seed.blocks.footer.contact.call"
          value={footer.contact.call}
          onChange={actions.update} />
        <StyledInput 
          fluid
          label="Visit"
          name="build.seed.blocks.footer.contact.visit"
          value={footer.contact.visit}
          onChange={actions.update} />
        <StyledInput 
          fluid
          label="Email"
          name="build.seed.blocks.footer.contact.email"
          value={footer.contact.email}
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
