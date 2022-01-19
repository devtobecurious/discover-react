import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import AuthenticationService from './auth-service';

const Authentication = props => {
    const [userInput, setUserInput] = useState({
        login: '',
        password: ''
    });

    const logUser = async () => {
        console.info('log', null);
        const user = await AuthenticationService.login(userInput.login, userInput.password);
    }

    const loginChangedHandler = (event) => {
        setUserInput(prevState => ({ ...prevState, login: event.target.value }));
    }
    const passwordChangedHandler = (event) => {
        setUserInput(prevState => ({ ...prevState, password: event.target.value }));
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">Email</div>
                <div className="col"><input type="email" value={userInput.login} onChange={loginChangedHandler}></input></div>
            </div>
            <div className="row">
                <div className="col">Password</div>
                <div className="col"><input type="password" value={userInput.password} onChange={passwordChangedHandler}></input></div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="button success" onClick={logUser}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default Authentication;