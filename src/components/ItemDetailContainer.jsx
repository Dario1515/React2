import productos from "../assets/Productos.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);
  const { id } = useParams();

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

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Detalle del Producto</h1>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <img src={item.image} alt={item.title} className="img-fluid" />
          <h5 className="mt-2 fw-bold">{item.title}</h5>
          <p>{item.description}</p>
          <p className="fw-bold">${item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;