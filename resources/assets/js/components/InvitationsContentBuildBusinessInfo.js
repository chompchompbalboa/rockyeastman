//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, shape, string } from 'prop-types'
import styled from 'styled-components'

import { Button, Dropdown, Icon, Input, Label } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentBuildBusinessInfo extends Component {

  static propTypes = {
    business: shape({
      email: string,
      slug: string,
      status: string,
      website: string,
      updateBusinessInfo: func
    })
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
    const { business, updateBusiness } = this.props
    const slugValue = (business.slug && business.slug !== null ? business.slug : "")
    const previewUrl = "http://" + location.hostname + "/previews/" + slugValue
    return (
      <Container>
        <StyledInput 
          label="Email"
          name="email"
          value={business.email}
          onChange={updateBusiness}/>
        <StyledInput
          label="Website"
          name="website"
          value={business.website}
          action={{icon: 'external', onClick: () => this.visitWebsite(website)}}
          onChange={updateBusiness}/>
        <StyledInput
          label="Slug"
          name="slug"
          value={slugValue}
          action={{icon: 'desktop', onClick: () => this.visitWebsite(previewUrl)}}
          onChange={updateBusiness}/>
        <StyledDropdown
          search selection
          name="status"
          value={business.status}
          options={this.statusOptions}
          onChange={updateBusiness}/>
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
