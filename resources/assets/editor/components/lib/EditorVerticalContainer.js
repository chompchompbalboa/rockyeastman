//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const EditorHorizontalContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export default EditorHorizontalContainer