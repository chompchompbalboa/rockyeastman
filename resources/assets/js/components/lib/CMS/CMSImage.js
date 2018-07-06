//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'

import { Input } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class ListActions extends Component {

  static defaultProps = {
    labe: string,
    name: string,
    src: string,
    onChange: func
  }

  render() {
    const { label, name, src, onChange } = this.props
    const altSrc = "/img/image-not-found.png"
    return (
      <Container>
        <ImageWrapper>
          <Image 
            src={src}
            innerRef={(c) => this.image = c}
            onError={() => {this.image.src = altSrc}}/>
        </ImageWrapper>
        <StyledInput 
          label={label}
          name={name}
          value={src === null ? "" : src}
          onChange={onChange} />
      </Container>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const Container = styled.div`
  margin-top: 1.5vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ImageWrapper = styled.div`
  width: 49%;
`

const Image = styled.img`
  width: 100%;
  height: auto;
`

const StyledInput = styled(Input)`
  width: 49%;
`
