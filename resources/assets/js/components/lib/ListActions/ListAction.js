//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, string } from 'prop-types'

import { Button, Icon} from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class ListActions extends Component {

  static defaultProps = {
    icon: string,
    onClick: func
  }

  render() {
    const { icon, onClick } = this.props
    return (
      <Button icon onClick={onClick}>
        <Icon name={icon}/>
      </Button>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
