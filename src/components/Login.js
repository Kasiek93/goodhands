import React from 'react';
import { Link } from 'react-router-dom';
import decoration from '../assets/decoration.svg';

const Login = () => {
    return (
        <section className="login">
            <div className="login-title">
                <h3 className="login-title-h3">Zaloguj się</h3>
                <img src={decoration} alt="Decoration"></img>
            </div>
            <form className="login-form">
                <div className="login-form-first">
                    <label className="login-form-first-label">Email</label>
                    <input className="login-form-first-input" type="text"></input>
                </div>
                <div className="login-form-second">
                    <label className="login-form-second-label">Hasło</label>
                    <input className="login-form-second-input" type="text"></input>
                </div>
            </form>
            <div className="login-buttons">
                <Link to="/rejestracja" className="login-buttons-login1">Założ konto</Link>
                <button className="login-buttons-login2">Zaloguj się</button>
            </div>
        </section>
    )
}

export default Login