import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import userService from '../Services/user.service';

const AuthenticateUser = props => {
    const user = useSelector(state => state.user);
    let navigate = useNavigate();

    useEffect(() => {
        let localUser = user;
        let url = '/login';
        
        if (! localUser.isLogged) {
            localUser = userService.get();
        }

        if (! localUser) {
            navigate(url);
        }
    }, [user, navigate]);

    return (
        <>
            {props.children}
        </>
    )
};

export default AuthenticateUser;