import React from 'react';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Logo de tu tienda
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Cámaras
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Objetivos
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Contacto
            </a>
          </li>
          {/* Agregar aquí el componente CartWidget */}
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
