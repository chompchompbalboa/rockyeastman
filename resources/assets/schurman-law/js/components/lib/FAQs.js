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
const FAQs = (props) => {
  const questions = [
    {
      question: "I was just arrested for a DUI. What's my first step?",
      answer: [
        "Washington DUI and DWI laws are very strict, so it is important that you understand the long-term consequences of prosecution. You not only face long-term and permanent consequences on your record, but you could face even stiffer penalties enforced by society. If you are successfully prosecuted for a DUI or DWI offense, you will lose your license to drive and experience very large fines and court costs, probation, and incarceration in county jail or state prison. The court system even has the legal right to install an ignition interlock device in your vehicle at your cost."
      ]
    },
    {
      question: "My family member is under investigation for a serious drug crime. What can we do to?",
      answer: [
        "The best decision you will make is to hire a lawyer that is highly educated on each of the drug laws in Washington. If you have been charged with a serious narcotics crime, your criminal defense attorney is the only person that can protect you from the punishment you will receive if convicted of a drug crime.",
       "Eric Schurman has defended drug dealing or possessing clients charged with petty drug possession and serious intent to distribute, as well as large-scale drug offenders running meth labs and marijuana growth operations. Through the years, many cases have resulted in court-approved drug treatment programs, probation, and house arrest. When necessary, Mr. Schurman does handle probation violations."
      ]
    },
    {
      question: "What should I do if I was arrested for a domestic violence charge?",
      answer: [
        "Physical abuse of a spouse, domestic partner, family member, or anyone you share a home with is a criminal act.  If you or someone you know was arrested for domestic violence, a domestic violence charge which leads prosecution is inevitable.   Schurman Law can help you navigate through the complex and confusing Washington State court system, which is exceptionally tough on domestic violence.",
        "Eric will defend your constitutional rights and intervene in the prosecution process to minimize or eliminate additional jail time and court fees, can reduce your bail amount, and can work with the system to reduce or dismiss the charge, which can have long-lasting and expensive consequences throughout your life."
      ]
    }
  ]
  return (
    <Container>
      <Content>
        <Header>Frequently Asked Questions</Header>
        <Divider />
        {questions.map((question, index) => {
          return (
            <FAQ key={index}>
              <Question>{question.question}</Question>
              <Answer>
                {question.answer.map((answer, answerIndex) => {
                  return (
                    <AnswerParagraph key={answerIndex}>
                      {answer}
                    </AnswerParagraph>
                  )
                })}
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
  background-color: ${colors.primaryDark};
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
  background-color: ${colors.secondary};
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
  background-color: ${colors.primary};
  color: white;
  font-family: Lora;
  font-size: 1.25em;
  text-align: center;
  text-transform: uppercase;
  border: 2px solid gray;
`

const Answer = styled.div`
  padding: 0 1.5vh;
  width: 100%;
  background-color: rgb(240,240,240);
  border: 2px solid gray;
`

const AnswerParagraph = styled.p`
  margin: 1.5vh 0;
  color: black;
  font-size: 1.05em;
  text-align: center;
`

export default FAQs