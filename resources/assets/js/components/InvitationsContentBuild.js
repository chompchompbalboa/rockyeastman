//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Tab } from 'semantic-ui-react'
import Business from './InvitationsContentBuildBusiness'
import ChooseBusiness from './InvitationsContentChooseBusiness'
import Container from './InvitationsContentContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuild extends Component {

  state = {
    active: {
      business: null
    },
    businesses: []
  }
  
  defaultBusiness = {
    id: 0,
    email: "",
    website: ""
  }

  componentDidMount = () => {
    fetch('/api/invitations/businesses/uploaded')
      .then(response => {
        return response.json()
      })
      .then(businesses => {
        this.setState({
          businesses: businesses,
          active: {
            business: businesses[0].id
          }
        })
      })
  }

  changeActive = (e, data) => {
    let active = Object.assign({}, this.state.active)
    active[data.name] = data.value
    this.setState({
      active: active
    })
  }

  render() {
    const { active, businesses } = this.state
    const business = (active.business === null ? this.defaultBusiness : _.find(businesses, {id: active.business}))
    const change = {
      active: this.changeActive
    }
    return (
      <Container>
        <ChooseBusiness 
          active={active.business}
          businesses={businesses}
          changeActive={change.active}/>
        <Business 
          business={business}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
