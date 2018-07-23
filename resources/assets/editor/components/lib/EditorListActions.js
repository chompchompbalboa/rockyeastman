//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, func, number, object, oneOfType, string } from 'prop-types'
import styled from 'styled-components'
import move from 'lodash-move'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditorListActions extends Component {

  static defaultProps = {
    index: number,
    itemTemplate: oneOfType([object, string]),
    list: array,
    name: string,
    onChange: func
  }

  addItem = () => {
    const { index, itemTemplate, list, name, onChange } = this.props
    list.splice(index + 1, 0, itemTemplate)
    onChange({target: {name: name, value: list}})
  }

  deleteItem = () => {
    const { index, list, name, onChange } = this.props
    list.splice(index, 1)
    onChange({target: {name: name, value: list}})
  }

  moveItemUp = () => {
    const { index, list, name, onChange } = this.props
    let newList = list
    if (index > 0) {
      newList = move(list, index, index - 1)
    }
    onChange({target: {name: name, value: newList}})
  }

  moveItemDown = () => {
    const { index, list, name, onChange } = this.props
    const newList = move(list, index, index + 1)
    onChange({target: {name: name, value: newList}})
  }

  render() {
    return (
      <Container>
        <ListAction onClick={this.moveItemUp}>&uarr;</ListAction>
        <ListAction onClick={this.moveItemDown}>&darr;</ListAction>
        <ListAction onClick={this.addItem}>+</ListAction>
        <ListAction onClick={this.deleteItem}>x</ListAction>
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  width: 20%;
  display: flex;
  justify-content: space-between;
`

const ListAction = styled.div`
  user-select: none;
  cursor: pointer;
  padding: 0.25vw 0.5vw;
  background-color: white;
  color: black;
  border-radius: 5px;
`