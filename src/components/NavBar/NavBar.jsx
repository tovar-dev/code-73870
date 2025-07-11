import CartWidget from '../Cart/CartWidget';
import './NavBar.css';
const NavBar = () => {
    return (
        <nav className='nav-container'>
            <img src='./logo.avif'/>
            <a href="/">Inicio</a>
            <a href="/about">Acerca de nosotros</a>
            <a href="/products">Todos los productos</a>
            <a href="/featured-products">Productos destacados</a>
            <CartWidget />
        </nav>
    )
};

export default NavBar;