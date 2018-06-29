//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, object } from 'prop-types'
import styled from 'styled-components'

import QuickBuildBusinessInfo from './QuickBuildBusinessInfo'
import QuickBuildCommands from './QuickBuildCommands'
import QuickBuildFooter from './QuickBuildFooter'
import QuickBuildHeader from './QuickBuildHeader'
import QuickBuildHeadlines from './QuickBuildHeadlines'
import QuickBuildNavigation from './QuickBuildNavigation'
import QuickBuildServices from './QuickBuildServices'
import QuickBuildSplash from './QuickBuildSplash'
import QuickBuildTestimonials from './QuickBuildTestimonials'
import QuickBuildTileOne from './QuickBuildTileOne'
import QuickBuildTileTwo from './QuickBuildTileTwo'
import QuickTabPane from './QuickTabPane'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickBuild extends Component {

  state = {
    currentStep: 0
  }

  static propTypes = {
    business: object,
    seed: object,
    status: object,
    update: func
  }

  steps = [
    {render: () => <QuickBuildBusinessInfo />},
    {render: () => <QuickBuildNavigation />},
    {render: () => <QuickBuildSplash />},
    {render: () => <QuickBuildServices />},
    {render: () => <QuickBuildHeadlines />},
    {render: () => <QuickBuildFooter />}
  ]

  // Accept or reject a business
  updateBusinessStatus = (newStatus) => {
    const { business, status, update } = this.props
    // Update the status to "Sending..."
    update("", {
      name: "build.status." + newStatus,
      value: "SENDING"
    }, true)
    // Send the data to the QuickController
    fetch('/api/quick/status/' + newStatus + '/' + business.id, {
      method: "PUT",
      body: JSON.stringify({ nextStatus: status.dropdown }),
      headers: {
      'content-type': 'application/json'
    }}).then(response => {
          return response.json()
        })
      .then(response => {
        update("", {
          name: "build.status." + newStatus,
          value: response.message
        }, true)
        update("", {
          name: "build.business",
          value: response.nextBusiness
        }, true)
        update("", {
          name: "build.seed",
          value: response.nextSeed
        }, true)
        update("", {
          name: "counts",
          value: response.nextCounts
        }, true)
      })
  }

  render() {
    const { business, seed, status, update } = this.props
    const actions = {
      updateBusinessStatus: this.updateBusinessStatus,
      update: update,
      status: status,
    }
    return (
      <QuickTabPane>
        <QuickBuildHeader
        business={business}
        actions={actions}/>
        {seed && 
          <React.Fragment>
            <QuickBuildBusinessInfo 
              business={business}
              actions={actions}/>
            <QuickBuildNavigation
              nav={seed.blocks.nav}
              actions={actions}/>
            <QuickBuildSplash
              splash={seed.pages.home.splash}
              actions={actions}/>
            <QuickBuildServices
              services={seed.pages.home.list}
              actions={actions}/>
            <QuickBuildTileOne
              tile={seed.pages.home.tiles[0]}
              actions={actions}/>
            <QuickBuildTestimonials
              testimonials={seed.pages.home.testimonials}
              actions={actions}/>
            <QuickBuildTileTwo
              tile={seed.pages.home.tiles[1]}
              actions={actions}/>
            <QuickBuildHeadlines
              headlines={seed.pages.home.services}
              actions={actions}/>
            <QuickBuildFooter
              footer={seed.blocks.footer}
              actions={actions}/>
          </React.Fragment>
        }
      </QuickTabPane>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
`
