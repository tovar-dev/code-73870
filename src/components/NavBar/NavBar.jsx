import CartWidget from '../Cart/CartWidget';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className='nav-container'>
            <NavLink to="/" className="nav-logo">
                <img src="./logo.avif" alt="Logo" />
            </NavLink>
            <NavLink to="/categories/tortas">
                Tortas
            </NavLink>
            <NavLink to="/categories/sandwiches">
                Sandwiches
            </NavLink>
            <NavLink to="/categories/burritos">
                Burritos
            </NavLink>
            <NavLink to="/categories/ensaladas">
                Ensaladas
            </NavLink>
            <CartWidget />
        </nav>
    )
};

export default NavBar;