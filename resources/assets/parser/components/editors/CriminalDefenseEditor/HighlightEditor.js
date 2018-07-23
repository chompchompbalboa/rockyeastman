//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import EditorImage from '../../lib/EditorImage'
import EditorSegment from '../../lib/EditorSegment'
import EditorTextArea from '../../lib/EditorTextArea'
import HorizontalContainer from '../../lib/EditorHorizontalContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const HighlightEditor = ({highlight, update, ...props}) => {
  return (
    <EditorSegment {...props}
      header="Highlight">
      <EditorImage 
        label={"Image"}
        name={"seed.pages.home.about.highlight.img"}
        src={highlight.img}
        onChange={update}/>
      <EditorTextArea 
        label={"Blurb"}
        name={"seed.pages.home.about.highlight.blurb"}
        value={highlight.blurb}
        onChange={update}/>
    </EditorSegment>
  )
}

export default HighlightEditor
