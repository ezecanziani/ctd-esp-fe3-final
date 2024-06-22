import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Detail = () => {
  const { id } = useParams();
  const { state } = useAppContext();
  const { theme } = state;
  const [dentist, setDentist] = useState(null);

  useEffect(() => {
    const fetchDentist = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await response.json();
      setDentist(data);
    };

    fetchDentist();
  }, [id]);

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <div className={`detail ${theme}-theme`}>
      <h1>{dentist.name}</h1>
      <p>Email: {dentist.email}</p>
      <p>Phone: {dentist.phone}</p>
      <p>Website: {dentist.website}</p>
    </div>
  );
};

export default Detail;