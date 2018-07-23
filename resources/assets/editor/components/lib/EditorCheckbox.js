//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React from 'react'
import { bool, func, string } from 'prop-types'
import styled from 'styled-components'

import colors from '../../config/colors'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
const EditorCheckbox = ({checked, color, disabled, label, name, value, width, onChange}) => {
  return (
    <Container width={width}>
      <Label
        color={color}>
        {label}
      </Label>
      <StyledInput
        type="checkbox"
        checked={checked}
        disabled={disabled}
        name={name}
        value={value === null ? "" : value}
        onChange={onChange}/>
    </Container>
  )
}
//-----------------------------------------------------------------------------
// Props
//-----------------------------------------------------------------------------
EditorCheckbox.propTypes = {
  color: string,
  checked: bool,
  disabled: bool,
  label: string,
  name: string,
  value: string,
  width: string,
  onChange: func
}
EditorCheckbox.defaultProps = {
  color: colors.primary,
  checked: false,
  disabled: false,
  label: "Label",
  name: "default.name",
  value: "Default Value",
  width: "100%",
  onChange: () => console.warn("You need to define an onChange function for EditorCheckbox to function properly")
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin: 0.375vh 0;
  width: ${props => props.width};
  display: flex;
  align-items: center;
`

const Label = styled.div`
  padding: 0.5vh 0.5vw;
  background-color: ${props => props.color};
  color: white;
  border-radius: 5px;
  font-size: 0.9em;
  letter-spacing: 0.075em;
`

const StyledInput = styled.input`
  margin-left: 0.25vw;
  font-size: 0.8em;
  border: none;
  border-radius: 0 5px 5px 0;
  &:focus {
    outline: none;
  }
`

export default EditorCheckbox
