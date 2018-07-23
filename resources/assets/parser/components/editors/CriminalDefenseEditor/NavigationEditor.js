//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import EditorImage from '../../lib/EditorImage'
import EditorInput from '../../lib/EditorInput'
import EditorListActions from '../../lib/EditorListActions'
import EditorSegment from '../../lib/EditorSegment'
import HorizontalContainer from '../../lib/EditorHorizontalContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const NavigationEditor = ({nav, update, ...props}) => {
  return (
    <EditorSegment {...props}
      header="Navigation">
      <EditorImage
        label="Logo" 
        name="seed.blocks.nav.logo"
        src={nav.logo}
        onChange={update}/>
      {nav.links.map((link, index) => {
        return (
          <HorizontalContainer key={index}>
            <EditorInput 
              label={"Text"}
              name={"seed.blocks.nav.links." + index + ".text"}
              value={link.text}
              width="39%"
              onChange={update}/>
            <EditorInput 
              label={"Slug"}
              name={"seed.blocks.nav.links." + index + ".slug"}
              value={link.slug}
              width="39%"
              onChange={update}/>
            <EditorListActions 
              index={index}
              itemTemplate={{text: "", slug: ""}}
              list={nav.links}
              name="seed.blocks.nav.links"
              onChange={update}/>
          </HorizontalContainer>
        )
      })}
    </EditorSegment>
  )
}

export default NavigationEditor
