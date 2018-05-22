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
    website: this.props.business.website
  }

  static propTypes = {
    business: shape({
      id: number,
      email: string,
      website: string
    })
  }

  static getDerivedStateFromProps = (nextProps, prevState) => {
    return {
      id: nextProps.business.id,
      email: nextProps.business.email,
      website: nextProps.business.website
    }
  }

  render() {
    const { id, email, website } = this.state
    return (
      <Container>
        <BuildBusinessInfo
          email={email}
          website={website}/>
        <BuildBusinessSeed
          id={id}
          email={email}
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