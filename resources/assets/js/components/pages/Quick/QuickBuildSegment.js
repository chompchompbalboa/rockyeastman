//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { number, object, shape, string } from 'prop-types'
import styled from 'styled-components'

import clipboard from '../../../helpers/clipboard'

import { Input, Button, Header } from 'semantic-ui-react'
import Container from './QuickTabPaneContainer'
import QuickTabPaneContainer from './QuickTabPaneContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickSendNavigation extends Component {

  static propTypes = {
    nav: object,
    actions: object
  }

  render() {
    const { 
      business: {
        name,
        email,
        city,
        phone,
        state,
        street,
        slug,
        website,
        zip
      }, 
      actions 
    } = this.props

    return (
      <Container>
      {blocks.nav.links.map((item, index) => {
        return (
          <HorizontalContainer key={index}>
            <StyledInput 
              key={index + "-text"}
              label={"Link " + (index + 1) + " Text"}
              name={"blocks.nav.links." + index + ".text"}
              value={blocks.nav.links[index].text}
              onChange={update} 
              style={{width: "45%"}}/>
            <StyledInput 
              key={index + "-href"}
              label={"Href"}
              name={"blocks.nav.links." + index + ".href"}
              value={blocks.nav.links[index].href}
              onChange={update}
              style={{width: "33%"}}/>
            <ListActions
              index={index}
              itemTemplate={{href: "", text: ""}}
              name="blocks.nav.links"
              list={blocks.nav.links}
              onChange={update} 
              />
          </HorizontalContainer>
        )
      })}
      </Container>
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
