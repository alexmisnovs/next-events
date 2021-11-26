import { useRouter } from "next/router";
import {
  getFilteredEvents,
  getAllEventsForTheYear,
  getAllEventsForSearhQueryFollowingMonths,
} from "../../dummyData";

import EventList from "../../components/events/EventList";

const EventBySlug = () => {
  const router = useRouter();
  const filteredData = router.query.slug;
  console.log(filteredData);

  //todo: only look for events if there is data passed.
  if (!filteredData) {
    return (
      <>
        <p className="center">Loading..</p>
      </>
    );
  }

  const filteredYear = filteredData[0];
  const filteredMonth = filteredData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numMonth) ||
    isNaN(numYear) ||
    numYear < 2020 ||
    numYear > 2025 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    <>
      <p className="center">Invalid filter please adjust..</p>
    </>;
  }

  const params = {
    year: numYear,
    month: numMonth,
  };
  const filteredEvents = getFilteredEvents(params);

  // TODO: What if I want to pass only year? Maybe make that available as well, that will make some sense I guess
  console.log(filteredEvents);
  if (!filteredEvents || filteredEvents.length === 0) {
    // so if we haven't found anything for the month lets display all the events for the whole year
    const allEventsForTheYear = getAllEventsForTheYear(params);
    const allEventsForTheFollowingMonths = getAllEventsForSearhQueryFollowingMonths(params);
    // todo, convert numbers into actual months somewhere..
    return (
      <>
        <p>We haven't found any events in {params.month} </p>

        <p>Here are all the events in {params.year}</p>

        <EventList items={allEventsForTheYear} />
        <p>
          Here are Events after {params.month} {params.year}
        </p>
        <EventList items={allEventsForTheFollowingMonths} />
      </>
    );
  }

  return (
    <>
      <h1>Filtered events</h1>
      <EventList items={filteredEvents} />
    </>
  );
};

export default EventBySlug;
