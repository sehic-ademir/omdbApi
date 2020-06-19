import React, { Component } from 'react';
import './navbar.css';
import SearchBar from './searchbar';
import { Link } from 'react-router-dom';
class Navbar extends Component {
  render(){
   
    return(

<nav className="navbar navbar-expand-lg navbar-light">
  <Link to="/" className="ml-4"><h5><button className="imdb-logo">IMDb</button> </h5></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto mr-4">
      <SearchBar />
    </ul>
  </div>
</nav>

    );
  }
}
export default Navbar;
