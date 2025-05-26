import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../store/useStore';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const { setUser } = useStore();
const navigate = useNavigate();

const handleLogin = async () => {
    const res = await fetch(`http://localhost:3000/usuarios?email=${email}&password=${password}`);
    const data = await res.json();
    if (data.length > 0) {
    setUser(data[0]);
    navigate('/');
    } else {
    alert('Credenciales incorrectas');
    }
};

return (
    <div className="container mt-5">
    <h2>Iniciar sesión</h2>
    <input className="form-control mb-2" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
    <input className="form-control mb-2" type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
    <button className="btn btn-primary" onClick={handleLogin}>Ingresar</button>
    </div>
);
}

export default Login;