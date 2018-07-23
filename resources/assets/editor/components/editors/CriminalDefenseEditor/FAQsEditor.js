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
const FAQsEditor = ({faqs, update, ...props}) => {
  return (
    <EditorSegment {...props}
      header="FAQs">
      {faqs.questions.map((question, index) => {
        return (
          <VerticalContainer key={index}>
            <HorizontalContainer>
              <VerticalContainer>
                <EditorInput 
                  label={"Question"}
                  name={"seed.pages.home.faqs.questions." + index + ".question"}
                  value={question.question}
                  width="98%"
                  onChange={update}/>
                <EditorTextArea 
                  label={"Answer"}
                  name={"seed.pages.home.faqs.questions." + index + ".answer"}
                  value={question.answer}
                  width="98%"
                  onChange={update}/>
              </VerticalContainer>
              <EditorListActions 
                index={index}
                itemTemplate={{question: "", answer: ""}}
                list={faqs.questions}
                name="seed.pages.home.faqs.questions"
                onChange={update}/>
            </HorizontalContainer>
            {index < faqs.questions.length - 1 && <Divider />}
          </VerticalContainer>
        )
      })}
    </EditorSegment>
  )
}

export default FAQsEditor
