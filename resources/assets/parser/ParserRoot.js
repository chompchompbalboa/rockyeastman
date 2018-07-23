//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import cheerio from 'cheerio'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class ParserRoot extends Component {

  state = {
    siteUrl: "https://www.mywsba.org/PersonifyEbusiness/LegalDirectory.aspx?ShowSearchResults=TRUE&Status=Active&AreaOfPractice=Criminal&Page=1",
    siteString: null
  }

  componentDidMount = () => {
    const {
      siteUrl,
      siteString
    } = this.state
    fetch(siteUrl)
    .then(
      response => {
        console.log(response)
    })
  }

  render() {
    return (
      <Container>
        Parser Something
      </Container>
    )
  }
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
`
//-----------------------------------------------------------------------------
// Attach to page
//-----------------------------------------------------------------------------
if (document.getElementById('react')) {
  ReactDOM.render(
    <BrowserRouter>
      <ParserRoot />
    </BrowserRouter>, 
    document.getElementById('react'));
}
