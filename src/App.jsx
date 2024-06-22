import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Contact from './routes/Contact';
import Favs from './routes/Favs';
import { useAppContext } from './context/AppContext';

const App = () => {
  const { state } = useAppContext();
  const { theme } = state;

  return (
    <div className={`app ${theme}-theme`}>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;