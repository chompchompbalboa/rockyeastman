//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import EditorInput from '../../lib/EditorInput'
import EditorSegment from '../../lib/EditorSegment'
import EditorTextArea from '../../lib/EditorTextArea'
import HorizontalContainer from '../../lib/EditorHorizontalContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AboutEditor = ({consultation, update, ...props}) => {
  return (
    <EditorSegment {...props}
      header="Consultation">
      <EditorTextArea 
        label={"Blurb"}
        name={"seed.pages.home.practiceAreas.consultation.blurb"}
        value={consultation.blurb}
        onChange={update}/>
      <EditorInput 
        label={"Phone"}
        name={"seed.pages.home.practiceAreas.consultation.phone"}
        value={consultation.phone}
        onChange={update}/>
    </EditorSegment>
  )
}

export default AboutEditor
