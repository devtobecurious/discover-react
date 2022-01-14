import { useState } from 'react';
import './Login.css';

const Login = props => {
    return (
        <div>
            <div>
                <label>Email</label>
                <input type="email"></input>
            </div>
            <div>
                <label>Password</label>
                <input type="password"></input>
            </div>
            <div>
                <button type="button" onClick={ props.onLogin }>Login</button>
            </div>
        </div>
    );
};

export default Login;