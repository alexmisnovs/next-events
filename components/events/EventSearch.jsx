import React from "react";
//t0do: add button component
import Button from "../ui/button";
import styles from "./EventSearch.module.css";

const EventsSearch = props => {
  return (
    <form className={styles.form}>
      <div className={styles.controls}>
        <div className={styles.control}>
          <label htmlFor="year">Search:</label>
          <select id="year" onChange={props.handleChange}>
            <option value="">Select Year</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={styles.control}>
          <label htmlFor="month">Search:</label>
          <select id="month" onChange={props.handleChange}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
        </div>
        <Button type="submit" onClick={props.handleSubmit}>
          Search
        </Button>
      </div>
    </form>
  );
};

export default EventsSearch;
