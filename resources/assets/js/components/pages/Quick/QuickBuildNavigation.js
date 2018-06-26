//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

import { Input } from 'semantic-ui-react'
import ListActions from '../../lib/ListActions/ListActions'
import QuickBuildCollapsible from './QuickBuildCollapsible'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickBuildNavigation extends Component {

  static propTypes = {
    nav: object,
    actions: object
  }

  render() {
    const { 
      nav, 
      actions 
    } = this.props

    return (
      <QuickBuildCollapsible header="Navigation">
        {nav.links.map((item, index) => {
          return (
            <HorizontalContainer key={index}>
              <StyledInput 
                label={"Link " + (index + 1) + " Text"}
                name={"build.seed.blocks.nav.links." + index + ".text"}
                value={nav.links[index].text === null ? "" : nav.links[index].text}
                onChange={actions.update} 
                style={{width: "45%"}}/>
              <StyledInput 
                label={"Href"}
                name={"build.seed.blocks.nav.links." + index + ".href"}
                value={nav.links[index].href === null ? "" : nav.links[index].href}
                onChange={actions.update}
                style={{width: "33%"}}/>
              <ListActions
                index={index}
                itemTemplate={{href: "", text: ""}}
                name="build.seed.blocks.nav.links"
                list={nav.links}
                onChange={actions.update} 
                />
            </HorizontalContainer>
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
