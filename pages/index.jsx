import { getFeaturedEvents } from "../dummyData";
import EventList from "../components/events/EventList";

const EventsHomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <div className="center">
        <h2>Featured Events</h2>
      </div>

      <EventList items={featuredEvents} />
    </>
  );
};

export default EventsHomePage;
