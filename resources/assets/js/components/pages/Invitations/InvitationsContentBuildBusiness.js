//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { number, object, shape, string } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Input } from 'semantic-ui-react'
import BuildBusinessInfo from './InvitationsContentBuildBusinessInfo'
import BuildBusinessSeed from './InvitationsContentBuildBusinessSeed'
import StatusBar from './InvitationsContentStatusBar'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuildBusiness extends Component {

  state = {
    business: {
      id: this.props.business.id,
      email: this.props.business.email,
      name: this.props.business.name,
      slug: this.props.business.slug,
      status: this.props.business.status,
      website: this.props.business.website
    },
    seed: this.props.seed,
    status: "READY"
  }

  static propTypes = {
    business: shape({
      id: number,
      email: string,
      name: string,
      slug: string,
      status: string,
      website: string
    }),
    seed: object
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      business: {
        id: nextProps.business.id,
        email: nextProps.business.email,
        name: nextProps.business.name,
        slug: this.a.setSlug(nextProps.business.slug, nextProps.business.name),
        status: nextProps.business.status,
        website: nextProps.business.website
      },
      seed: nextProps.seed
    }
  }

  componentDidUpdate = (prevProps, prevState) => {
    const { business } = this.state
    if(prevState.business.id !== business.id) {
      //const slugValue = (business.slug && business.slug !== null ? business.slug : "")
      //const previewUrl = "http://" + location.hostname + "/preview/" + slugValue
      //open(previewUrl, "_blank")
      //open(business.website, "_blank")
    }
  }

  componentWillUnmount = () => {
    clearTimeout(this.timeout)
  }

  static setSlug = (slug, name) => {
    if(slug && slug !== null) {
      return slug
    }
    else {
      if (typeof slug === "undefined") {
        return ""
      }
      else {
        return _.lowerCase(name).replace(/ /g,"-")
      }
    }
  }

  // Initialize the timeout variable for the update functions below
  timeout = null

  updateBusiness = (e, data) => {
    const { business } = this.state
    let newBusiness = Object.assign({}, business)
    newBusiness[data.name] = data.value
    clearTimeout(this.timeout)
    this.setState({
      business: newBusiness,
      status: "UNSAVED"
    })
    this.timeout = setTimeout(this.save, 2500)
  }

  updateSeed = (e, data) => {
    clearTimeout(this.timeout)
    const { seed } = this.state
    const value = (typeof data.value !== "undefined" ? data.value : data.checked)
    let newSeed = _.set(Object.assign({}, seed), data.name, value)
    this.setState({
      seed: newSeed,
      status: "UNSAVED"
    })
    this.timeout = setTimeout(this.save, 2500)
  }

  save = () => {
    const { business, seed } = this.state
    this.setState({
      status: "SAVING"
    })

    fetch('/api/invitations/businesses/' + business.id, {
      method: "PUT",
      body: JSON.stringify({
        business: business,
        seed: {json: seed}
      }),
      headers: {
      'content-type': 'application/json'
    }}).then(response => {
        return response.json()
      })
      .then(response => {
        if(response.success) {
          this.setState({status: "SAVED"})
        }
        else {
          this.setState({status: "ERROR"})
        }
      })
  }

  render() {
    const { business, seed, status } = this.state
    return (
      <Container>
        <StatusBar
          status={status}
        />
        <BuildBusinessInfo
          business={business}
          updateBusiness={this.updateBusiness}/>
        <BuildBusinessSeed
          business={business}
          seed={seed}
          updateSeed={this.updateSeed}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin-top: 2vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`