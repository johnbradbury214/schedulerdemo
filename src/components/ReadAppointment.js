import React from "react";
import "./UI/EditDelete.css";
import RowContainer from "./UI/RowContainer";
import CalIconSmall from "./UI/CalIconSmall";

const ReadAppointment = ({
  appointment,
  editClickHandler,
  deleteClickHandler,
}) => {
  return (
    <RowContainer>
      <div className="appointment-date">
        <CalIconSmall dateInput={appointment.date}></CalIconSmall>
      </div>
      <div className="city-time-cell-padding">{appointment.time}</div>
      <div className="city-time-cell-padding">{appointment.location}</div>
      <div className="cell-padding">{appointment.description}</div>
      <div>
        <button
          className="btn-edit"
          type="button"
          onClick={(e) => editClickHandler(e, appointment)}
        >
          Edit
        </button>
        <button
          className="btn-delete"
          type="button"
          onClick={() => deleteClickHandler(appointment.id)}
        >
          Delete
        </button>
      </div>
    </RowContainer>
  );
};

export default ReadAppointment;
