import {Link } from 'react-router-dom'

export function NewEvent() {
    return <form className="eventForm" id="eventForm" action="api_url_here" method="post">
        <div className="form__head">Publish Event</div>
        <fieldset id="fieldsetEvent">
            <legend>Please Register an accoount with us.</legend>
                Event Title
                <input className="eventtitle" name="eventtitle" id="title" type="text" />
                Description
                <input className="description" name="description" id="description" type="text" />             
        </fieldset>
        <Link className='upload_image' to="/upload">Next</Link>
    </form>

}