import React from "react";
import {QRCodeCanvas} from 'qrcode.react'

export function EventList() {
  const [filter, filterSet] = React.useState("");
  const [event, eventSet] = React.useState(null);

  React.useEffect(() => {
    fetch("https://eventspark-api-service.onrender.com/api/v1/event")
      .then((resp) => resp.json())
      .then((data) => eventSet(data));
  }, []);

  if (!event) {
    return <div>Loading data</div>;
  }

  return (
    <div className="events__container">
    <div className="search">
        <input className="search__bar" placeholder="Search for an event"
        value={filter}
        onChange={(evt) => filterSet(evt.target.value)}
        />
    </div>

    <div className="events">
        {event.events
        .filter((event) => event.name.toLowerCase().includes(filter.toLowerCase()))
        // you can chain more methods here. ie. .slice()
        .map((event, onSelect) => (
            
            <ul className="event" key={event.event_id}>
                <li>{event.name}</li>
                <li>{event.description}</li>
                <QRCodeCanvas  value={event.event_id}/>
                 <li>{event.event_id}</li>
            </ul>
        ))}
    </div>
   
    </div>
  );
}
