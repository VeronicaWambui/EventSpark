import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export function NewEvent() {
    const navigate = useNavigate()
    const [data, dataSet] = useState({
        name: "",
        description: ""
    })

    function submit(e) {
        e.preventDefault()
        axios.post('https://eventspark-api-service.onrender.com/api/v1/event',
                {   name: data.name,
                    description: data.description
                }
        )
        .then(function(response) {
            if(response.status === 200){
                navigate('/events')
            }
        })
        .catch(function(error) {
           console.log(error)
        })
        
    }

    function handlePublish(e) {
        const newData = {...data}
        newData[e.target.id]  = e.target.value
        dataSet(newData)
    }


    return <form onSubmit={(e) => submit(e)} className="eventForm" id="eventForm"  method="post">
        <div className="form__head">Publish Event</div>
        <fieldset id="fieldsetEvent">
                <legend>Publish an event.</legend>
                Event Name
                <input onChange={(e) => { handlePublish(e) }} value={data.name} className="eventtitle" name="name" id="name" type="text" required />
                Description
                <textarea onChange={(e) => { handlePublish(e) }} value={data.description} className="description" name="description" id="description" type="text" required />            
        </fieldset>
        <button className='event_submit'>Publish</button> 
    </form>

}