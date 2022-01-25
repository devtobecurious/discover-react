import { Link } from "react-router-dom";

const Header = props => {
    return (
        <header>
            <div>
            {!props.isAuthenticated && <Link to="/login">Se connecter</Link>}
            {props.isAuthenticated && <Link to="/home">Accueil</Link>}
            {props.isAuthenticated && <Link to="/movies">Films</Link>}
            </div>
        </header>
    );
};

export default Header;