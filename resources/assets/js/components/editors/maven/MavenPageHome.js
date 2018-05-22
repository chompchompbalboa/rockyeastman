//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Header, Input as SemanticUIInput, Segment, Tab } from 'semantic-ui-react'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPageHome extends Component {

  render() {
    const { home, updateJson } = this.props
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Splash</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.home.splash.header"
            value={home.splash.header}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Line 1"
            name="pages.home.splash.text.0"
            value={home.splash.text[0]}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Line 2"
            name="pages.home.splash.text.1"
            value={home.splash.text[1]}
            onChange={updateJson} />
        </Segment>

        <Segment>
          <Header as="h4">List</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.home.list.header"
            value={home.list.header}
            onChange={updateJson} />
          {home.list.listItems.map((item, index) => {
            return (
              <StyledInput 
                fluid
                key={index}
                label={"List Item " + (index + 1)}
                name={"pages.home.list.listItems." + index}
                value={home.list.listItems[index]}
                onChange={updateJson} />
            )
          })}
        </Segment>

        <Segment>
          <Header as="h4">Tile One</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.home.tiles.0.header"
            value={home.tiles[0].header}
            onChange={updateJson} />
          {home.tiles[0].text.map((item, index) => {
            return (
              <StyledInput 
                fluid
                key={index}
                label={"Text " + (index + 1)}
                name={"pages.home.tiles.0.text." + index}
                value={home.tiles[0].text[index]}
                onChange={updateJson} />
            )
          })}
          <StyledInput 
            fluid
            label="Link Text"
            name="pages.home.tiles.0.linkText"
            value={home.tiles[0].linkText}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Link Href"
            name="pages.home.tiles.0.linkHref"
            value={home.tiles[0].linkHref}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Image"
            name="pages.home.tiles.0.img"
            value={home.tiles[0].img}
            onChange={updateJson} />
        </Segment>

        <Segment>
          <Header as="h4">Tile Two</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.home.tiles.1.header"
            value={home.tiles[1].header}
            onChange={updateJson} />
          {home.tiles[1].text.map((item, index) => {
            return (
              <StyledInput 
                fluid
                key={index}
                label={"Text " + (index + 1)}
                name={"pages.home.tiles.1.text." + index}
                value={home.tiles[1].text[index]}
                onChange={updateJson} />
            )
          })}
          <StyledInput 
            fluid
            label="Link Text"
            name="pages.home.tiles.1.linkText"
            value={home.tiles[1].linkText}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Link Href"
            name="pages.home.tiles.1.linkHref"
            value={home.tiles[1].linkHref}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Image"
            name="pages.home.tiles.1.img"
            value={home.tiles[1].img}
            onChange={updateJson} />
        </Segment>

        <Segment>
          <Header as="h4">Testimonials</Header>
          {home.testimonials.map((testimonial, index) => {
            return (
              <React.Fragment key={index}>
                <StyledInput 
                  fluid
                  key={index + "-text"}
                  label={"Testimonial " + (index + 1) + " Text"}
                  name={"pages.home.testimonials." + index + ".text"}
                  value={home.testimonials[index].text}
                  onChange={updateJson} />
                <StyledInput 
                  fluid
                  key={index + "-attribution"}
                  label={"Testimonial " + (index + 1) + " Attribution"}
                  name={"pages.home.testimonials." + index + ".attribution"}
                  value={home.testimonials[index].attribution}
                  onChange={updateJson} />
              </React.Fragment>
            )
          })}
        </Segment>
      </Tab.Pane>
    )
  }
}

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const StyledInput = styled(SemanticUIInput)`
  margin: 1.5vh 0 0 0;
`