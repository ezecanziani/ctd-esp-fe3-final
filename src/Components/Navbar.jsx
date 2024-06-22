import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Navbar = () => {
  const { state, dispatch } = useAppContext();
  const { theme } = state;

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`navbar ${theme}-theme`}>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/favs">Favoritos</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
      <button onClick={toggleTheme}>Cambiar Tema</button>
    </nav>
  );
};

export default Navbar;