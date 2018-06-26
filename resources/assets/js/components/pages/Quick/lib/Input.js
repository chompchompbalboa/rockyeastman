//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { bool, func, string } from 'prop-types'
import styled from 'styled-components'

import { Input } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickInput extends Component {

  static propTypes = {
    fluid: bool,
    label: string,
    name: string,
    value: string,
    onChange: func
  }

  static defaultProps = {
    fluid: true,
    label: "Default Label",
    name: "default.props.name",
    value: "Default Value",
    onChange: () => console.warn("You must declare an onChange function for Input to work properly")
  }

  render() {
    const {
      fluid,
      label,
      name,
      value,
      onChange
    } = this.props
    
    return (
      <StyledInput
        fluid={fluid}
        label={label}
        name={name}
        value={value}
        onChange={onChange}/>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const StyledInput = styled(Input)`
  margin: 0.5vh 1vw 0.5vh 0;
  width: 100%
`

