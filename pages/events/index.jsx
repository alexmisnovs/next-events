import { getAllEvents } from "../../dummyData";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventSearch";

const EventsListPage = () => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    console.log(year);

    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };
  const events = getAllEvents();
  return (
    <>
      <div className="center">
        <h1>List of all events</h1>
      </div>

      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
};

export default EventsListPage;
