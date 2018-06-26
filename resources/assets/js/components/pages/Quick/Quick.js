//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { Header, Tab } from 'semantic-ui-react'
import QuickBuild from './QuickBuild'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class Quick extends Component {

  state = {
    build: {
      business: {
        id: 0,
        name: null,
        city: null,
        email: null,
        phone: null,
        slug: null,
        state: null,
        street: null,
        website: null,
        zip: null
      },
      seed: null,
      status: {
        dropdown: "uploaded",
        accept: "READY",
        reject: "READY",
        save: "READY",
        sent: "READY",
        uploaded: "READY"
      }
    }
  }

  saveTimeout = null

  componentDidMount = () => {
    fetch('/api/quick/initial-data')
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.update("", {
          name: "build.business",
          value: response.build.business
        }, true)
        this.update("", {
          name: "build.seed",
          value: response.build.seed
        }, true)
      })
  }

  save = () => {
    const { build: { business, seed }} = this.state
    const data = {
      business: business,
      seed: seed
    }
    this.update("", {
      name: "build.status.save",
      value: "SAVING"
    }, true)
    fetch('/api/quick/save', {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
      'content-type': 'application/json'
    }}).then(response => {
        return response.json()
      })
      .then(response => {
        if(response.success) {
          this.update("", {
            name: "build.status.save",
            value: "SAVED"
          }, true)
        }
        else {
          this.update("", {
            name: "build.status.save",
            value: "ERROR"
          }, true)
        }
      })
  }

  update = (e, data, dontSave) => {
    !dontSave && clearTimeout(this.timeout)
    let newState = _.set(Object.assign({}, this.state), data.name, data.value)
    !dontSave && (newState.build.status.save = "UNSAVED")
    this.setState(newState)
    !dontSave && (this.timeout = setTimeout(this.save, 1000))
  }

  render() {
    const { build } = this.state
    return (
      <Container>
        <ContentContainer>
          <Header as="h1">Quick</Header>
        </ContentContainer>
        <ContentContainer>
          <Tab
            panes={[
              {
                menuItem: "Build", 
                render: () => 
                  <QuickBuild 
                    business={build.business} 
                    seed={build.seed} 
                    status={build.status} 
                    update={this.update}/>
              },
            ]}/>
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
  padding: 2vh 0;
`

//-----------------------------------------------------------------------------
// Attach to page
//-----------------------------------------------------------------------------
if (document.getElementById('react')) {
  ReactDOM.render(<Quick />, document.getElementById('react'));
}
