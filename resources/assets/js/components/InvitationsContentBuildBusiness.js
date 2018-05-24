//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { number, shape, string } from 'prop-types'
import styled from 'styled-components'

import { Input } from 'semantic-ui-react'
import BuildBusinessInfo from './InvitationsContentBuildBusinessInfo'
import BuildBusinessSeed from './InvitationsContentBuildBusinessSeed'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuildBusiness extends Component {

  state = {
    id: this.props.business.id,
    email: this.props.business.email,
    slug: this.props.business.slug,
    status: this.props.business.status,
    website: this.props.business.website
  }

  static propTypes = {
    business: shape({
      id: number,
      email: string,
      slug: string,
      status: string,
      website: string
    })
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      id: nextProps.business.id,
      email: nextProps.business.email,
      slug: nextProps.business.slug,
      status: nextProps.business.status,
      website: nextProps.business.website
    }
  }

  updateBusinessInfo = (e, data) => {
    this.setState({
      [data.name]: data.value
    })
  }

  render() {
    const { id, email, slug, status, website } = this.state
    return (
      <Container>
        <BuildBusinessInfo
          email={email}
          slug={slug}
          status={status}
          website={website}
          updateBusinessInfo={this.updateBusinessInfo}/>
        <BuildBusinessSeed
          id={id}
          email={email}
          slug={slug}
          status={status}
          website={website}/>
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