import CartWidget from "./cartwidget";



const Navbar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100 fixed-top pt-1 pb-1">
            <div className="container px-1">
                <a className="navbar-brand" href="./index.html">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Logo_Honda_F1.png/289px-Logo_Honda_F1.png" className="logo" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-light" href="./index.html">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link productos text-light" href="#productos">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#contacto">Contacto</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="#"><i className="bi bi-cart"></i></a>
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