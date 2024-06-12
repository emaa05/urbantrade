import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavComponente = ({ setSelectedBrand }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-warning">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link className="navbar-brand text-dark" to="/">Urban Trade</Link>
        <div className="">
          <CartWidget />
        </div>
        <div className="d-flex">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Ropa" onClick={() => setSelectedBrand('Ropa')}>Ropa</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Zapatillas" onClick={() => setSelectedBrand('Zapatillas')}>Zapatillas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/RopaDeportiva" onClick={() => setSelectedBrand('Ropa Deportiva')}>Ropa Deportiva</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavComponente;
