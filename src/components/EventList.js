import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Card, Image, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { getAllEvents } from '../actions/events'
import EventItem from './EventItem'

class EventList extends Component {
  componentWillMount() {
    this.props.getAllEvents()
  }

  render () {
    return (
      <Card.Group itemsPerRow={4} stackable>
        {!this.props.events ? 
          <p>Loading...</p>
          :
          this.props.events.map((event, i) => {
            return <EventItem key={i} event={event}/>
          })
        }
      </Card.Group>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllEvents: () => dispatch(getAllEvents())
  }
}

const EventListConnect = connect(mapStateToProps, mapDispatchToProps)(EventList)

export default EventListConnect