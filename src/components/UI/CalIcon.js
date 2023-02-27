import React from "react";
import "./CalIcon.css";

const CalIcon = (props) => {
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
  let weekDay =
    props.dateInput === ""
      ? daysOfWeek[new Date().getDay() - 1]
      : daysOfWeek[date.getDay().toLocaleString()];
  let day = props.dateInput === "" ? new Date().getDate() : date.getDate() + 1;
  let month =
    props.dateInput === ""
      ? monthsOfYear[new Date().getMonth()]
      : monthsOfYear[date.getMonth().toLocaleString()];

  return (
    <time className="icon">
      <em>{weekDay}</em>
      <strong>{month}</strong>
      <span>{day}</span>
    </time>
  );
};

export default CalIcon;
