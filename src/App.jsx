import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Header from './components/Header';
import useStore from './store/useStore';
import Cart from './pages/Cart';


function App() {
  const { user } = useStore();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/productos" element={<Products />} />
        <Route
          path="/clientes"
          element={user?.role === 'admin' ? <Clients /> : <Navigate to="/login" />}
        />
        <Route path="/carrito" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;