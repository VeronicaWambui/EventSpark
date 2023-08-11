import {Link } from 'react-router-dom'
import React from "react";
import {QRCodeCanvas} from 'qrcode.react'

function Loading() {
    return <div className='load'></div>;
}







export function Home() {
    const [event, eventSet] = React.useState(null);

    React.useEffect(() => {
        fetch("https://eventspark-api-service.onrender.com/api/v1/event")
          .then((resp) => resp.json())
          .then((data) => eventSet(data));
      }, []);
    
      if (!event) {
        return <Loading />
      }
    return<>
        <div className='hero'>
            <section className="hero__text">
                <p>Ignite social mobility</p>
                <Link className='hero__link' to="/events">Explore events</Link>
            </section>
            <article className="hero__slider">
               
            </article>
            <div className="featured">
                <span>Featured events</span>
                <div className="events events--featured">
                    {event.events
                    .slice(0,3)
                    .map((event, i) => (
                        <ul className="event" key={i}>
                            <li key={i}>{event.name}</li>
                            <li>{event.description}</li>
                            <QRCodeCanvas  value={event.event_id}/>
                            <li>{event.event_id}</li>
                        </ul>
                    ))}
                    </div>
            </div>
          
        </div>
    </>
}