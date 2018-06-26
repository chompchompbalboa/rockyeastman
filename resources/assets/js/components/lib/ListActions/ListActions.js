//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, func, number, object, oneOfType, string } from 'prop-types'
import styled from 'styled-components'
import move from 'lodash-move'

import ListAction from './ListAction'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class ListActions extends Component {

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
    onChange("", {name: name, value: list})
  }

  deleteItem = () => {
    const { index, list, name, onChange } = this.props
    list.splice(index, 1)
    onChange("", {name: name, value: list})
  }

  moveItemUp = () => {
    const { index, list, name, onChange } = this.props
    let newList = list
    if (index > 0) {
      newList = move(list, index, index - 1)
    }
    onChange("", {name: name, value: newList})
  }

  moveItemDown = () => {
    const { index, list, name, onChange } = this.props
    const newList = move(list, index, index + 1)
    onChange("", {name: name, value: newList})
  }

  render() {
    return (
      <Container>
        <ListAction 
          icon="arrow up"
          onClick={this.moveItemUp}/>
        <ListAction 
          icon="arrow down"
          onClick={this.moveItemDown}/>
        <ListAction 
          icon="add"
          onClick={this.addItem}/>
        <ListAction 
          icon="delete"
          onClick={this.deleteItem}/>
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
