//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import styled from 'styled-components'

import messages from '../config/messages'

import CriminalDefenseEditor from './editors/CriminalDefenseEditor/CriminalDefenseEditor';
import RedlineLawEditor from './editors/RedlineLawEditor/RedlineLawEditor';
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class Editor extends Component {

  state = {
    visible: true
  }

  render() {
    const {
      preview, 
      seed,
      status,
      update 
    } = this.props

    const {
      visible
    } = this.state

    return (
      <Container
        visible={visible}>
        <Settings>
          <Toggle 
            src="/assets/editor/img/chevron.png"
            visible={visible}
            onClick={() => this.setState({visible: !visible})}/>
          <Status>
            {messages.status[status]}
          </Status>
        </Settings>
        <SiteEditor
          visible={visible}>
          {seed.meta.theme === "criminal-defense" && <CriminalDefenseEditor preview={preview} seed={seed} update={update}/>}
          {seed.meta.theme === "redline-law" && <RedlineLawEditor seed={seed} update={update}/>}
        </SiteEditor>
      </Container>
    )
  } 
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  z-index: 10000;
  position: fixed;
  top: 0;
  left: ${props => props.visible ? "60vw" : "96vw"};
  width: 40vw;
  height: 100vh;
  padding: 1vw;
  background-color: rgba(255,255,255,0.5);
  transition: left 0.5s;
`

const Settings = styled.div`
  width: 100%;
  height: 2vw;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const Toggle = styled.img`
  cursor: pointer;
  user-select: none;
  height: 100%;
  width: auto;
  transform: ${props => props.visible ? "none" : "rotate(-180deg)"};
  transition: transform 0.5s;
`

const Status = styled.div`
  margin-left: 1vw;
`

const SiteEditor = styled.div`
  margin-top: 2vh;
  margin-left: ${props => props.visible ? "0" : "5vw"};
  width: 100%;
  height: 100%;
  overflow-Y: scroll;
  transition: margin-left 0.5s;
`
