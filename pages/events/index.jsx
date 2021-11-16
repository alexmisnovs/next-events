import { getAllEvents } from "../../dummyData";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventSearch";

const EventsListPage = () => {
  return (
    <div>
      <h1>List of all events</h1>
      <EventsSearch />
      <EventList items={getAllEvents()} />
    </div>
  );
};

export default EventsListPage;
