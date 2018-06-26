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
export default class QuickBuildSplash extends Component {

  static propTypes = {
    splash: object,
    actions: object
  }

  render() {
    const { 
      splash, 
      actions 
    } = this.props

    return (
      <QuickBuildCollapsible header="Splash">
        <StyledInput 
          fluid
          label="Header"
          name="build.seed.pages.home.splash.header"
          value={splash.header === null ? "" : splash.header}
          onChange={actions.update} />
        {splash.text.map((item, index) => {
          return (
            <HorizontalContainer key={index}>
              <StyledInput 
                label={"Splash " + (index + 1)}
                name={"build.seed.pages.home.splash.text." + index}
                value={splash.text[index] === null ? "" : splash.text[index]}
                onChange={actions.update} 
                style={{width: "90%"}}/>
              <ListActions
                index={index}
                itemTemplate=""
                name="build.seed.pages.home.splash.text"
                list={splash.text}
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
