import {Link } from 'react-router-dom'

export function Register() {
    return (
    <form className="registerForm" id="loginForm" action="api_url_here" method="post">
        <div className="form__head">Create account</div>
        <fieldset id="fieldset">
            <legend>Please Register an accoount with us.</legend>
                Name
                <input className="username" name="UserName" id="name" type="text" required />
                Email
                <input className="useremail" name="emali" id="email" type="email" required/>
                Password
                <input className="password" name="Password" id="paassword" type="password" required/>               
        </fieldset>
        <div>
            <span>Have an account?</span>
            <Link to="/login">Login</Link>
        </div>
        <button className="registerSubmit">register</button>
    </form>
    )
}