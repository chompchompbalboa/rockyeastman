//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import styled from 'styled-components'

import Divider from '../../lib/EditorDivider'
import EditorInput from '../../lib/EditorInput'
import EditorListActions from '../../lib/EditorListActions'
import EditorSegment from '../../lib/EditorSegment'
import EditorTextArea from '../../lib/EditorTextArea'
import HorizontalContainer from '../../lib/EditorHorizontalContainer'
import VerticalContainer from '../../lib/EditorVerticalContainer'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const PracticeAreasEditor = ({practiceAreas, update, ...props}) => {
  return (
    <EditorSegment {...props}
      header="Practice Areas">
        <EditorInput 
          label={"Header"}
          name={"seed.pages.home.practiceAreas.header"}
          value={practiceAreas.header}
          onChange={update}/>
      {practiceAreas.practiceAreas.map((practiceArea, index) => {
        return (
          <VerticalContainer key={index}>
            <Divider />
            <HorizontalContainer>
              <VerticalContainer>
                <EditorInput 
                  label={"Header"}
                  name={"seed.pages.home.practiceAreas.practiceAreas." + index + ".header"}
                  value={practiceArea.header}
                  width="98%"
                  onChange={update}/>
                <EditorTextArea 
                  label={"Blurb"}
                  name={"seed.pages.home.practiceAreas.practiceAreas." + index + ".blurb"}
                  value={practiceArea.blurb}
                  width="98%"
                  onChange={update}/>
              </VerticalContainer>
              <EditorListActions 
                index={index}
                itemTemplate={{header: "", blurb: ""}}
                list={practiceAreas.practiceAreas}
                name="seed.pages.home.practiceAreas.practiceAreas"
                onChange={update}/>
            </HorizontalContainer>
          </VerticalContainer>
        )
      })}
    </EditorSegment>
  )
}

export default PracticeAreasEditor
