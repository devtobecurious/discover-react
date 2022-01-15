import { Link } from "react-router-dom";

const Header = props => {
    return (
        <header>
            <div>
            <Link to="/movies">Films</Link>
            </div>
        </header>
    );
};

export default Header;