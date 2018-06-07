//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Tab } from 'semantic-ui-react'
import Actions from './InvitationsContentEditBusinessActions'
import Blocks from './editors/maven/MavenBlocks'
import Head from './editors/maven/MavenHead'
import Page from './editors/maven/MavenPage'
import Pages from './editors/maven/MavenPages'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentEditBusinessSeed extends Component {

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
    const { business, seed } = this.props
    let panes = []
    // Head
    panes.push({
      menuItem: "Head",
      render: () => 
        <Head
          head={seed.head} 
          updateJson={this.updateJson}/>
    })
    // Blocks
    panes.push({
      menuItem: "Blocks",
      render: () => 
        <Blocks 
          blocks={seed.blocks} 
          updateJson={this.updateJson}/>
    })
    // Pages
    panes.push({
      menuItem: "Pages",
      render: () => 
        <Pages 
          pages={seed.pages} 
          updateJson={this.updateJson}/>
    })
    _.map(seed.pages, (page, index) => {
      if(page.visible) {
        panes.push({
          menuItem: "   +    " + _.capitalize(index),
          render: () => 
            <Page 
              page={index} 
              pageSeed={page} 
              updateJson={this.updateJson}/>
        })
      }
    })
    // Actions
    panes.push({
      menuItem: "Actions",
      render: () => 
        <Actions 
          business={business}
          seed={seed}/>
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
