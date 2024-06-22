import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Favorites from './routes/Favs';
import Contact from './routes/Contact';
import { AppProvider } from './context/AppContext';

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/dentist/:id" component={Detail} />
          <Route exact path="/favs" component={Favorites} />
          <Route exact path="/contacto" component={Contact} />
          <Route component={() => <div>404 Not Found</div>} />
        </Switch>
      </Router>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

