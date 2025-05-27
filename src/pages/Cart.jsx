import useStore from '../store/useStore';

function Cart() {
const { carrito } = useStore();

const total = carrito.reduce((acc, prod) => acc + prod.precio, 0);

return (
    <div className="container mt-4">
    <h2>Carrito de Compras</h2>
    {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
    ) : (
        <>
        <ul className="list-group mb-3">
            {carrito.map((prod, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                {prod.nombre} - ${prod.precio}
            </li>
            ))}
        </ul>
        <h5>Total: ${total}</h5>
        </>
    )}
    </div>
);
}

export default Cart;