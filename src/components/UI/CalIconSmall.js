import React from "react";
import "./CalIconSmall.css";

const CalIconSmall = (props) => {
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let date = new Date(props.dateInput);
  let weekDay = daysOfWeek[date.getDay().toLocaleString()];
  let day = date.getDate();
  let month = monthsOfYear[date.getMonth().toLocaleString()];

  return (
    <time className="icon-small">
      <em>{weekDay}</em>
      <strong>{month}</strong>
      <span>{day}</span>
    </time>
  );
};

export default CalIconSmall;
