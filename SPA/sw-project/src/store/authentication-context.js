import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const AuthenticationContext = React.createContext({
    isAuthenticated: false, 
    login: (email, password) => {},
    logout: () => {}
});

export const AuthenticationProviderContext = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        const userIsLogged = localStorage.getItem('isLogged');
        let defaultRoute = 'home';
    
        const isLogged = (userIsLogged && userIsLogged === 'true');
        setIsLoggedIn(isLogged);

        if (! isLogged) {
           defaultRoute = 'login';
        }

        navigate(`${defaultRoute}`);
      }, []);

    const login = (email, password) => {
        setIsLoggedIn(true);
        localStorage.setItem('isLogged', true);
        navigate('/home');
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLogged');
        navigate('/login');
    };

    const context = { 
        isAuthenticated: isLoggedIn, 
        login: login,
        logout: logout 
    };

    return <AuthenticationContext.Provider value={ context }>{props.children}</AuthenticationContext.Provider>
};

export default AuthenticationContext;