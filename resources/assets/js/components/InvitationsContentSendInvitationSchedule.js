//-----------------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------------
import React, { Component } from 'react'
import { object } from 'prop-types'
import styled from 'styled-components'
import _ from 'lodash'

import DatePicker from 'react-datepicker';

import { Header, Segment, Tab } from 'semantic-ui-react'
//-----------------------------------------------------------------------------
// Component
//-----------------------------------------------------------------------------
export default class InvitationsContentSendInvitationMessage extends Component {

  static propTypes = {
    change: object,
    schedule: object
  }

  render() {
    const { change, schedule } = this.props    
    return (
      <Tab.Pane>

        <Segment>
          <Header as="h4">Schedule</Header>
          <HorizontalContainer>
            <DatePicker 
              inline
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
              dateFormat="LLL"
              timeCaption="time"
              selected={schedule.time}
              onChange={change.scheduleTime}/>
            <VerticalContainer>
              <DateTimeContainer>
                <Date>{schedule.time.format("dddd, MMMM Do YYYY")}</Date>
                <Time>{schedule.time.format("h:mm:ss a")}</Time>
              </DateTimeContainer>
            </VerticalContainer>
          </HorizontalContainer>
        </Segment>

      </Tab.Pane>
    )
  }
}

//-----------------------------------------------------------------------------
// Styled Components
//-----------------------------------------------------------------------------
const HorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const VerticalContainer = styled.div`
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
`

const DateTimeContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
`
const Date = styled.div`
  font-weight: bold;
  margin-bottom: 1vh;
`
const Time = styled.div``