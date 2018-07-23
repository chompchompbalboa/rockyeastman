//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, {Component} from 'react'
import { func, string } from 'prop-types'
import { SketchPicker } from 'react-color'
import styled from 'styled-components'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditorColor extends Component {

  static propTypes = {
    color: string,
    name: string,
    onChange: func
  }

  static defaultProps = {
    color: "rgba(25,25,25,1)",
    name: "default.name",
    onChange: () => console.warn("You need to define and onChange function for EditorColor to work properly")
  }

  convertObjectToString = (rgbaObject) => {
    return "rgba(" + rgbaObject.r + "," + rgbaObject.g + "," + rgbaObject.b + "," + rgbaObject.a + ")"
  }
  
  convertStringToObject = (rgbaString) => {
    const splitString = rgbaString.split(",")
    const rgbaObject = {
      r: splitString[0].replace("rgba(", ""),
      g: splitString[1],
      b: splitString[2],
      a: splitString[3].replace(")", "")
    }
    return rgbaObject
  }

  handleChangeComplete = (color) => {
    const { name, update } = this.props
    update({
      target: {
        name: name,
        value: this.convertObjectToString(color.rgb)
      }
    })
  }

  render() {
    const { 
      color,
      label
    } = this.props
    return (
      <Container>
        <Label>{label}</Label>
        <SketchPicker
          color={this.convertStringToObject(color)}
          onChangeComplete={this.handleChangeComplete}/>
      </Container>
    )
  }
}
//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin: 0.375vh 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start
`

const Label = styled.div`
  margin-bottom: 0.25vh;
`
