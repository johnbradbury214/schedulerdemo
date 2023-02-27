import React from "react";
import RowContainer from "./UI/RowContainer";

const EditAppointment = ({
  editAppointmentData,
  editAppointmentHandler,
  cancelClickHandler,
}) => {
  return (
    <RowContainer>
      <div className="cell-padding">
        <input
          aria-label="date"
          className="form-edit-textbox-input"
          type="date"
          name="date"
          value={editAppointmentData.date}
          required="required"
          onChange={editAppointmentHandler}
        />
      </div>
      <div className="cell-padding">
        <input
          aria-label="time"
          className="form-edit-textbox-input"
          type="time"
          name="time"
          value={editAppointmentData.time}
          required="required"
          onChange={editAppointmentHandler}
        />
      </div>
      <div className="cell-padding">
        <select
          aria-label="location select"
          className="form-edit-textbox-input"
          name="location"
          value={editAppointmentData.location}
          required="required"
          onChange={editAppointmentHandler}
        >
          <option value="Select Location" disabled>
            Select Location
          </option>
          <option value="Portland, US">Portland, US -08:00 GMT</option>
          <option value="San Diego, US">San Diego, US -08:00 GMT</option>
          <option value="Seattle, US">Seattle, US -08:00 GMT</option>
          <option value="London, GB">London, GB +00:00 GMT</option>
          <option value="Ontario, CA">Ontario, CA -05:00 GMT</option>
        </select>
      </div>
      <div className="cell-padding">
        <input
          aria-label="description"
          className="form-edit-textbox-input"
          type="text"
          name="description"
          value={editAppointmentData.description}
          required="required"
          onChange={editAppointmentHandler}
          placeholder="Enter description..."
        ></input>
      </div>
      <div>
        <button className="btn-edit" type="submit">
          Save
        </button>
        <button
          className="btn-delete"
          type="button"
          onClick={cancelClickHandler}
        >
          Cancel
        </button>
      </div>
    </RowContainer>
  );
};

export default EditAppointment;
