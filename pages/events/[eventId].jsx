import {useRouter} from 'next/router'
import {getEventById} from '../../dummyData'
import React from 'react'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'


const EventDetails = () => {

      const router = useRouter()
      const {eventId} = router.query;
      const event = getEventById(eventId);

      console.log(event);
      // Handle undefined event
      if(!event) {
         return <div>Event not found</div>
      }


   return (
      <>
         <EventSummary title={event.title}/>
         <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title}/>
         <EventContent event={event}>
            <p>{event.description}</p>
         </EventContent>
        
      </>

   )
}

export default EventDetails
