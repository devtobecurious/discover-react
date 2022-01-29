import MainHeader from "../../shared/components/MainHeader";
import { useDispatch, useSelector } from 'react-redux';

const Header = props => {
    const user = useSelector(state => state.user);

    return (user.isLogged && <MainHeader></MainHeader>);
};

export default Header;