import { useApi } from '../api/useApi';
import useStore from '../store/useStore';

function Products() {
const { data: productos } = useApi('productos');
const { user, addToCarrito } = useStore();

return (
<div className="container mt-4">
    <h2>Productos</h2>
    <div className="row">
        {productos.map(prod => (
        <div className="col-md-4" key={prod.id}>
            <div className="card mb-3 h-100">
            {prod.imagen && (
                <img src={prod.imagen} className="card-img-top" alt={prod.nombre} style={{ height: '300px', width:'100%', objectFit: 'cover', objectPosition: 'center'}} />
            )}
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">Precio: ${prod.precio}</p>
                <p className="card-text">Stock: {prod.stock}</p>
                {user?.role === 'cliente' && (
                <button className="btn btn-success" onClick={() => addToCarrito(prod)}>Agregar al carrito</button>
                )}
            </div>
            </div>
        </div>
        ))}
    </div>
    </div>
);
}

export default Products;