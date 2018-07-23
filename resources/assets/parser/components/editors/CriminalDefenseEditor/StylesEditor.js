//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import EditorColor from '../../lib/EditorColor'
import EditorSegment from '../../lib/EditorSegment'
import HorizontalContainer from '../../lib/EditorHorizontalContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const StylesData = ({styles, update, ...props}) => {
  return (
    <EditorSegment {...props}
      flexFlow="row wrap"
      justifyContent="space-around"
      header="Styles">
      <EditorColor 
        label="Primary"
        name="seed.styles.colors.primary"
        color={styles.colors.primary}
        update={update}/>
      <EditorColor 
        label="Primary Dark"
        name="seed.styles.colors.primaryDark"
        color={styles.colors.primaryDark}
        update={update}/>
      <EditorColor 
        label="Secondary"
        name="seed.styles.colors.secondary"
        color={styles.colors.secondary}
        update={update}/>
    </EditorSegment>
  )
}

export default StylesData
