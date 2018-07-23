//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import EditorInput from '../../lib/EditorInput'
import EditorListActions from '../../lib/EditorListActions'
import EditorSegment from '../../lib/EditorSegment'
import EditorTextArea from '../../lib/EditorTextArea'
import HorizontalContainer from '../../lib/EditorHorizontalContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const ContactEditor = ({contact, update, ...props}) => {
  return (
    <EditorSegment {...props}
      header="Contact">
    <EditorInput
      label="Header" 
      name="seed.pages.home.contact.header"
      value={contact.header}
      onChange={update}/>
    <EditorTextArea
      label="Blurb" 
      name="seed.pages.home.contact.blurb"
      value={contact.blurb}
      onChange={update}/>
    <EditorInput
      label="Phone" 
      name="seed.pages.home.contact.phone"
      value={contact.phone}
      onChange={update}/>
    <EditorInput
      label="Email" 
      name="seed.pages.home.contact.email"
      value={contact.email}
      onChange={update}/>
    <EditorInput
      label="Address" 
      name="seed.pages.home.contact.address"
      value={contact.address}
      onChange={update}/>
    </EditorSegment>
  )
}

export default ContactEditor
