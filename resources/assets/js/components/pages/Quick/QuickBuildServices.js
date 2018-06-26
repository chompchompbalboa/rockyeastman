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
export default class QuickBuildServices extends Component {

  static propTypes = {
    services: object,
    actions: object
  }

  render() {
    const { 
      services, 
      actions 
    } = this.props

    return (
      <QuickBuildCollapsible header="Services">
        <StyledInput 
          fluid
          label="Header"
          name="build.seed.pages.home.list.header"
          value={services.header === null ? "" : services.header}
          onChange={actions.update} />
        {services.listItems.map((item, index) => {
          return (
            <HorizontalContainer key={index}>
              <StyledInput 
                label="Text"
                name={"build.seed.pages.home.list.listItems." + index + ".text"}
                value={services.listItems[index].text === null ? "" : services.listItems[index].text}
                onChange={actions.update} 
                style={{width: "50%"}}/>
              <StyledInput 
                label="Href"
                name={"build.seed.pages.home.list.listItems." + index + ".href"}
                value={services.listItems[index].href === null ? "" : services.listItems[index].href}
                onChange={actions.update} 
                style={{width: "40%"}}/>
              <ListActions
                index={index}
                itemTemplate=""
                name="build.seed.pages.home.list.listItems"
                list={services.listItems}
                onChange={actions.update} />
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
