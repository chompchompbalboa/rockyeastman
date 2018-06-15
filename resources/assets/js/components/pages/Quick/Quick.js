//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { Header, Tab } from 'semantic-ui-react'
import QuickSend from './QuickSend'
import QuickSchedule from './QuickSchedule'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class Quick extends Component {

  componentDidMount = () => {
    /*
    fetch('/api/invitations/businesses/next', {
      method: "PUT",
      body: JSON.stringify({}),
      headers: {
        'content-type': 'application/json'
    }}).then(response => {
        return response.json()
      })
      .then(response => {
        //console.log(response)
        this.setState({
          business: response.business,
          seed: response.seed
        })
      })
    */
  }

  render() {
    return (
      <Container>
        <ContentContainer>
          <Header as="h3">Quick</Header>
        </ContentContainer>
        <ContentContainer>
          <QuickSchedule />
          <QuickSend />
        </ContentContainer>
      </Container>
    );
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100vw;
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const ContentContainer = styled.div`
  width: 80%;
  padding: 2h 0;
`

//-----------------------------------------------------------------------------
// Attach to page
//-----------------------------------------------------------------------------
if (document.getElementById('react')) {
  ReactDOM.render(<Quick />, document.getElementById('react'));
}
