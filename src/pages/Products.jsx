import { useApi } from '../api/useApi';
import useStore from '../store/useStore';
import { useState } from 'react';
import ProductForm from '../Components/ProductForm';

function Products() {
const { data: productos, create, update, remove } = useApi('productos');
const { user, addToCarrito } = useStore();
const [editingProduct, setEditingProduct] = useState(null);

const handleCreate = (form) => create({ ...form, precio: Number(form.precio), stock: Number(form.stock) });
const handleUpdate = (form) => {
    update(form.id, { ...form, precio: Number(form.precio), stock: Number(form.stock) });
    setEditingProduct(null);
};

return (
    <div className="container mt-4">


    {user?.role === 'admin' && (
        <>
        <h5>{editingProduct ? 'Editar producto' : 'Agregar nuevo producto'}</h5>
        <ProductForm onSubmit={editingProduct ? handleUpdate : handleCreate} initialData={editingProduct} />
        </>
    )}
    <h2>Productos</h2>
    <div className="row">
        {productos.map(prod => (
        <div className="col-md-4" key={prod.id}>
            <div className="card mb-3 h-100">
            {prod.imagen && (
                <img src={prod.imagen} className="card-img-top" alt={prod.nombre} style={{ height: '200px', objectFit: 'cover' }} />
            )}
            <div className="card-body">
                <h5 className="card-title">{prod.nombre}</h5>
                <p className="card-text">Precio: ${prod.precio}</p>
                <p className="card-text">Stock: {prod.stock}</p>

                {user?.role === 'cliente' && (
                <button className="btn btn-success" onClick={() => addToCarrito(prod)}>Agregar al carrito</button>
                )}

                {user?.role === 'admin' && (
                <>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => setEditingProduct(prod)}>Editar</button>
                    <button className="btn btn-danger btn-sm" onClick={() => remove(prod.id)}>Eliminar</button>
                </>
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