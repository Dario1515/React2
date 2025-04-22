import Navbar from './components/navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'; 
import Footer from './components/Footer';
import Productos from './components/Productos';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>  
        <Navbar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/productos"} element={<Productos />} />
          <Route path={'/category/:id'} element={<ItemListContainer />} />
          <Route path={'/item/:id'} element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;