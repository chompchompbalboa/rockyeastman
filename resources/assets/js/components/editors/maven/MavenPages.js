//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import { Checkbox, Tab } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class MavenPages extends Component {

  render() {
    const { pages, updateJson } = this.props
    if (pages) {
      return (
        <Tab.Pane>
          {_.map(pages, (page, index) => {
            return (
              <StyledCheckbox 
                key={index}
                name={"pages." + index + ".visible"}
                label={_.capitalize(index)}
                checked={page.visible}
                onClick={updateJson}/>
            )
          })}
        </Tab.Pane>
      )
    }
    return (
      <Tab.Pane />
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledCheckbox = styled(Checkbox)`
  margin-right: 2vw;
`