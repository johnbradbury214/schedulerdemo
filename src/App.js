import React, { useState, Fragment } from "react";
import ReadAppointment from "./components/ReadAppointment";
import EditAppointment from "./components/EditAppointment";
import "./App.css";
import CalIcon from "./components/UI/CalIcon";
import Card from "./components/UI/Card";

const App = () => {
  const [appointments, setAppointments] = useState([]);

  const [userInput, setUserInput] = useState({
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const [editAppointmentData, setEditAppointmentData] = useState({
    date: "",
    time: "",
    location: "",
    description: "",
  });

  const [editAppointmendId, setEditAppointmentId] = useState(null);

  const userInputHandler = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newAppointmentData = { ...userInput };
    newAppointmentData[fieldName] = fieldValue;
    setUserInput(newAppointmentData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const newAppointment = {
      id: new Date().getTime(),
      date: userInput.date,
      time: userInput.time,
      location: userInput.location,
      description: userInput.description,
    };
    const newAppointments = [...appointments, newAppointment];
    setAppointments(newAppointments);
    document.getElementById("add-appointment-form").reset();
  };

  const editSubmitHandler = (e) => {
    e.preventDefault();
    const editedAppointment = {
      id: editAppointmendId,
      date: editAppointmentData.date,
      time: editAppointmentData.time,
      location: editAppointmentData.location,
      description: editAppointmentData.description,
    };
    const newAppointments = [...appointments];
    const index = appointments.findIndex(
      (appointment) => appointment.id === editAppointmendId
    );
    newAppointments[index] = editedAppointment;
    setAppointments(newAppointments);
    setEditAppointmentId(null);
  };

  const editAppointmentHandler = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newAppointmentData = { ...editAppointmentData };
    newAppointmentData[fieldName] = fieldValue;
    setEditAppointmentData(newAppointmentData);
  };

  const editClickHandler = (e, appointment) => {
    e.preventDefault();
    setEditAppointmentId(appointment.id);
    const appointmentValues = {
      date: appointment.date,
      time: appointment.time,
      location: appointment.location,
      description: appointment.description,
    };
    setEditAppointmentData(appointmentValues);
  };

  const cancelClickHandler = () => {
    setEditAppointmentId(null);
  };

  const clearClickHandler = () => {
    document.getElementById("add-appointment-form").reset();
  };

  const deleteClickHandler = (appointmentId) => {
    const newAppointments = [...appointments];
    const index = appointments.findIndex(
      (appointment) => appointment.id === appointmentId
    );
    newAppointments.splice(index, 1);
    setAppointments(newAppointments);
  };

  const sortedArr = appointments.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <div>
      <Card>
        <div>
          <div className="header-container">
            <h1 className="header-app">
              Schedule an <br />
              Appointment
            </h1>
          </div>
          <CalIcon dateInput={userInput.date}></CalIcon>
          <div>
            <form onSubmit={submitHandler} id="add-appointment-form">
              <div>
                <input
                  aria-label="date"
                  className="form-textbox-input"
                  type="date"
                  name="date"
                  required="required"
                  onChange={userInputHandler}
                />
              </div>
              <div>
                <input
                  aria-label="time"
                  className="form-textbox-input"
                  type="time"
                  name="time"
                  required="required"
                  onChange={userInputHandler}
                />
              </div>
              <div>
                <select
                  aria-label="location select"
                  className="form-textbox-input"
                  name="location"
                  required="required"
                  onChange={userInputHandler}
                  defaultValue="Select Location"
                >
                  <option value="Select Location" disabled>
                    Select Location
                  </option>
                  <option value="Portland, US">Portland, US -08:00 GMT</option>
                  <option value="San Diego, US">
                    San Diego, US -08:00 GMT
                  </option>
                  <option value="Seattle, US">Seattle, US -08:00 GMT</option>
                  <option value="London, GB">London, GB +00:00 GMT</option>
                  <option value="Ontario, CA">Ontario, CA -05:00 GMT</option>
                </select>
              </div>
              <div>
                <input
                  aria-label="description"
                  className="form-textbox-input"
                  type="text"
                  name="description"
                  required="required"
                  onChange={userInputHandler}
                  placeholder="Enter description..."
                ></input>
              </div>
              <div>
                {document.getElementById("add-appointment-form") === null ? (
                  <button className="btn" type="submit">
                    Add Appointment
                  </button>
                ) : (
                  <Fragment>
                    <button className="btn" type="submit">
                      Add Appointment
                    </button>
                    <button
                      className="btn-clear"
                      type="button"
                      onClick={clearClickHandler}
                    >
                      Reset
                    </button>
                  </Fragment>
                )}
              </div>
            </form>
            <div className="appointments-card">
              <div>
                <h2 className="header-appointments">My Appointments</h2>
              </div>
              <div>
                <form onSubmit={editSubmitHandler}>
                  {appointments.length === 0 ? (
                    <p className="fallback">No appointments scheduled</p>
                  ) : (
                    sortedArr.map((appointment) => (
                      <Fragment key={appointment.id}>
                        {editAppointmendId === appointment.id ? (
                          <EditAppointment
                            editAppointmentData={editAppointmentData}
                            editAppointmentHandler={editAppointmentHandler}
                            cancelClickHandler={cancelClickHandler}
                          />
                        ) : (
                          <ReadAppointment
                            appointment={appointment}
                            editClickHandler={editClickHandler}
                            deleteClickHandler={deleteClickHandler}
                          />
                        )}
                      </Fragment>
                    ))
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default App;
