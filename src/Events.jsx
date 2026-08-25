import { Link } from "react-router-dom";
import Foundation from './Foundation.jsx'

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
    event: "Intrams",
  },
];

function Events() {

  return (
    <div>
      <h3>Here are the events for today's vlog</h3>
      <ul>
        <li>
          <Link to={`/events/${events[0].id}`}>
            {events[0].event}
          </Link>
        </li>

        <li>
          <Link to={`/events/${events[1].id}`}>
            {events[1].event}
          </Link>
        </li>

        <li>
          <Link to={`/events/${events[2].id}`}>
            {events[2].event}
          </Link>
        </li>

      </ul>
        <Link to="/">Balik choy</Link>

    </div>
  );
}

export default Events;