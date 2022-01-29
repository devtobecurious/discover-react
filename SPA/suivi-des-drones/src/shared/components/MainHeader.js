import { Navbar, NavItem, Icon } from 'react-materialize';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import userService from '../../features/User/Services/user.service';

const MainHeader = props => {
    let navigate = useNavigate();
    const dispatch = useDispatch();

    const goToDronesList = () => {
        navigate('/drones');
    }

    const goToHome = () => {
        navigate('/');
    }

    const logout = () => {
        userService.logOut();
        dispatch({
            type: 'logout'
        });
    }

    return (<Navbar
        alignLinks="right"
        brand={<a className="brand-logo" href="#">Logo</a>}
        id="mobile-nav"
        menuIcon={<Icon>menu</Icon>}
        options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
        }}
    >
        <NavItem onClick={goToHome}>
            Accueil
        </NavItem>
        <NavItem onClick={goToDronesList}>
            Drones
        </NavItem>
        <NavItem onClick={logout}>
            Logout
        </NavItem>
    </Navbar>)
};

export default MainHeader;