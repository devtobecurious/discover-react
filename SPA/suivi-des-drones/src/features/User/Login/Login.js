import userService from "../Services/user.service";
import LoginForm from "./LoginForm";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const Login = props => {
    const service = userService;
    const dispatch = useDispatch();
    let navigate = useNavigate();

    const login = async (email, password) => {
        const user = await service.log(email, password);

        dispatch({
            type: 'login',
            data: user
        });

        navigate('/');
    }

    return (
        <>
            <LoginForm onLogin={login}></LoginForm>
        </>
    )
};

export default Login;