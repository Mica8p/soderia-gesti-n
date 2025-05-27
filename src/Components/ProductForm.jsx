import { useState, useEffect } from 'react';

function ProductForm({ onSubmit, initialData }) {
const [form, setForm] = useState({ nombre: '', precio: '', stock: '', imagen: '' });

useEffect(() => {
    if (initialData) setForm(initialData);
}, [initialData]);

const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ nombre: '', precio: '', stock: '', imagen: '' });
};

return (
    <form onSubmit={handleSubmit} className="mb-4">
    <input className="form-control mb-2" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
    <input className="form-control mb-2" name="precio" placeholder="Precio" type="number" value={form.precio} onChange={handleChange} required />
    <input className="form-control mb-2" name="stock" placeholder="Stock" type="number" value={form.stock} onChange={handleChange} required />
    <input className="form-control mb-2" name="imagen" placeholder="URL de imagen" value={form.imagen} onChange={handleChange} required />
    <button type="submit" className="btn btn-primary">{initialData ? 'Actualizar' : 'Agregar'} producto</button>
    </form>
);
}

export default ProductForm;