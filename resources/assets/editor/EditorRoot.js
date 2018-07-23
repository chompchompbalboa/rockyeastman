//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'

import Editor from './components/Editor'
import Site from '../sites/sites/Site'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditorRoot extends Component {

  state = {
    preview: null,
    seed: null,
    status: "READY"
  }

  saveTimeout = null

  getSlug = () => {
    return (location.pathname === "/editor" ? "default" : location.pathname.replace("/editor/", ""))
  }

  componentDidMount = () =>{
    const data = {
      slug: this.getSlug()
    }
    fetch('/api/editor/initial-data', {
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
          preview: response.preview,
          seed: response.seed
        })
      })
  }

  save = () => {
    const { 
      preview, 
      seed,
      status
    } = this.state
    const data = {
      preview: preview,
      seed: seed
    }
    this.setState({
      status: "SAVING"
    })
    fetch('/api/editor/save/' + preview.id, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
      'content-type': 'application/json'
    }}).then(response => {
        return response.json()
      })
      .then(response => {
        if(response.success) {
          this.setState({
            status: "SAVED"
          })
        }
        else {
          this.setState({
            status: "ERROR"
          })
        }
      })
  }

  update = (e, dontSave) => {
    !dontSave && clearTimeout(this.timeout)
    const value = e.target.value
    let newState = _.set(Object.assign({}, this.state), e.target.name, value)
    !dontSave && (newState.status = "UNSAVED")
    this.setState(newState)
    !dontSave && (this.timeout = setTimeout(this.save, 1000))
  }

  render() {
    const { 
      preview, 
      seed,
      status 
    } = this.state

    if(seed) {
      return (
        <React.Fragment>
          <Editor 
            preview={preview}
            seed={seed}
            status={status}
            update={this.update}/>
          <Site 
            seed={seed}/>
        </React.Fragment>
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
      <EditorRoot />
    </BrowserRouter>, 
    document.getElementById('react'));
}
