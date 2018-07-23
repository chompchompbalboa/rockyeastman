//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { shape, string } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import layout from '../../styles/layout'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const Navigation = ({ logo: { name, phone, tag }}) => {
  console.log(name, phone, tag)
  const nameWords = _.words(name)
  return (
    <Container>
      <Top>
        {nameWords.map((word, index) => {
          const firstLetter = word.charAt(0)
          const rest = word.slice(1)
          return (
            <React.Fragment key={index}>
              <TopFirstLetter>{firstLetter}</TopFirstLetter>
              <TopRest>{rest}</TopRest>
            </React.Fragment>
          )
        })}
      </Top>
      <Divider />
      <Bottom>
        <Tag>{tag}</Tag>
        <Phone>{phone}</Phone>
      </Bottom>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  padding-bottom: 1vh;
  width: 65vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  color: white;
  font-family: 'Crimson Text', serif;
  text-transform: uppercase;
  font-weight: 600;
  @media (${layout.breakpoints.tabletUpString}) {
    width: 20vw;
    justify-content: center;
  }
`

const Top = styled.div`
  margin-bottom: -0.2vh;
  width: 100%;
  text-align: center;
  letter-spacing: -0.25px;
  @media (${layout.breakpoints.tabletUpString}) {
    margin-bottom: -0.5vh;
  }
`

const TopFirstLetter = styled.span`
  font-size: 2.1em;
  @media (${layout.breakpoints.tabletUpString}) {
    font-size: 2.6em;
  }
`

const TopRest = styled.span`
  margin-right: 1.5vw;
  font-size: 1.5em;
  @media (${layout.breakpoints.tabletUpString}) {
    margin-right: 0.25vw;
    font-size: 1.75em;
  }
`

const Divider = styled.div`
  margin: 0.1vh 0;
  width: 100%;
  height: 1px;
  background-color: white;
  @media (${layout.breakpoints.tabletUpString}) {
    height: 1.5px;
  }
`
const Bottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9em;
  white-space: nowrap;
  @media (${layout.breakpoints.tabletUpString}) {
    font-size: 1em;
  }
`

const Tag = styled.div``
const Phone = styled.div`
  font-size: 1.1em;
`
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
Navigation.propTypes = {
  logo: shape({
    name: string,
    phone: string,
    tag: string
  })
}
Navigation.defaultProps = {
  logo: {
    name: "Eric Schurman",
    phone: "(206) 264-2979",
    tag: "Criminal Defense"
  }
}
export default Navigation