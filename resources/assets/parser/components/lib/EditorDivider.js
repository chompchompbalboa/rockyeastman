//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

import colors from '../../config/colors'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const EditorDivider = () => {
  return (
    <Container />
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin: 1vh 0;
  width: 100%;
  height: 2px;
  background-color: ${colors.primary}
`

export default EditorDivider