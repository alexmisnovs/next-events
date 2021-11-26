import { useRouter } from "next/router";

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

  return (
    <>
      <h1>Filtered events</h1>
    </>
  );
};

export default EventBySlug;
