//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

import { Divider, Header, Input } from 'semantic-ui-react'
import ListActions from '../../lib/ListActions/ListActions'
import QuickBuildCollapsible from './QuickBuildCollapsible'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickBuildHeadlines extends Component {

  static propTypes = {
    headlines: object,
    actions: object
  }

  render() {
    const { 
      headlines, 
      actions 
    } = this.props

    return (
      <QuickBuildCollapsible header="Headlines">
        <StyledInput 
          fluid
          label="Header"
          name="seed.pages.home.services.header"
          value={headlines.header === null ? "" : headlines.header}
          onChange={actions.update} />
        {headlines.tiles.map((service, index) => {
          return (
            <React.Fragment key={index}>
              <Header as="h5">Service {(index + 1) + ""}</Header>
              <StyledInput 
                fluid
                label={"Header"}
                name={"seed.pages.home.services.tiles." + index + ".header"}
                value={headlines.tiles[index].header === null ? "" : headlines.tiles[index].header}
                onChange={actions.update} />
              <HorizontalContainer>
                <StyledInput 
                  label={"Top Link Text"}
                  name={"seed.pages.home.services.tiles." + index + ".topLink.text"}
                  value={headlines.tiles[index].topLink.text === null ? "" : headlines.tiles[index].topLink.text}
                  onChange={actions.update}
                  style={{width: "63%"}} />
                <StyledInput 
                  label={"Top Link Href"}
                  name={"seed.pages.home.services.tiles." + index + ".topLink.href"}
                  value={headlines.tiles[index].topLink.href === null ? "" : headlines.tiles[index].topLink.href}
                  onChange={actions.update}
                  style={{width: "35%"}} />
              </HorizontalContainer>
              <StyledInput 
                fluid
                label={"Blurb"}
                name={"seed.pages.home.services.tiles." + index + ".blurb"}
                value={headlines.tiles[index].blurb === null ? "" : headlines.tiles[index].blurb}
                onChange={actions.update} />
              <HorizontalContainer>
                <StyledInput 
                  label={"Bottom Link Text"}
                  name={"seed.pages.home.services.tiles." + index + ".bottomLink.text"}
                  value={headlines.tiles[index].bottomLink.text === null ? "" : headlines.tiles[index].bottomLink.text}
                  onChange={actions.update}
                  style={{width: "63%"}} />
                <StyledInput 
                  label={"Bottom Link Href"}
                  name={"seed.pages.home.services.tiles." + index + ".bottomLink.href"}
                  value={headlines.tiles[index].bottomLink.href === null ? "" : headlines.tiles[index].bottomLink.href}
                  onChange={actions.update}
                  style={{width: "35%"}} />
              </HorizontalContainer>
              <Divider />
            </React.Fragment>
          )
        })}
      </QuickBuildCollapsible>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledInput = styled(Input)`
  margin: 0.5vh 1vw 0.5vh 0;
  width: 100%
`
