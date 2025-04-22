import { NavLink } from "react-router-dom";

const Productos = () => {
  return (
    <div className="container mt-5 pt-3">
      <div className="row">

        {/* Suspensión */}
        <div className="col-md-3 text-center">
          <NavLink to="/category/suspension" className="text-decoration-none text-dark">
            <img src="/images/amortiguadores.jpg" alt="Suspensión" className="img-fluid" />
            <p className="fw-bold mt-2">Suspensión</p>
          </NavLink>
        </div>

        {/* Frenos */}
        <div className="col-md-3 text-center">
          <NavLink to="/category/frenos" className="text-decoration-none text-dark">
            <img src="/images/discosdefreno.jpg" alt="Frenos" className="img-fluid" />
            <p className="fw-bold mt-2">Frenos</p>
          </NavLink>
        </div>

        {/* Partes del Motor */}
        <div className="col-md-3 text-center">
          <NavLink to="/category/motor" className="text-decoration-none text-dark">
            <img src="/images/partesdemotor.jpg" alt="Partes del Motor" className="img-fluid" />
            <p className="fw-bold mt-2">Partes del Motor</p>
          </NavLink>
        </div>

        {/* Neumáticos */}
        <div className="col-md-3 text-center">
          <NavLink to="/category/neumaticos" className="text-decoration-none text-dark">
            <img src="/images/cubierta.jpg" alt="Neumáticos" className="img-fluid" />
            <p className="fw-bold mt-2">Neumáticos</p>
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Productos;
