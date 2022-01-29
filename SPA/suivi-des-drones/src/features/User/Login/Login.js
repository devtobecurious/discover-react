import LoginForm from "./LoginForm";

const Login = props => {


    const login = (email, password) => {
        console.info(email, password);
    }

    return (
        <>
            <LoginForm onLogin={login}></LoginForm>
        </>
    )
};

export default Login;