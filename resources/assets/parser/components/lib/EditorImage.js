//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import colors from '../../config/colors'

import EditorInput from './EditorInput'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class EditorImage extends Component {

  static propTypes = {
    backgroundColor: string,
    label: string,
    name: string,
    src: string,
    onChange: func
  }

  static defaultProps = {
    backgroundColor: colors.primary
  }

  render() {
    const { backgroundColor, label, name, src, onChange } = this.props
    const altSrc = "/assets/editor/img/image-not-found.png"
    return (
      <Container>
        <ImageWrapper
          backgroundColor={backgroundColor}>
          <Image 
            src={src}
            innerRef={(c) => this.image = c}
            onError={() => {this.image.src = altSrc}}/>
        </ImageWrapper>
        <EditorInput 
          label={label}
          name={name}
          value={src}
          width={"50%"}
          onChange={onChange} />
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin: 0.375vh 0.5vw 0.375vh 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImageWrapper = styled.div`
  margin: 0.5vw 0;
  padding: 0.5vh 0.375vh;
  width: 49%;
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`
