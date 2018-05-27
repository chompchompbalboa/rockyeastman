//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'

import clipboard from '../../../helpers/clipboard'

import InputAction from './InputAction'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InputActionCopy extends Component {

  static propTypes = {
    input: object
  }

  render() {
    const { input } = this.props
    return (
      <InputAction 
        icon="copy"
        onClick={() => clipboard.copyInputContents(input)} />
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
