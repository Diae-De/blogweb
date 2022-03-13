import { Link } from 'react-router-dom'
import './login.css'

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label>Email</label>
                <input type="email" className="loginInput" placeholder="Email.."></input>
                <label>Password</label>
                <input type="password" className="loginInput" placeholder="Password.."></input>
                <button className="loginBtn">Login</button>
            </form>
            <button className="loginRegisterBtn">
                <Link className="link" to="register">Register</Link>
            </button>
        </div>
    )
}
