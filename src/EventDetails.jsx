import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    event: "Foundation Day",
  },
  {
    id: 2,
    event: "Cast Day",
  },
  {
    id: 3,
    event: "Intramurals",
  },
];

function Foundation() {

  return (
    <div>
      <h1>Foundation Day</h1>
      <p>Mahitabo sa isa katuig sa school year ah yeah</p>
    </div>
  );
}

function Cast() {

  return (
    <div>
      <h1>Cast Day</h1>
      <p>Adlaw sa mga naay gamay</p>
    </div>
  );
}

function Intrams() {

  return (
    <div>
      <h1>Intramurals</h1>
      <p>Adlaw sa mga mo suyop una usa mo duwa</p>
    </div>
  );
}

function EventDetails() {
  let eventDetails;

  if (events[0].id === 1) {
    eventDetails = <Foundation />;
  } else if (events[1].id === 2) {
    eventDetails = <Cast />;
  } else if (events[2].id === 3) {
    eventDetails = <Intrams />;
  }


  return (
    <div>
      {eventDetails}

      <Link to="/register">Register for this Event</Link>

      <br />
      <br />

      <Link to="/events">Balik sa nakaraan ah yeah</Link>
    </div>
  );
}

export default EventDetails;