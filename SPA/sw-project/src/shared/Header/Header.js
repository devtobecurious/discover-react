import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthenticationContext from "../../store/authentication-context";

const Header = props => {
    const context = useContext(AuthenticationContext);

    return (
        <header>
            <div>
                {!context.isAuthenticated && <Link to="/login">Se connecter</Link>}                
                {context.isAuthenticated && <Link to="/home">Accueil</Link>}
                {context.isAuthenticated && <Link to="/movies">Films</Link>}
                {context.isAuthenticated && <button onClick={context.logout}>Se déconnecter</button>}
            </div>
        </header>
    );
};

export default Header;