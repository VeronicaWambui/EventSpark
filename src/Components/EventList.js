import { Link } from 'react-router-dom'

export function EventList() {
    return  (
        <>
            <kbd>Eventslist</kbd>
            <br />

            <Link to='/events/1'>Event A</Link> &nbsp;
            <Link to='/events/2'>Event B</Link> &nbsp;
            <Link to='/events/new'>organize an event</Link> &nbsp;

        </>
    )
}