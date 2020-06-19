import React, { Component } from 'react';
import './styles/movies.css';
import Star from '../../images/star.png';
import Loader from '../../components/loader';
import noImg from '../../images/no-img.png';
class MovieCard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            movieID: 'tt2294629',
            prevState: '',
            data: [],
            loaded: false,
         }
    }
    async componentDidMount(){
        if(this.state.loaded){
            this.setState({
                loaded: false
            });
        }
        const url = this.props.match.params.id;
        setTimeout  ( async ( ) => {
        const response = await fetch('http://www.omdbapi.com/?apikey=e7d4bf31&i='+url + '&plot=full' );
        const json = await response.json();
        this.setState({
            data: json
        });
        this.setState({
            prevState: url,
            loaded: true
        });
    }, 900);
}
    render() { 
        const {
            Title,
            Released,
            Genre,
            Plot,
            Poster,
            imdbRating,
            Year,
            Awards,
            Runtime,
            // Director,
            Writer,
            Actors,
            // Ratings,
            Type,
            imdbID
        } = this.state.data;
        return ( 
            <div>
           { this.state.loaded ?
           <div>
               {this.state.data.imdbID ?
                <div className="col-lg-8  col-md-12 row mx-auto mt-4 bg-dark rounded px-0">
                    <div className="col-lg-9 col-md-6 p-4 text-light">
                        <div className="row mb-4">
                            <div className="col-lg-9 text-left">
                                <h2>{Title} <span className="text-warning">({Year})</span></h2>
                            </div>
                            <div>
                                
                            </div>
                            <div className="col-lg-3 col-md-6 my-auto ml-auto py-4 py-lg-0">
                                <img src={Star} className="align-middle" alt="star" />
                                <span className="h3 align-middle">{imdbRating}
                                    <span className="text-secondary h6">/10
                                    </span>
                                </span>
                            </div>
                            <div className="col-lg-12 text-left">
                            <h6>{Released}, <span className="text-secondary">{Type}</span></h6>
                                <div className="mt-3 row no-gutters">
                                    <h6 className="p-2 rounded border text-warning border-warning">{Runtime}</h6><h6 className="mt-2 mt-md-0 ml-2 align-self-center">{Genre}</h6>
                                </div>
                            </div>
                        </div>
                        <div className="text-justify">
                            <p>{Plot}</p>
                        </div>
                        <div className="text-left my-1"><span className=" text-warning">Actors:</span> {Actors}</div>
                        <div className="text-left my-1"><span className=" text-warning">Writers:</span> {Writer}</div>
                        <div className="text-left my-1"><span className=" text-warning">Awards:</span> {Awards}</div>
                        <div className="text-left mt-2">
                        <a href={'http://www.imdb.com/title/' + imdbID} className="text-dark" target="_blank" rel="noopener noreferrer"><button className="imdb-logo-small">IMDb</button></a>
                    </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-12 pl-0 text-left rounded cover-photo" style={{backgroundImage: Poster !== 'N/A' ? `url(${Poster})` : `url(${noImg})`, backgroundSize: 'cover'}}>
                         <div className="w-100 movie-card-right-img h-100"></div>
                    </div>
                  {Poster !== 'N/A' ?   
                  <div className="mobile-photo col-12 pb-4">
                        <img src={Poster} alt="mobile-p" />
                    </div>
                    : '' }
               </div> :
               <div className="text-danger mx-auto">This ID does not exist.</div>
                }
            </div>
            : <Loader /> }
            </div>
         );
    }
}
 
export default MovieCard;