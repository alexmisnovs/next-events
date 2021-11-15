import { getFeaturedEvents } from "../dummyData"
import EventList from "../components/events/EventList"

const EventsHomePage = () => {

   const featuredEvents = getFeaturedEvents()

   return (
      <div>
         <h1>Home Page</h1>

     <EventList items={featuredEvents} />
      </div>
   )
}

export default EventsHomePage
