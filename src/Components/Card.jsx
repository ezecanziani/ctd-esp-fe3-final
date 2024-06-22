import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Card = ({ dentist }) => {
  const { state, dispatch } = useAppContext();
  const { theme, favorites } = state;

  const isFavorite = favorites.some(fav => fav.id === dentist.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: dentist.id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: dentist });
    }
  };

  return (
    <div className={`card ${theme}-theme`}>
      <h3>{dentist.name}</h3>
      <p>{dentist.email}</p>
      <Link to={`/dentist/${dentist.id}`}>Ver Detalles</Link>
      <button onClick={handleFavorite}>
        {isFavorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
};

export default Card;