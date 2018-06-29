//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { number, object, shape, string } from 'prop-types'
import styled from 'styled-components'

import clipboard from '../../../helpers/clipboard'

import { Input, Button, Dropdown, Header, Segment } from 'semantic-ui-react'
import QuickTabPaneContainer from './QuickTabPaneContainer'
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
      <Container>
        <HorizontalContainer>
          <HeaderContainer>
            <HeaderInput
              transparent
              name="build.business.name"
              value={name === null ? "Loading..." : name}
              onChange={actions.update}
              style={{ fontSize: "24px" }}/>
            <WebsiteLink target="_blank" href={website}>{website === null ? "..." : website}</WebsiteLink>
            <LinkSpacer />
            <WebsiteLink target="_blank" href={previewHref}>{previewHref}</WebsiteLink>
          </HeaderContainer>
          <StatusContainer>
            <ActionsContainer>
              <SaveStatus>
                {this.saveMessages[actions.status.save]}
              </SaveStatus>
              <StyledDropdown
                selection
                name="build.status.dropdown"
                value={actions.status.dropdown}
                options={this.statusOptions}
                onChange={(e, data) => actions.update(e, data, true)}/>
            </ActionsContainer>
            <ActionsContainer>
              <Button 
                size="medium" 
                onClick={() => actions.updateBusinessStatus("sent")}>
                Sent
              </Button>
              <Button 
                size="medium" 
                onClick={() => actions.updateBusinessStatus("accepted")}>
                Accepted
              </Button>
              <Button 
                size="medium" 
                onClick={() => actions.updateBusinessStatus("rejected")}>
                Rejected
              </Button>
              <Button 
                size="medium" 
                onClick={() => actions.updateBusinessStatus("uploaded")}>
                Uploaded
              </Button>
            </ActionsContainer>
          </StatusContainer>
        </HorizontalContainer>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------

const Container = styled(Segment)`
  z-index: 1000 !important;
  position: sticky !important;
  top: -0.5vh !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

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
