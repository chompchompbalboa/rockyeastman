//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { number, shape, string } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Input } from 'semantic-ui-react'
import EditBusinessInfo from './InvitationsContentEditBusinessInfo'
import EditBusinessSeed from './InvitationsContentEditBusinessSeed'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentEditBusiness extends Component {

  state = {
    id: this.props.business.id,
    email: this.props.business.email,
    name: this.props.business.name,
    slug: this.props.business.slug,
    status: this.props.business.status,
    website: this.props.business.website
  }

  static propTypes = {
    business: shape({
      id: number,
      email: string,
      name: string,
      slug: string,
      status: string,
      website: string
    })
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      id: nextProps.business.id,
      email: nextProps.business.email,
      name: nextProps.business.name,
      slug: this.a.setSlug(nextProps.business.slug, nextProps.business.name),
      status: nextProps.business.status,
      website: nextProps.business.website
    }
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

  updateBusiness = (e, data) => {
    this.setState({
      [data.name]: data.value
    })
  }

  render() {
    const { id, email, slug, status, website } = this.state
    return (
      <Container>
        <EditBusinessInfo
          business={this.state}
          updateBusiness={this.updateBusiness}/>
        <EditBusinessSeed
          business={this.state}/>
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