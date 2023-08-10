import {Link } from 'react-router-dom'

export function Login() {
    return (
    <form className="loginForm" id="loginForm" action="api_url_here" method="post">
        <div className="form__head">Login</div>
        <fieldset id="fieldset">
            <legend>Please Login to access the system.</legend>
                Name
                <input className="username" name="UserName" id="name" type="text" required></input>
                Password
                <input className="password" name="Password" id="paassword" type="password" required></input>               
        </fieldset>
        <div>
            <span>Don't have an account?</span>
            <Link className='link' to="/register">Register</Link>
        </div>
        <button className="loginSubmit">Login</button>
    </form>
    )
}