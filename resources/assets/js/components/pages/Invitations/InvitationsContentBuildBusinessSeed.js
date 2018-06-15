//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Tab } from 'semantic-ui-react'
import Blocks from '../../editors/maven/MavenBlocks'
import Head from '../../editors/maven/MavenHead'
import Page from '../../editors/maven/MavenPage'
import Pages from '../../editors/maven/MavenPages'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuildBusinessSeed extends Component {

  static propTypes = {
    business: object,
    seed: object
  }

  static defaultProps = {
    business: {},
    seed: {
      head: null,
      pages: null,
      blocks: null
    }
  }

  setPanes = () => {
    const { business, seed, updateSeed } = this.props
    let panes = []
    // Head
    panes.push({
      menuItem: "Head",
      render: () => 
        <Head
          head={seed.head} 
          update={updateSeed}/>
    })
    // Blocks
    panes.push({
      menuItem: "Blocks",
      render: () => 
        <Blocks 
          blocks={seed.blocks} 
          update={updateSeed}/>
    })
    // Pages
    panes.push({
      menuItem: "Pages",
      render: () => 
        <Pages 
          pages={seed.pages} 
          update={updateSeed}/>
    })
    _.map(seed.pages, (page, index) => {
      if(page.visible) {
        panes.push({
          menuItem: "   +    " + _.capitalize(index),
          render: () => 
            <Page 
              page={index} 
              pageSeed={page} 
              update={updateSeed}/>
        })
      }
    })
    return panes
  }

  render() {
    const panes = this.setPanes()
    return (
      <Container>
        <Tab 
          menu={{fluid: true, vertical: true, tabular: true}} 
          panes={panes}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin-top: 2vh;
`
