import userService from "../Services/user.service";
import LoginForm from "./LoginForm";

const Login = props => {
    const service = userService;

    const login = async (email, password) => {
        const user = await service.log(email, password);

        console.log(user);
    }

    return (
        <>
            <LoginForm onLogin={login}></LoginForm>
        </>
    )
};

export default Login;