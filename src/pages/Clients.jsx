import { useApi } from '../api/useApi';

function Clients() {
const { data: clientes } = useApi('clientes');

return (
    <div className="container mt-4">
    <h2>Clientes registrados</h2>
    <ul className="list-group">
        {clientes.map(cli => (
        <li className="list-group-item" key={cli.id}>
            {cli.nombre} - {cli.email} - {cli.telefono}
        </li>
        ))}
    </ul>
    </div>
);
}

export default Clients;