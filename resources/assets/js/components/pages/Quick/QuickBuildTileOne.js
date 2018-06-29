//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'

import { Input } from 'semantic-ui-react'
import CMSImage from '../../lib/CMS/CMSImage'
import ListActions from '../../lib/ListActions/ListActions'
import QuickBuildCollapsible from './QuickBuildCollapsible'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickBuildTileOne extends Component {

  static propTypes = {
    tile: object,
    actions: object
  }

  render() {
    const { 
      tile, 
      actions 
    } = this.props

    return (
      <QuickBuildCollapsible header="Tile One">
        <StyledInput 
          fluid
          label="Header"
          name="build.seed.pages.home.tiles.0.header"
          value={tile.header === null ? "" : tile.header}
          onChange={actions.update} />
        <StyledInput 
          fluid
          label={"Text "}
          name={"build.seed.pages.home.tiles.0.text"}
          value={tile.text === null ? "" : tile.text}
          onChange={actions.update} />
        <StyledInput 
          fluid
          label="Link Text"
          name="build.seed.pages.home.tiles.0.linkText"
          value={tile.linkText === null ? "" : tile.linkText}
          onChange={actions.update} />
        <StyledInput 
          fluid
          label="Link Href"
          name="build.seed.pages.home.tiles.0.linkHref"
          value={tile.linkHref === null ? "" : tile.Href}
          onChange={actions.update} />
        <CMSImage
          src={tile.img}
          label="Image"
          name="build.seed.pages.home.tiles.0.img"
          onChange={actions.update} />
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
