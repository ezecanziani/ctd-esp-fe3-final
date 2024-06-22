import React from 'react';
import { useAppContext } from '../context/AppContext';
import Card from '../Components/Card';

const Favs = () => {
  const { state } = useAppContext();
  const { favorites, theme } = state;

  return (
    <div className={`favs ${theme}-theme`}>
      <h1>Favoritos</h1>
      {favorites.length === 0 ? (
        <p>No hay favoritos.</p>
      ) : (
        favorites.map(dentist => <Card key={dentist.id} dentist={dentist} />)
      )}
    </div>
  );
};

export default Favs;