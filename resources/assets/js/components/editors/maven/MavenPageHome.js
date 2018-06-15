//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Header, Divider, Input as SemanticUIInput, Segment, Tab } from 'semantic-ui-react'
import CMSImage from '../../lib/CMS/CMSImage'
import ListActions from '../../lib/ListActions/ListActions'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPageHome extends Component {

  render() {
    const { home, update } = this.props
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Splash</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.home.splash.header"
            value={home.splash.header}
            onChange={update} />
          {home.splash.text.map((item, index) => {
            return (
              <HorizontalContainer key={index}>
                <StyledInput 
                  label={"Splash " + (index + 1)}
                  name={"pages.home.splash.text." + index}
                  value={home.splash.text[index]}
                  onChange={update} 
                  style={{width: "78%"}}/>
                <ListActions
                  index={index}
                  itemTemplate=""
                  name="pages.home.splash.text"
                  list={home.splash.text}
                  onChange={update} />
              </HorizontalContainer>
            )
          })}
        </Segment>

        <Segment>
          <Header as="h4">List</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.home.list.header"
            value={home.list.header}
            onChange={update} />
          {home.list.listItems.map((item, index) => {
            return (
              <HorizontalContainer key={index}>
                <StyledInput 
                  label={"List Item " + (index + 1)}
                  name={"pages.home.list.listItems." + index}
                  value={home.list.listItems[index]}
                  onChange={update} 
                  style={{width: "78%"}}/>
                <ListActions
                  index={index}
                  itemTemplate=""
                  name="pages.home.list.listItems"
                  list={home.list.listItems}
                  onChange={update} />
              </HorizontalContainer>
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
            onChange={update} />
          <StyledInput 
            fluid
            label={"Text "}
            name={"pages.home.tiles.0.text"}
            value={home.tiles[0].text}
            onChange={update} />
          <StyledInput 
            fluid
            label="Link Text"
            name="pages.home.tiles.0.linkText"
            value={home.tiles[0].linkText}
            onChange={update} />
          <StyledInput 
            fluid
            label="Link Href"
            name="pages.home.tiles.0.linkHref"
            value={home.tiles[0].linkHref}
            onChange={update} />
          <CMSImage
            src={home.tiles[0].img}
            label="Image"
            name="pages.home.tiles.0.img"
            onChange={update} />
        </Segment>

        <Segment>
          <Header as="h4">Tile Two</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.home.tiles.1.header"
            value={home.tiles[1].header}
            onChange={update} />
          <StyledInput 
            fluid
            label={"Text "}
            name={"pages.home.tiles.1.text"}
            value={home.tiles[1].text}
            onChange={update} />
          <StyledInput 
            fluid
            label="Link Text"
            name="pages.home.tiles.1.linkText"
            value={home.tiles[1].linkText}
            onChange={update} />
          <StyledInput 
            fluid
            label="Link Href"
            name="pages.home.tiles.1.linkHref"
            value={home.tiles[1].linkHref}
            onChange={update} />
          <StyledInput 
            fluid
            label="Image"
            name="pages.home.tiles.1.img"
            value={home.tiles[1].img}
            onChange={update} />
          <CMSImage
            src={home.tiles[1].img}
            label="Image"
            name="pages.home.tiles.1.img"
            onChange={update} />
        </Segment>

        <Segment>
          <Header as="h4">Testimonials</Header>
          {home.testimonials.map((testimonial, index) => {
            return (
              <React.Fragment key={index}>
                <Header as="h5">Testimonial {(index + 1) + ""}</Header>
                <StyledInput 
                  fluid
                  key={index + "-text"}
                  label={"Text"}
                  name={"pages.home.testimonials." + index + ".text"}
                  value={home.testimonials[index].text}
                  onChange={update} />
                <StyledInput 
                  fluid
                  key={index + "-attribution"}
                  label={"Attribution"}
                  name={"pages.home.testimonials." + index + ".attribution"}
                  value={home.testimonials[index].attribution}
                  onChange={update} />
                <Divider />
              </React.Fragment>
            )
          })}
        </Segment>

        <Segment>
          <Header as="h4">Services</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.home.services.header"
            value={home.services.header}
            onChange={update} />
          {home.services.tiles.map((service, index) => {
            return (
              <React.Fragment key={index}>
                <Header as="h5">Service {(index + 1) + ""}</Header>
                <StyledInput 
                  fluid
                  label={"Header"}
                  name={"pages.home.services.tiles." + index + ".header"}
                  value={home.services.tiles[index].header}
                  onChange={update} />
                <HorizontalContainer>
                  <StyledInput 
                    label={"Top Link Text"}
                    name={"pages.home.services.tiles." + index + ".topLink.text"}
                    value={home.services.tiles[index].topLink.text}
                    onChange={update}
                    style={{width: "49%"}} />
                  <StyledInput 
                    label={"Top Link Href"}
                    name={"pages.home.services.tiles." + index + ".topLink.href"}
                    value={home.services.tiles[index].topLink.href}
                    onChange={update}
                    style={{width: "49%"}} />
                </HorizontalContainer>
                <StyledInput 
                  fluid
                  label={"Blurb"}
                  name={"pages.home.services.tiles." + index + ".blurb"}
                  value={home.services.tiles[index].blurb}
                  onChange={update} />
                <HorizontalContainer>
                  <StyledInput 
                    label={"Bottom Link Text"}
                    name={"pages.home.services.tiles." + index + ".bottomLink.text"}
                    value={home.services.tiles[index].bottomLink.text}
                    onChange={update}
                    style={{width: "49%"}} />
                  <StyledInput 
                    label={"Bottom Link Href"}
                    name={"pages.home.services.tiles." + index + ".bottomLink.href"}
                    value={home.services.tiles[index].bottomLink.href}
                    onChange={update}
                    style={{width: "49%"}} />
                </HorizontalContainer>
                <Divider />
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

const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`