//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { number, object, shape, string } from 'prop-types'
import styled from 'styled-components'

import clipboard from '../../../helpers/clipboard'

import { Input, Button, Dropdown, Header, Segment } from 'semantic-ui-react'
import QuickBuildCollapsible from './QuickBuildCollapsible'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickBuildBusinessInfo extends Component {

  static propTypes = {
    business: shape({
      id: number,
      name: string,
      city: string,
      email: string,
      phone: string,
      state: string,
      street: string,
      slug: string,
      website: string,
      zip: string
    }),
    actions: object
  }

  saveMessages = {
    "READY": "",
    "UNSAVED": "Waiting...",
    "SAVING": "Saving...",
    "SAVED": "Saved",
    "ERROR": "Whoops"
  }

  statusOptions = [
    {text: "uploaded", value: "uploaded"},
    {text: "accepted", value: "accepted"}
  ]

  render() {
    const { 
      business: {
        name,
        email,
        emailName,
        city,
        phone,
        state,
        street,
        slug,
        website,
        zip
      }, 
      actions 
    } = this.props
    const previewHref = (slug === null ? "..." : "http://" + location.hostname + "/preview/" + slug)
    return (
      <QuickBuildCollapsible header="Business">
        <HorizontalContainer>
          <StyledInput 
            label={{ color: 'red', content: 'Contact' }}
            name="build.business.emailName"
            value={emailName === null ? "" : emailName}
            onChange={actions.update}/>
          <StyledInput  
            label={{ color: 'red', content: 'Email' }}
            name="build.business.email"
            innerRef={c => this.emailInput = c}
            value={email === null ? "" : email}
            onChange={actions.update}/>
          <Button 
            size="medium" 
            onClick={() => clipboard.copyInputContents(this.emailInput && this.emailInput.inputRef)}>
            Copy
          </Button>
        </HorizontalContainer>
        <HorizontalContainer>
          <StyledInput 
            label="Website"
            name="build.business.website"
            value={website === null ? "" : website}
            onChange={actions.update}/>
          <StyledInput  
            label={{ color: 'red', content: 'Slug' }}
            name="build.business.slug"
            innerRef={c => this.slugInput = c}
            value={slug === null ? "" : slug}
            onChange={actions.update}/>
          <Button 
            size="medium" 
            onClick={() => clipboard.copyInputContents(this.slugInput && this.slugInput.inputRef)}>
            Copy
          </Button>
        </HorizontalContainer>
        <HorizontalContainer>
          <StyledInput 
            label="Phone"
            name="build.business.phone"
            value={phone === null ? "" : phone}
            onChange={actions.update}/>
        </HorizontalContainer>
        <HorizontalContainer>
          <StyledInput 
            label="Address"
            name="build.business.street"
            value={street === null ? "" : street}
            onChange={actions.update}
            style={{width: "50%"}}/>
          <StyledInput
            name="build.business.city"
            value={city === null ? "" : city}
            onChange={actions.update}
            style={{width: "20%"}}/>
          <StyledInput
            name="build.business.state"
            value={state === null ? "" : state}
            onChange={actions.update}
            style={{width: "5%"}}/>
          <StyledInput
            name="build.business.zip"
            value={zip === null ? "" : zip}
            onChange={actions.update}
            style={{width: "10%"}}/>
        </HorizontalContainer>
      </QuickBuildCollapsible>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------


const WebsiteLink = styled.a`
  font-size: 18px;
  margin-bottom: 1vh;
`

const LinkSpacer = styled.div`
  margin: 1vh 0;
`

const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StickyContainer = styled(HorizontalContainer)`
  z-index: 1000;
  padding: 1.5vh 0 1vh 0;
  margin-bottom: 1.5vh;
  background-color: white;
  border-bottom: 1px solid rgb(200,200,200);
`

const HeaderContainer = styled.div`
  margin-bottom: 1vh;
  width: 50%;
`

const StatusContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const StyledDropdown = styled(Dropdown)`
  width: 30%;
`

const ActionsContainer = styled.div`
  margin-top: 1vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const SaveStatus = styled.div`
  margin-right: 1vw;
`

const StyledInput = styled(Input)`
  margin: 0.5vh 1vw 0.5vh 0;
  width: 100%
`

const HeaderInput = styled(Input)`
  margin-bottom: 1vh;
  width: 150%;
`
