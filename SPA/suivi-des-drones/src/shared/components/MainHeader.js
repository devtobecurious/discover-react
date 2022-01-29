import { Navbar, NavItem, Icon } from 'react-materialize';

const MainHeader = props => {
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
        <NavItem href="/">
            Accueil
        </NavItem>
        <NavItem href="/drones">
            Drones
        </NavItem>
    </Navbar>)
};

export default MainHeader;