import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'

function App() {
  return (
    <>
    <Navbar />
    <ItemListContainer mensaje={"No se encontraron productos"} />
    </>
  );
}

export default App;
