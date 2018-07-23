//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Divider from '../../lib/EditorDivider'
import EditorCheckbox from '../../lib/EditorCheckbox'
import EditorImage from '../../lib/EditorImage'
import EditorInput from '../../lib/EditorInput'
import EditorListActions from '../../lib/EditorListActions'
import EditorSegment from '../../lib/EditorSegment'
import HorizontalContainer from '../../lib/EditorHorizontalContainer'
import VerticalContainer from '../../lib/EditorVerticalContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const NavigationEditor = ({nav, update, ...props}) => {
  console.log(nav.logo.text)
  return (
    <EditorSegment {...props}
      header="Navigation">
      <EditorCheckbox
        label="Text"
        name="seed.blocks.nav.logo.type"
        checked={nav.logo.type === "text"}
        value={nav.logo.type === "text" ? "img" : "text"}
        onChange={update}/>
      {nav.logo.type === "img" &&
        <EditorImage
          label="Logo" 
          name="seed.blocks.nav.logo.img"
          src={nav.logo.img}
          onChange={update}/>
      }
      {nav.logo.type === "text" && 
        <VerticalContainer>
          <EditorInput 
            label={"Name"}
            name={"seed.blocks.nav.logo.text.name"}
            value={nav.logo.text.name}
            onChange={update}/>
          <HorizontalContainer>
            <EditorInput 
              label={"Tag"}
              name={"seed.blocks.nav.logo.text.tag"}
              value={nav.logo.text.tag}
              width={"49%"}
              onChange={update}/>
            <EditorInput 
              label={"Phone"}
              name={"seed.blocks.nav.logo.text.phone"}
              value={nav.logo.text.phone}
              width={"49%"}
              onChange={update}/>
          </HorizontalContainer>
        </VerticalContainer>
      }
      <Divider />
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
