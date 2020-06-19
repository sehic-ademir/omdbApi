import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import noImg from '../../images/no-img.png'
import './styles/movies.css';
import Loader from '../../components/loader';
class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            prevState: '',
            loaded: false,
            pageNum: 1

         };
         this.handlePageRight = this.handlePageRight.bind(this);
         this.handlePageLeft = this.handlePageLeft.bind(this);

    }

 async componentDidMount(event){
     this.loadMovies();
 }
    loadMovies(){
        if(this.state.loaded){
        this.setState({
            loaded: false
        });
    }
        
        let url = '';
        setTimeout  ( async ( ) => {        

            if(this.props.match)
                url = this.props.match.params.id;
            else
            url = 'blade runner';
        const response = await fetch('http://www.omdbapi.com/?apikey=e7d4bf31&s='+url+'&page='+this.state.pageNum+'&plot=full');
        const json = await response.json();
        if(json.Search){
        this.setState({
            data: json
        });
        }
        else {
            this.setState({
                data: [],
            });
        }
        if(!this.state.loaded){
            this.setState({
                prevState: url,
                loaded: true
            });
        }
    
    }, 900);

    }

  componentDidUpdate(){
      if(this.props.match){
      if(this.props.match.params.id !== this.state.prevState){
      this.loadMovies();
      }
      }
  }
  handlePageRight(){
    this.setState({
        pageNum: this.state.pageNum + 1
    });
    this.loadMovies();
}
handlePageLeft(){
    this.setState({
        pageNum: this.state.pageNum - 1
    });
    this.loadMovies();
}
    render() {
    
       return ( 
        <div className="container mt-4">

       {this.state.loaded ? 
       <div>
         {this.state.pageNum > 1 ? <button className="arrow arrow-left btn" onClick={this.handlePageLeft}><i className="fas fa-chevron-circle-left  text-warning fa-4x"></i></button> : '' }
           <div className="col-md-10 mx-auto">
               <div className="row no-gutters mx-auto">
              {
                  this.state.data.Search ? 
              this.state.data.Search.map((movie) => 

                <div className="card col-md-4 mx-auto my-4 p-4 no-border" key={movie.imdbID}  >
                  <div className="border rounded">
                    <img className="card-img-top mx-auto" src={movie.Poster !== 'N/A' ? movie.Poster : noImg} alt="Card cap" />
                    <div className="card-body bg-dark text-light">
                      <h5 className="card-title">{movie.Title}</h5>
                      <p className="card-text">{movie.Year}</p>
                    </div>
                    <div className="card-footer">
               <Link to={`/title/${movie.imdbID}`}><button className="btn btn-warning">See More</button></Link> 
                    </div>
                </div>
                </div>
              ) 
              
            : <div className="text-danger mx-auto">No results found, please try again.</div>
            }
            </div>
            </div>
            <button className="arrow arrow-right btn" onClick={this.handlePageRight}><i className="fas fa-chevron-circle-right text-warning fa-4x"></i></button>

            </div>
            :  <Loader /> }
            
           
        </div>
        );
    }
}
 
export default Movies;