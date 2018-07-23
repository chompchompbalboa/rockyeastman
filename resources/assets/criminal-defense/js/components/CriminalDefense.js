//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './pages/Home'
import Navigation from '../components/lib/Navigation'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const CriminalDefense = ({ seed }) => {
  return (
    <Site>
      <Navigation 
        config={seed.config}
        styles={seed.styles}
        nav={seed.blocks.nav} />
      <Content>
        <Route path="/" render={() => <Home seed={seed}/>}/>
      </Content>
    </Site>
  )
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Site = styled.div`
  top: 0;
  left: 0;
`

const Content = styled.div`
  z-index: -1000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
`

export default CriminalDefense
