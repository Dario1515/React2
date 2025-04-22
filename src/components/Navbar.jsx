import { NavLink } from "react-router-dom";
import CartWidget from "./cartwidget";

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100 fixed-top pt-1 pb-1">
        <div className="container px-1">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logo_Honda_F1.png/289px-Logo_Honda_F1.png"
              className="logo"
              alt="logo"
            />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/">Inicio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/productos">Productos</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/contacto">Contacto</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/cart">
                  <i className="bi bi-cart"></i>
                </NavLink>
              </li>
            </ul>
            <div className="col d-flex justify-content-end">
              <CartWidget />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
