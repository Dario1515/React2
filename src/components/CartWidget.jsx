import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="btn btn-warning position-relative d-flex align-items-center gap-2">
      <span role="img" aria-label="carrito">🛒</span>
      <span>Carrito</span>
      {totalQuantity > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalQuantity}
          <span className="visually-hidden">productos en el carrito</span>
        </span>
      )}
    </Link>
  );
};

export default CartWidget;

