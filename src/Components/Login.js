import {Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'


export function Login() {
    const [data, dataSet] = useState({
        name: "",
        password: ""
    })

    async function submit(e) {
        e.preventDefault()
        axios.post('https://eventspark-api-service.onrender.com/api/v1/login',
        {   name: data.name,
            description: data.description
        }
        )
        .then(function(response) {
        console.log(response)
        })
        .catch(function(error) {
        console.log(error)
        })
    }

    function handleLogin(e) {
        const newData = {...data}
        newData[e.target.id]  = e.target.value
        dataSet(newData)
        console.log(newData)
    }
    return (
    <form onSubmit={(e) => submit(e)} className="loginForm" id="loginForm" method="post">
        <div className="form__head">Login</div>
        <fieldset id="fieldset">
            <legend>Please Login to access the system.</legend>
                Name
                <input onChange={(e) => { handleLogin(e) }} value={data.name} className="username" name="name" id="name" type="text" required />
                Password
                <input onChange={(e) => { handleLogin(e) }} value={data.password} className="password" name="password" id="password" type="text" required />          
        </fieldset>
        <div>
            <span>Don't have an account?</span>
                <Link className='link' to="/register">Register</Link>
            </div>  
        <button className="loginSubmit">Login</button>
    </form>
    )
}