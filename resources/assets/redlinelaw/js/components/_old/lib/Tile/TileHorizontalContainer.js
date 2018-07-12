//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { string } from 'prop-types'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const TileHorizontalContainer = (props) => {
  const { children } = props
  return (
    <Container {...props}>
      {children}
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
TileHorizontalContainer.propTypes = {
  alignItems: string,
  justifyContent: string,
  width: string
}

TileHorizontalContainer.defaultProps = {
  alignItems: "center",
  justifyContent: "center",
  width: "100%"
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: ${props => props.width};
  display: flex;
  justify-content: ${props=> props.justifyContent};
  align-items: ${props=> props.alignItems};
`

export default TileHorizontalContainer