import React from 'react'
import EventItem from './EventItem'

const EventList = ({ items }) => {
   return (
      <ul>
         {items.map(event => <EventItem key={event.id} id={event.id} title={event.title} date={event.date} image={event.image} location={event.location} />)}
      </ul>
   )
}

export default EventList
