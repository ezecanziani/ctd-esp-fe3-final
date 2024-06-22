import React, { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import Card from '../Components/Card'; 

const Home = () => {
  const { state, dispatch } = useAppContext();
  const { dentists, theme } = state;

  useEffect(() => {
    const fetchDentists = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      dispatch({ type: 'SET_DENTISTS', payload: data });
    };

    fetchDentists();
  }, [dispatch]);

  return (
    <div className={`home ${theme}-theme`}>
      {dentists.map(dentist => (
        <Card key={dentist.id} dentist={dentist} />
      ))}
    </div>
  );
};

export default Home;