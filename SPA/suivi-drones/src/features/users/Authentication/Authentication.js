import "bootstrap/dist/css/bootstrap.min.css";
import AuthenticationService from './auth-service';

const Authentication = props => {
    const logUser = async () => {
        const user = await AuthenticationService.login('', '');
    }

    return (
        <div className="row">
            <div className="col">
                <button className="button success" onClick={ logUser }>Login</button>
            </div>
        </div>
    );
};

export default Authentication;