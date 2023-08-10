import { Link } from 'react-router-dom'
// eslint-disable-next-line

import React, { useEffect, useState } from 'react'

export function EventList() {
    const [event, setEvent] = useState({})

    useEffect(() => {
        fetch('https://eventspark-api-service.onrender.com/api/v1/event')
        .then(response => response.json())
        .then(data => console.log(data)
            )
        .catch(err => console.log(err))
    }, [])
    return  (
        <>
          <div className='eventList'>

          <input className='input_search' type='search' id="search" placeholder='search' />
            <div>
                <p>EventList from api service.</p>
                <ul>
               
                </ul>
            </div>

            <Link to='/events/1'>Event A</Link> &nbsp;2
            <Link to='/events/2'>Event B</Link> &nbsp;
            <Link to='/events/new'>organize an event</Link> &nbsp;
          </div>
           

        </>
    )
}