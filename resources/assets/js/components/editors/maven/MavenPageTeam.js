//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'

import { Header, Input as SemanticUIInput, Segment, Tab } from 'semantic-ui-react'

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPageTeam extends Component {

  render() {
    const { team, updateJson } = this.props
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Splash</Header>
          <StyledInput 
            fluid
            label="Header"
            name="pages.team.splash.header"
            value={team.splash.header}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Line 1"
            name="pages.team.splash.text.0"
            value={team.splash.text[0]}
            onChange={updateJson} />
          <StyledInput 
            fluid
            label="Line 2"
            name="pages.team.splash.text.1"
            value={team.splash.text[1]}
            onChange={updateJson} />
        </Segment>

      </Tab.Pane>
    )
  }
}

//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const StyledInput = styled(SemanticUIInput)`
  margin: 1.5vh 0 0 0;
`