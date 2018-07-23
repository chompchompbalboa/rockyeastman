//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import colors from '../../../config/colors'

import EditorInput from '../../lib/EditorInput'
import EditorSegment from '../../lib/EditorSegment'
import HorizontalContainer from '../../lib/EditorHorizontalContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const PreviewData = ({preview, seed, update, ...props}) => {
  return (
    <EditorSegment {...props}
      header="Preview">
      <HorizontalContainer>
        <EditorInput 
          label={"Slug"}
          name={"preview.slug"}
          value={preview.slug}
          onChange={update}/>
        <VisitButton
          target="_blank"
          href={getPreviewUrl(preview.slug)}>
          Visit
        </VisitButton>
      </HorizontalContainer>
      <EditorInput 
        disabled
        label={"Template"}
        name={"seed.meta.theme"}
        value={seed.meta.theme}
        onChange={update}/>
    </EditorSegment>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const VisitButton = styled.a`
  padding: 0.5vh 0.5vw;
  background-color: ${colors.primary};
  color: white;
  border-radius: 5px;
  font-size: 0.9em;
  letter-spacing: 0.075em;
`
//-----------------------------------------------------------------------------
// Functions
//-----------------------------------------------------------------------------
const getPreviewUrl = (slug) => {
  return "http://" + location.hostname + "/preview/" + slug
}

export default PreviewData
