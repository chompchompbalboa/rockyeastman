//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash'

import colors from '../../styles/colors'
import layout from '../../styles/layout'

import Arrows from '../lib/Arrows'
import Navigation from '../lib/Navigation'
import Tiles from '../lib/Tiles'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
class Home extends Component {

  state = {
    activeTile: 0,
    previouslyActiveTile: null
  }

  links = [
    {text: "Redline Law Office", slug: ""},
    {text: "Areas of Practice", slug: "areas-of-practice"},
    {text: "About Anita", slug: "about-anita"},
    {text: "Resources", slug: "resources"},
    {text: "Initial Consultation", slug: "initial-consultation"}
  ]

  componentWillMount = () => {
    const slug = _.last(location.href.split("/"))
    const index = _.findIndex(this.links, ['slug', slug])
    const activeTile = (index === -1 ? 0 : index)
    this.setState({
      activeTile: activeTile
    })
  }

  changeActiveTile = (e, newActiveTile) => {
    e.preventDefault();
    const href = "/preview/redline-law/" + this.links[newActiveTile].slug
    history.pushState(null, null, href)
    const { activeTile } = this.state
    this.setState({
      activeTile: newActiveTile,
      previouslyActiveTile: activeTile
    })
  }

  render() {
    const { activeTile, previouslyActiveTile } = this.state
    return (
      <Container>
        <Navigation 
          activeTile={activeTile}
          backgroundColor={colors.navigationBackground}
          changeActiveTile={this.changeActiveTile}
          links={this.links}
          navigationHeight={layout.navigationHeight}
          previouslyActiveTile={previouslyActiveTile} />
        <Tiles
          activeTile={activeTile}
          backgroundColor={colors.tilesBackground}
          changeActiveTile={this.changeActiveTile}
          navigationHeight={layout.navigationHeight}
          previouslyActiveTile={previouslyActiveTile}/>
        <Arrows
          activeTile={activeTile}
          changeActiveTile={this.changeActiveTile}
          tileCount={this.links.length}/>
      </Container>
    )
  }
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
`

export default Home