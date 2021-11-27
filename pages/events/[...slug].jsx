import { useRouter } from "next/router";
import { getFilteredEvents, getAllEventsForTheYear } from "../../dummyData";

import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/resultsTitle";
import ErrorAlert from "../../components/ui/errorAlert";

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
    numYear < 2021 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    <>
      <ErrorAlert>
        <p className="center">Invalid arguments provided.</p>
      </ErrorAlert>
    </>;
  }

  const params = {
    year: numYear,
    month: numMonth,
  };
  const filteredEvents = getFilteredEvents(params);

  // put this into service eventually
  const date = new Date(numYear, numMonth - 1);

  if (!filteredEvents || filteredEvents.length === 0) {
    // so if we haven't found anything for the month lets display all the events for the whole year
    const allEventsForTheYear = getAllEventsForTheYear(params);

    // todo, convert numbers into actual months somewhere..
    return (
      <>
        <ErrorAlert>
          <ResultsTitle notFound={true} date={date} numYear={numYear} />
        </ErrorAlert>

        <EventList items={allEventsForTheYear} />
      </>
    );
  }

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
};

export default EventBySlug;
