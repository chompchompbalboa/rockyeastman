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
const SplashEditor = ({splash, update, ...props}) => {
  return (
    <EditorSegment {...props}
      header="Splash">
      <EditorImage
        label="Image" 
        name="seed.pages.home.splash.img"
        src={splash.img}
        onChange={update}/>
      {splash.text.map((text, index) => {
        return (
          <HorizontalContainer
            key={index}>
            <EditorInput 
              label={"Text"}
              name={"seed.pages.home.splash.text." + index}
              value={text}
              width="79%"
              onChange={update}/>
            <EditorListActions 
              index={index}
              itemTemplate=""
              list={splash.text}
              name="seed.pages.home.splash.text"
              onChange={update}/>
          </HorizontalContainer>
        )
      })}
    </EditorSegment>
  )
}

export default SplashEditor
