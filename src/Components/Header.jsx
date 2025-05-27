import { Link } from 'react-router-dom';
import useStore from '../store/useStore';

function Header() {
    const { user, logout } = useStore();

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        <Link className="navbar-brand" to="/">Sodería</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link className="nav-link" to="/productos">Productos</Link></li>
                {user?.role === 'cliente' && (
                <li className="nav-item">
                <Link className="nav-link" to="/carrito">Carrito</Link>
                </li>)}

                {user?.role === 'admin' && (
                <>
                
                <li className="nav-item"><Link className="nav-link" to="/clientes">Clientes</Link></li>
                </>
                )}
            </ul>
            <ul className="navbar-nav ml-auto">
            {!user ? (
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            ) : (
            <li className="nav-item"><button className="btn btn-outline-light" onClick={logout}>Salir</button></li>
            )}
        </ul>
        </div>
    </nav>
    );
}

export default Header;