import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputSearch: '',
            buttonPressed: false            
         };
         this.handleSearch = this.handleSearch.bind(this);

    }
    handleSearch(e){
        this.setState({
            searchInput: e.target.value
        });
    }
    
    render() { 
        return (             
            <div>
        <form onSubmit={this.handleSubmit} className="input-group">
        { this.state.searchInput === undefined  ? '' : this.state.searchInput === '' ? '' : 
           <div className="input-group-prepand">
               <Link to={`/search/${this.state.searchInput.trim()}`} className="col-md-6">
               <button className="btn btn-warning" type="submit">Search</button>
               </Link>
               </div>}
            <input type="text" className="form-control round" onChange={this.handleSearch} placeholder="Search.." />
          
        </form> 
        
        </div>
        );
    }
}
 
export default SearchBar;