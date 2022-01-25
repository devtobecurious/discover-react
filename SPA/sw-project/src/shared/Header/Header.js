import { Link } from "react-router-dom";
import AuthenticationContext from "../../store/authentication-context";

const Header = props => {
    return (
        <header>
            <AuthenticationContext.Consumer>
                {context => (
                    <div>
                        {!context.isLoggedIn && <Link to="/login">Se connecter</Link>}
                        {context.isLoggedIn && <Link to="/home">Accueil</Link>}
                        {context.isLoggedIn && <Link to="/movies">Films</Link>}
                    </div>
                )}

            </AuthenticationContext.Consumer>
        </header>
    );
};

export default Header;