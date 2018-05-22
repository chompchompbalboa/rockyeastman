//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Input } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuildBusinessInfo extends Component {

  static propTypes = {
    email: string,
    website: string
  }

  visitWebsite = (website) => {
    Object.assign(document.createElement('a'), { target: '_blank', href: website}).click();
  }

  render() {
    const { email, website } = this.props
    return (
      <Container>
        <StyledInput 
          label="Email"
          value={email}/>
        <StyledInput 
          label="Website"
          action={{icon: "external", onClick: () => this.visitWebsite(website)}}
          value={website}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledInput = styled(Input)`
  width: 49%;
`
