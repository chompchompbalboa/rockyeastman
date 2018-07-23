//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, {Component} from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import colors from '../../config/colors'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditorTextArea extends Component {

  render() {
    const {
      color, 
      label, 
      name, 
      value, 
      width,
      onChange
    } = this.props
    return (
      <Container width={width}>
        <Label
          color={color}>
          {label}
        </Label>
        <StyledTextArea
          name={name}
          value={value === null ? "" : value}
          onChange={onChange}/>
      </Container>
    )
  }
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
EditorTextArea.propTypes = {
  color: string,
  label: string,
  name: string,
  value: string,
  width: string,
  onChange: func
}
EditorTextArea.defaultProps = {
  color: colors.primary,
  label: "Label",
  name: "default.name",
  value: "Default Value",
  width: "100%",
  onChange: () => console.warn("You need to define an onChange function for EditorTextArea to function properly")
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin: 0.375vh 0;
  width: ${props => props.width};
  display: flex;
`

const Label = styled.div`
  padding: 5vh 0.5vw;
  background-color: ${props => props.color};
  color: white;
  border-radius: 5px 0 0 5px;
  font-size: 0.9em;
  letter-spacing: 0.075em;
`

const StyledTextArea = styled.textarea`
  padding: 0.5vh 0.5vw;
  width: 100%;
  font-size: 0.8em;
  border: none;
  border-radius: 0 5px 5px 0;
  &:focus {
    outline: none;
  }
`
