//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { Button, Dropdown, Icon, Input, Label } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuildBusinessInfo extends Component {

  static propTypes = {
    email: string,
    slug: string,
    status: string,
    website: string,
    updateBusinessInfo: func
  }

  statusOptions = [
    {text: "Uploaded", value: "uploaded"},
    {text: "Built", value: "built"},
    {text: "Sent", value: "sent"},
    {text: "Rejected - Email", value: "rejected-email"},
    {text: "Rejected - Website", value: "rejected-website"},
    {text: "Rejected - Other", value: "rejected-other"}
  ]

  visitWebsite = (website) => {
    open(website, "_blank")
  }

  render() {
    const { email, slug, status, website, updateBusinessInfo } = this.props
    const slugValue = (slug && slug !== null ? slug : "")
    const previewUrl = "http://" + location.hostname + "/previews/" + slugValue
    return (
      <Container>
        <StyledInput 
          label="Email"
          name="email"
          value={email}
          onChange={updateBusinessInfo}/>
        <StyledInput
          label="Website"
          name="website"
          value={website}
          action={{icon: 'external', onClick: () => this.visitWebsite(website)}}
          onChange={updateBusinessInfo}/>
        <StyledInput
          label="Slug"
          name="slug"
          value={slugValue}
          action={{icon: 'desktop', onClick: () => this.visitWebsite(previewUrl)}}
          onChange={updateBusinessInfo}/>
        <StyledDropdown
          search selection
          name="status"
          value={status}
          options={this.statusOptions}
          onChange={updateBusinessInfo}/>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const StyledInput = styled(Input)`
  width: 26%;
`

const StyledDropdown = styled(Dropdown)`
  width: 12%;
  `
