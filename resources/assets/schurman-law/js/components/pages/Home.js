//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

import About from '../lib/About'
import Contact from '../lib/Contact'
import FAQs from '../lib/FAQs'
import Footer from '../lib/Footer'
import PracticeAreas from '../lib/PracticeAreas'
import Navigation from '../lib/Navigation'
import Splash from '../lib/Splash'

import layout from '../../styles/layout'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
class Home extends Component {
  render() {
    return (
      <Container>
        <Navigation />
        <Content>
          <Splash />
          <PracticeAreas />
          <About />
          <FAQs />
          <Contact />
          <Footer />
        </Content>
      </Container>
    )
  }
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
`

const Content = styled.div`
  z-index: -1000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`

export default Home