import Button from "../ui/button";
import classes from "./resultsTitle.module.css";

function ResultsTitle(props) {
  const { date, notFound, numYear } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  if (notFound) {
    return (
      <section className={classes.title}>
        <h2>We haven't found any events in {humanReadableDate}</h2>
        <h1>Showing all events for {numYear}</h1>
      </section>
    );
  }

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
