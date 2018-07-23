//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import Site from './sites/Site'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class SiteRoot extends Component {

  state = {
    seed: null
  }

  getSlug = () => {
    let slug = location.pathname.replace("/preview/", "")
    if(slug.includes("/")) {
      slug = slug.split("/")
      slug = slug[0]
    }
    return slug
  }

  componentDidMount = () =>{
    const data = {
      slug: this.getSlug()
    }
    fetch('/api/preview/initial-data', {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
      'content-type': 'application/json'
    }})
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          seed: response.seed
        })
      })
  }

  render() {
    const { seed } = this.state
    if(seed) {
      return (
          <Site seed={seed}/>
      )
    }
    return (
      <Loading>
        <img src="/img/loading.svg"/>
      </Loading>
    )
  }
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(240,240,240);
  font-size: 2em;
`

//-----------------------------------------------------------------------------
// Attach to page
//-----------------------------------------------------------------------------
if (document.getElementById('react')) {
  ReactDOM.render(
    <BrowserRouter>
      <SiteRoot />
    </BrowserRouter>, 
    document.getElementById('react'));
}
