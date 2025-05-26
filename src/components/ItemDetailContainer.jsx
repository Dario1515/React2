import productos from "../assets/Productos.json";
import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();
  const [visible, setVisible] = useState(true);
  const { addItem } = useContext(CartContext);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    });

    promesa.then((resultado) => {
      const productoEncontrado = resultado.find((item) => item.id.toString() === id);
      setItem(productoEncontrado);
    });
  }, [id]);

  if (!item) {
    return <p className="text-center mt-5">Cargando producto...</p>;
  }
  const onAdd = (quantity) => {
    console.log(`Agregado ${quantity} producto(s) al carrito`);
    addItem(item, quantity);
    setVisible(false);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Detalle del Producto</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img src={item.image} alt={item.title} className="img-fluid" />
          <h5 className="mt-2 fw-bold">{item.title}</h5>
          <p>{item.description}</p>
          <p className="fw-bold">${item.price}</p>
      
          {visible ?<ItemCount stock={item.stock} onAdd={onAdd} /> : <Link to="/cart" className="btn btn-warning">Ir al carrito</Link>}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;