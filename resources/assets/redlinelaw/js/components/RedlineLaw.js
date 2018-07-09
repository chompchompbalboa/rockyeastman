//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import styled from 'styled-components'

import Home from './pages/Home'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class RedlineLaw extends Component {

  assetsPath = "/assets/redlinelaw"

  render() {
    return (
      <Site>
        <Route path="/" render={() => <Home />}/>
      </Site>
    );
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Site = styled.div`
  top: 0;
  left: 0;
`

//-----------------------------------------------------------------------------
// Attach to page
//-----------------------------------------------------------------------------
if (document.getElementById('react')) {
  ReactDOM.render(
    <BrowserRouter>
      <RedlineLaw />
    </BrowserRouter>, 
    document.getElementById('react'));
}
