//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, shape, string } from 'prop-types'
import styled from 'styled-components'

import { Button, Dropdown, Icon, Input, Label } from 'semantic-ui-react'
import InputAction from './lib/InputAction/InputAction'
import InputActionCopy from './lib/InputAction/InputActionCopy'
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
          action fluid
          name="email"
          labelPosition="left"
          innerRef={c => this.emailInput = c}
          value={business.email}
          onChange={updateBusiness}>
          <Label>Email</Label>
          <input/>
          <InputActionCopy input={this.emailInput && this.emailInput.inputRef}/>
        </StyledInput>
        <StyledInput
          action fluid
          name="website"
          labelPosition="left"
          innerRef={c => this.websiteInput = c}
          value={business.website}
          onChange={updateBusiness}>
          <Label>Website</Label>
          <input/>
          <InputAction icon="external" onClick={() => this.visitWebsite(business.website)}/>
          <InputActionCopy input={this.websiteInput && this.websiteInput.inputRef}/>
        </StyledInput>
        <StyledInput
          action fluid
          name="slug"
          labelPosition="left"
          innerRef={c => this.slugInput = c}
          value={slugValue}
          onChange={updateBusiness}>
          <Label>Slug</Label>
          <input/>
          <InputAction icon="external" onClick={() => this.visitWebsite(previewUrl)}/>
          <InputActionCopy input={this.slugInput && this.slugInput.inputRef}/>
        </StyledInput>
        <StyledDropdown
          search selection
          name="status"
          value={business.status}
          options={this.statusOptions}
          onChange={updateBusiness}
          style={{minWidth: "auto"}}/>
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
  width: 27%;
`

const StyledDropdown = styled(Dropdown)`
  width: 14%;
  `
