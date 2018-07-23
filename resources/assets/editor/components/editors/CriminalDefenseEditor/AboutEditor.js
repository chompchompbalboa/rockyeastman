//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Divider from '../../lib/EditorDivider'
import EditorImage from '../../lib/EditorImage'
import EditorInput from '../../lib/EditorInput'
import EditorListActions from '../../lib/EditorListActions'
import EditorSegment from '../../lib/EditorSegment'
import EditorTextArea from '../../lib/EditorTextArea'
import HorizontalContainer from '../../lib/EditorHorizontalContainer'
import VerticalContainer from '../../lib/EditorVerticalContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const AboutEditor = ({about, update, ...props}) => {
  return (
    <EditorSegment {...props}
      header="About">
      <EditorImage
        label="Background Image" 
        name="seed.pages.home.about.backgroundImage"
        src={about.backgroundImage}
        onChange={update}/>
      {about.details.map((detail, index) => {
        return (
          <VerticalContainer key={index}>
            <Divider />
            <HorizontalContainer>
              <VerticalContainer>
                <EditorInput 
                  label={"Header"}
                  name={"seed.pages.home.about.details." + index + ".header"}
                  value={detail.header}
                  width="98%"
                  onChange={update}/>
                <EditorTextArea 
                  label={"Blurb"}
                  name={"seed.pages.home.about.details." + index + ".blurb"}
                  value={detail.blurb}
                  width="98%"
                  onChange={update}/>
              </VerticalContainer>
              <EditorListActions 
                index={index}
                itemTemplate={{header: "", blurb: ""}}
                list={about.details}
                name="seed.pages.home.about.details"
                onChange={update}/>
            </HorizontalContainer>
          </VerticalContainer>
        )
      })}
    </EditorSegment>
  )
}

export default AboutEditor
