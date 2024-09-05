import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Asegúrate de que la ruta es correcta
import './Header.css'; // Crearás este archivo para estilos específicos del Header

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Olympics Logo" />
        <h1>Juegos olimpicos</h1>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/Countries">paises</Link></li>
          <li><Link to="/athletes">atletas</Link></li>
          <li><Link to="/Sports">Deportes</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
