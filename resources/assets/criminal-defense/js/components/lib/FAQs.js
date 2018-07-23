//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import {  } from 'prop-types'
import styled from 'styled-components'

import colors from '../../styles/colors'
import config from '../../styles/config'
import layout from '../../styles/layout'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const FAQs = ({ faqs, styles }) => {
  return (
    <Container
      backgroundColor={styles.colors.primaryDark}>
      <Content>
        <Header>Frequently Asked Questions</Header>
        <Divider 
          backgroundColor={styles.colors.secondary}/>
        {faqs.questions.map((question, index) => {
          return (
            <FAQ key={index}>
              <Question
                backgroundColor={styles.colors.primary}>
                {question.question}
              </Question>
              <Answer>
                {question.answer}
              </Answer>
            </FAQ>
          )
        })}
      </Content>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
FAQs.propTypes = {
}
FAQs.defaultProps = {
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding: 7.5vh 0 3vh 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.backgroundColor};
  color: white;
`

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Header = styled.div`
  font-family: Lora;
  font-size: 1.75em;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  @media (${layout.breakpoints.tabletUpString}) {
    width: 50%;
  }
`

const Divider = styled.div`
  margin: 5vh 0;
  width: 25%;
  height: 2px;
  background-color: ${props => props.backgroundColor};
  @media (${layout.breakpoints.tabletUpString}) {
    width: 15%;
  }
`

const FAQ = styled.div`
  width: 100%;
  margin-bottom: 4vh;
  @media (${layout.breakpoints.tabletUpString}) {
    width: 70%;
  }
`

const Question = styled.div`
  padding: 1.5vh;
  width: 100%;
  background-color: ${props => props.backgroundColor};
  color: white;
  font-family: Lora;
  font-size: 1.25em;
  text-align: center;
  text-transform: uppercase;
  border: 2px solid gray;
`

const Answer = styled.div`
  white-space: pre-line;
  padding: 2vh;
  width: 100%;
  background-color: rgb(240,240,240);
  border: 2px solid gray;
  color: black;
  font-size: 1.05em;
  text-align: center;
`

export default FAQs