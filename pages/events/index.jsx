import { getAllEvents } from "../../dummyData";
import { useRouter } from "next/router";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventSearch";

const EventsListPage = () => {
  const router = useRouter();

  const onSearch = (year, month) => {
    console.log(year);

    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  };
  return (
    <div>
      <h1>List of all events</h1>
      <EventsSearch onSearch={onSearch} />
      <EventList items={getAllEvents()} />
    </div>
  );
};

export default EventsListPage;
