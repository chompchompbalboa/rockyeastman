//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import CriminalDefense from '../../criminal-defense/js/components/CriminalDefense'
import RedlineLaw from '../../redline-law/js/components/RedlineLaw'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Site = ({ seed }) => {
  return (
    <Container>
      {seed.meta.theme === "criminal-defense" && <CriminalDefense seed={seed}/>}
      {seed.meta.theme === "redline-law" && <RedlineLaw seed={seed}/>}
    </Container>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
`

export default Site
