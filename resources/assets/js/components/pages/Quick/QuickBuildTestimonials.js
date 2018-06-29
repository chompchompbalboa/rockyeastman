//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { array, object } from 'prop-types'
import styled from 'styled-components'

import { Divider, Header, Input } from 'semantic-ui-react'
import CMSImage from '../../lib/CMS/CMSImage'
import ListActions from '../../lib/ListActions/ListActions'
import QuickBuildCollapsible from './QuickBuildCollapsible'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class QuickBuildTestimonials extends Component {

  static propTypes = {
    testimonials: array,
    actions: object
  }

  render() {
    const { 
      testimonials, 
      actions
    } = this.props

    return (
      <QuickBuildCollapsible header="Testimonials">
        {testimonials.map((testimonial, index) => {
          return (
            <React.Fragment key={index}>
              <Header as="h5">Testimonial {(index + 1) + ""}</Header>
              <StyledInput 
                fluid
                key={index + "-text"}
                label={"Text"}
                name={"build.seed.pages.home.testimonials." + index + ".text"}
                value={testimonials[index].text}
                onChange={actions.update} />
              <StyledInput 
                fluid
                key={index + "-attribution"}
                label={"Attribution"}
                name={"build.seed.pages.home.testimonials." + index + ".attribution"}
                value={testimonials[index].attribution}
                onChange={actions.update} />
              <Divider />
            </React.Fragment>
          )
        })}
      </QuickBuildCollapsible>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledInput = styled(Input)`
  margin: 0.5vh 1vw 0.5vh 0;
  width: 100%
`
