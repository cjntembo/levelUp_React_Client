import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { EventContext } from "./EventProvider.js";

export const EventList = (props) => {
  const { events, getEvents } = useContext(EventContext);

  const history = useHistory()

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <>
    <button
      className="btn btn-2 btn-sep icon-create"
      onClick={() => {
        history.push({ pathname: "/events/new" });
      }}
    >
      Create New Event
    </button>
    <article className="events">
      {events.map((event) => {
        return (
          <section key={`event--${event.id}`} className="event">
            <div className="event__title">
              {event.game}
            </div>
            <div className="event__date">
              Scheduled on {event.eventDate}
            </div>
            <div className="event__skillLevel">
              Status is {event.status}
            </div>
          </section>
        );
      })}
    </article>
  </>
  );
};