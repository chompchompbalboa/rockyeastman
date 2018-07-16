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
export default class SchurmanLaw extends Component {

  assetsPath = "/assets/schurman-law"

  render() {
    return (
      <Site>
        <Route path="/" render={() => <Home assetsPath={this.assetsPath}/>}/>
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
      <SchurmanLaw />
    </BrowserRouter>, 
    document.getElementById('react'));
}
