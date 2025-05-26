import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Footer from './components/Footer';
import Productos from './components/Productos';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';
import NotFound from './components/Error404'; // Asumiendo que creaste este componente

function App() {
  return (
    <CartContextProvider>
      <Router>  
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} /> {/* Aquí usamos el componente NotFound */}
        </Routes>
        <Footer />
      </Router>
    </CartContextProvider>
  );
}

export default App;
