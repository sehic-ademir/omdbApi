import React from 'react';
import './App.css';
import Home from './containers/sites/home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './containers/header/navbar';
import Movies from './containers/sites/movies';
import MovieCard from './containers/sites/movieCard';
function App() {
  return (
    <div className="App">
 
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/search/:id" component={Movies} />
          <Route  path="/title/:id" component={MovieCard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
