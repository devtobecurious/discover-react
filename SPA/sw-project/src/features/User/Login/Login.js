import { useState, useReducer, useEffect, useContext } from 'react';
import Input from '../../../shared/UI/Input/Input';
import AuthenticationContext from '../../../store/authentication-context';
import './Login.css';

const emailReducer = (state, action) => {
    let returnState = { value: '', isValid: false }; // état par défaut

    if (action.type === 'USER_INPUT') {
        returnState = { value: action.value, isValid: action.value.includes('@') }
    }

    return returnState;
};

const passwordReducer = (state, action) => {
    let returnState = { value: '', isValid: false }; // état par défaut

    if (action.type === 'USER_INPUT') {
        returnState = { value: action.value, isValid: action.value !== '' }
    }

    return returnState;
};

const Login = props => {
    const context = useContext(AuthenticationContext);
    const [formIsValid, setFormIsValid] = useState(false);

    // plus besoin car on utilise useReducer => const [password, setPassword] = useState('');
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: '', isValid: false });

    // plus besoin car on utilise useReducer => const [email, setEmail] = useState('');
    const [emailState, dispatchEmail] = useReducer(emailReducer, { value: '', isValid: false });

    const changeEmail = (event) => {
        // plus besoin car useReducer maintenant => setEmail(event.target.value);
        const action = { type: 'USER_INPUT', value: event.target.value };
        dispatchEmail(action);

        setFormIsValid(event.target.value !== '' && passwordState.value);
    };

    const {isValid: emailStateValid} = emailState.isValid;
    const {isValid: passwordStateValid} = passwordState.isValid;

    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(emailStateValid && passwordStateValid);
        }, 500);

        return () => {
            // cleaner
            clearTimeout(identifier);
        };
    }, [emailStateValid, passwordStateValid]);

    const changePassword = (event) => {
        // plus besoin car useReducer maintenant => setPassword(event.target.value);

        const action = { type: 'USER_INPUT', value: event.target.value };
        dispatchPassword(action);

        setFormIsValid(event.target.value !== '' && emailState.value);
    };

    const validLogin = (event) => {
        event.preventDefault();
        context.login(emailState.value, passwordState.value);
    };

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={validLogin}>
                <div>
                    <Input type="email" label="Email" value={emailState.value} onChange={changeEmail} id="email"></Input>
                
                    <div>
                        <label>Password</label>
                        <input type="password" value={passwordState.value} onChange={changePassword}></input>
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