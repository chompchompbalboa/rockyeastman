//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Divider, Header, Input as SemanticUIInput, Segment, Tab } from 'semantic-ui-react'
import ListActions from '../../lib/ListActions/ListActions'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenBlocks extends Component {

  render() {
    const { blocks, update } = this.props
    if(blocks) {
      return (
        <Tab.Pane>

        <Segment>
          <Header as="h4">Nav</Header>
          {blocks.nav.links.map((item, index) => {
            return (
              <HorizontalContainer key={index}>
                <StyledInput 
                  key={index + "-text"}
                  label={"Link " + (index + 1) + " Text"}
                  name={"blocks.nav.links." + index + ".text"}
                  value={blocks.nav.links[index].text}
                  onChange={update} 
                  style={{width: "45%"}}/>
                <StyledInput 
                  key={index + "-href"}
                  label={"Href"}
                  name={"blocks.nav.links." + index + ".href"}
                  value={blocks.nav.links[index].href}
                  onChange={update}
                  style={{width: "33%"}}/>
                <ListActions
                  index={index}
                  itemTemplate={{href: "", text: ""}}
                  name="blocks.nav.links"
                  list={blocks.nav.links}
                  onChange={update} 
                  />
              </HorizontalContainer>
            )
          })}
          <HorizontalContainer>
            <StyledInput
              label="Big Link Text"
              name="blocks.nav.bigLink.text"
              value={blocks.nav.bigLink.text}
              onChange={update}
              style={{width: "49%"}}/>
            <StyledInput
              label="Big Link Href"
              name="blocks.nav.bigLink.href"
              value={blocks.nav.bigLink.href}
              onChange={update}
              style={{width: "49%"}}/>
          </HorizontalContainer>
        </Segment>

        <Segment>
          <Header as="h4">Call To Action</Header>
          <StyledInput 
            fluid
            label="Call"
            name="blocks.callToAction.call"
            value={blocks.callToAction.call}
            onChange={update} />
          <StyledInput 
            fluid
            label="Header"
            name="blocks.callToAction.header"
            value={blocks.callToAction.header}
            onChange={update} />
          <StyledInput 
            fluid
            label="Text"
            name="blocks.callToAction.text"
            value={blocks.callToAction.text}
            onChange={update} />
          <StyledInput 
            fluid
            label="Link Text"
            name="blocks.callToAction.link.text"
            value={blocks.callToAction.link.text}
            onChange={update} />
          <StyledInput 
            fluid
            label="Link Href"
            name="blocks.callToAction.link.href"
            value={blocks.callToAction.link.href}
            onChange={update} />
        </Segment>

        <Segment>
          <Header as="h4">Footer</Header>
          <StyledInput 
            fluid
            label="Big Text"
            name="blocks.footer.bigText"
            value={blocks.footer.bigText}
            onChange={update} />
          {blocks.footer.links.map((item, index) => {
            return (
              <HorizontalContainer key={index}>
                <StyledInput 
                  key={index + "-text"}
                  label={"Link " + (index + 1) + " Text"}
                  name={"blocks.footer.links." + index + ".text"}
                  value={blocks.footer.links[index].text}
                  onChange={update} 
                  style={{width: "49%"}}/>
                <StyledInput 
                  key={index + "-href"}
                  label={"Link " + (index + 1) + " Href"}
                  name={"blocks.footer.links." + index + ".href"}
                  value={blocks.footer.links[index].href}
                  onChange={update}
                  style={{width: "49%"}}/>
              </HorizontalContainer>
            )
          })}
          <Divider section/>
          <StyledInput 
            fluid
            label="Call"
            name="blocks.footer.contact.call"
            value={blocks.footer.contact.call}
            onChange={update} />
          <StyledInput 
            fluid
            label="Visit"
            name="blocks.footer.contact.visit"
            value={blocks.footer.contact.visit}
            onChange={update} />
          <StyledInput 
            fluid
            label="Email"
            name="blocks.footer.contact.email"
            value={blocks.footer.contact.email}
            onChange={update} />
        </Segment>

        </Tab.Pane>
      )
    }
    else {
      return <Tab.Pane />
    }
  }
}

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const StyledInput = styled(SemanticUIInput)`
  margin: 1.5vh 0 0 0;
`

const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`