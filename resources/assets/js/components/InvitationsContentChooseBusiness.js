//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, func, number } from 'prop-types'
import styled from 'styled-components'

import { Dropdown } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentChooseBusiness extends Component {

  static propTypes = {
    active: number,
    businesses: array,
    updateActive: func
  }

  convertBusinessesToOptions(businesses) {
    return businesses.map(business => {
      return {
        value: business.id,
        text: business.name
      }
    })
  }

  render() {
    const { active, businesses, updateActive } = this.props
    const options = this.convertBusinessesToOptions(businesses)
    const count = options.length
    return (
      <Container>
        <Dropdown
          fluid search selection
          placeholder="Select a Business"
          value={active}
          options={options}
          onChange={updateActive}/>
        <Count>({count})</Count>
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
`

const Count = styled.div`
  width: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`
