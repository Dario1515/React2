import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + (item.precio || item.price) * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container mt-5 text-center">
        <h2>Tu carrito está vacío 😕</h2>
        <Link to="/" className="btn btn-warning mt-3">
          Ir a comprar
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">🛒 Carrito de compras</h2>

      <div className="row g-4">
        {cart.map((item) => (
          <div className="col-md-6" key={item.id}>
            <div className="card shadow-sm h-100">
              <div className="row g-0">
                <div className="col-4">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start h-100 object-fit-cover"
                    alt={item.nombre || item.title}
                  />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre || item.title}</h5>
                    <p className="card-text">Precio: ${item.precio || item.price}</p>
                    <p className="card-text">Cantidad: {item.quantity}</p>
                    <p className="card-text fw-bold">
                      Subtotal: ${(item.precio || item.price) * item.quantity}
                    </p>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => removeItem(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 text-end">
        <h4 className="fw-bold">Total: ${total}</h4>
        <button className="btn btn-danger me-2" onClick={clear}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default Cart;
