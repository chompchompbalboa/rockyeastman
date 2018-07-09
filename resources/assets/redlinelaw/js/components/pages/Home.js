//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import colors from '../../styles/colors'

import Banner from '../tiles/Banner'
import BusinessInfo from '../tiles/BusinessInfo'
import Introduction from '../tiles/Introduction'
import Navigation from '../tiles/Navigation'
import PowerQuote from '../tiles/PowerQuote'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Home = () => {
  return (
    <Container>
      <Navigation backgroundColor={colors.navigation}/>
      <Banner top left tileHeight="88vh" tileWidth={6.65}/>
      <BusinessInfo top right backgroundColor={colors.black} tileHeight="88vh" tileWidth={3.35}/>
      <PowerQuote left overlayColor={colors.redOverlay} tileWidth={3.35}/>
      <Introduction right tileWidth={6.65} backgroundColor={colors.gray}/>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
`

export default Home