import { useState } from 'react';
import './Login.css';

const Login = props => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);

    const changeEmail = (event) => {
        setEmail(event.target.value);
        setFormIsValid(event.target.value !== '' && password);
    };

    const changePassword = (event) => {
        setPassword(event.target.value);
        setFormIsValid(event.target.value !== '' && email);
    };

    const validLogin = (event) => {
        event.preventDefault();

        props.onLogin(email, password);
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={validLogin}>
                <div>
                    <div>
                        <label>Email</label>
                        <input type="email" value={email} onChange={changeEmail}></input>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" value={password} onChange={changePassword}></input>
                    </div>
                    <div>
                        <button type="submit" disabled={!formIsValid}>Login</button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Login;