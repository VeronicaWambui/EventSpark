import React, { useEffect } from 'react'

function FetchData() {

    useEffect(() => {
        fetch('https://eventspark-api-service.onrender.com/api/v1/event')
        .then(response => response.json())
        .then(data => console.log(data)
            )
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {/* <ul>
               {events.map((list, index) => {
                <li key={index}> {list.id}</li>
               })}
            </ul> */}
        </div>
    )
}

export default FetchData