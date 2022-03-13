import { Link } from 'react-router-dom'
import './register.css'

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>Username</label>
                <input type="text" className="registerInput" placeholder="Username.."></input>
                <label>Email</label>
                <input type="email" className="registerInput" placeholder="Email.."></input>
                <label>Password</label>
                <input type="password" className="registerInput" placeholder="Password.."></input>
                <button className="registerBtn">Register</button>
            </form>
            <button className="RegisterloginBtn">
                <Link className="link" to="/login">Login</Link>
            </button>
        </div>
    )
}
