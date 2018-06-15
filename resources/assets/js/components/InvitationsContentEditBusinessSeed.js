//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
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

  state = {
    mostRecentlyFetched: 0,
    seed: {
      id: null,
      business_id: null,
      json: {
        head: null,
        pages: null,
        blocks: null
      }
    }
  }

  componentDidUpdate = () => {
    const { business: { id }} = this.props
    const { mostRecentlyFetched } = this.state
    if(id > 0 && mostRecentlyFetched !== id) {
      fetch('/api/invitations/businesses/' + id + '/seed')
        .then(response => {
          return response.json()
        }).then(seed => {
          this.setState({
            mostRecentlyFetched: id,
            seed: seed
          })
        })
    }
  }

  setPanes = () => {
    const { seed } = this.state
    const { business } = this.props
    let panes = []
    // Head
    panes.push({
      menuItem: "Head",
      render: () => 
        <Head
          business={business} 
          head={seed.json.head} 
          update={this.updateJson}/>
    })
    // Blocks
    panes.push({
      menuItem: "Blocks",
      render: () => 
        <Blocks 
          blocks={seed.json.blocks} 
          update={this.updateJson}/>
    })
    // Pages
    panes.push({
      menuItem: "Pages",
      render: () => 
        <Pages 
          pages={seed.json.pages} 
          update={this.updateJson}/>
    })
    _.map(seed.json.pages, (page, index) => {
      if(page.visible) {
        panes.push({
          menuItem: "   +    " + _.capitalize(index),
          render: () => 
            <Page 
              page={index} 
              pageSeed={page} 
              update={this.updateJson}/>
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

  updateJson = (e, data) => {
    const { seed: { id, business_id, json }} = this.state
    const value = (typeof data.value !== "undefined" ? data.value : data.checked)
    let newJson = _.set(Object.assign({}, json), data.name, value)
    this.setState({
      seed: {
        id: id,
        business_id: business_id,
        json: newJson
      }
    })
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
