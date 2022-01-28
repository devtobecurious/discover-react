import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import AuthenticationContext from "../../store/authentication-context";

const Header = props => {
    const context = useContext(AuthenticationContext);

    return (
        <header>
            <div>
                {!context.isAuthenticated && <NavLink to="/login">Se connecter</NavLink>}                
                {context.isAuthenticated && <NavLink to="/home">Accueil</NavLink>}
                {context.isAuthenticated && <Link to="/movies">Films</Link>}
                {context.isAuthenticated && <Link to="/dsdsdsd">Not found</Link>}
                {context.isAuthenticated && <button onClick={context.logout}>Se déconnecter</button>}
            </div>
        </header>
    );
};

export default Header;