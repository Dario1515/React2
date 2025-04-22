import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Productos from "../assets/Productos.json";

const ItemlistContainer = () => {
  const { id } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        const filter = id ? Productos.filter(item => item.category === id) : Productos;
        resolve(filter);
      }, 1000);
    });

    promesa.then(res => {
      setProductos(res);
    });
  }, [id]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Productos</h1>
      <div className="row">
        {productos.map(producto => (
          <div className="col-md-3" key={producto.id}>
            <img src={producto.image} alt={producto.title} className="img-fluid" />
            <h5 className="mt-2 fw-bold">{producto.title}</h5>
            <p>{producto.description}</p>
            <p className="fw-bold">${producto.price}</p>
            <Link to={`/item/${producto.id}`} className="btn btn-primary">
              Detalles del Producto
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemlistContainer;