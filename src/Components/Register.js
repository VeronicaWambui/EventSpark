import { useState } from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

export function Register() {
    // const navigate = useNavigate()

    const [data, dataSet] = useState({
        "name": "",
        "password": ""
    })
    function submit(e){
        e.preventDefault()

        axios.post('https://eventspark-api-service.onrender.com/api/v1/user',
                {    name: data.name,
                     password: data.password
                }
        )
        .then(function(response) {
            console.log(response)
            // if(response.status === 200){
            //     navigate('/login')
            // }
        })
        .catch(function(error) {
           console.log(error)
        })
    }


    function handleRegister(e){
        const newData = {...data}
        newData[e.target.id]  = e.target.value
        dataSet(newData)
        console.log(newData)
    }
    return (
    <form onSubmit={(e) => submit(e)} className="registerForm" id="loginForm" method="post">
        <div className="form__head">Create account</div>
        <fieldset id="fieldset">
            <legend>Please Register an accoount with us.</legend>
                Name
                <input onChange={(e) => { handleRegister(e)}} value={data.name} className="username" name="name" id="name" type="text" required />
                {/* Email
                <input className="useremail" name="emali" id="email" type="email" required/> */}
                Password
                <input onChange={(e) => { handleRegister(e)} } value={data.password} className="password" name="password" id="password" required/>               
        </fieldset>
        <div>
            <span>Have an account?</span>
            <Link to="/login">Login</Link>
        </div>
        <button className="registerSubmit">register</button>
    </form>
    )
}