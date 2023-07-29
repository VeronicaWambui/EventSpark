import { useParams } from "react-router-dom"

export function Event() {
    const {id} = useParams()
    console.log(id)
    return <h1>Event {id}</h1>
}