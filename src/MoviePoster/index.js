import React from 'react'
import './styles.css'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

class MoviePoster extends React.Component {
    render() {
        const movie =this.props.movie;
        return (
            <Link to={`/moviedetails/${movie.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <div className="movieCard">
                    <div className="movie-poster" >
                        <div>
                            <img className="movieimg" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""/>
                        </div>
                    </div>
                    <div className="mv-inf">
                        <div className="mv-inf-top">
                            <div className="mv-inf-title">
                                {movie.original_title}
                            </div>
                        </div>
                        <div>
                            <hr/>
                        </div>
                        <div className="mv-inf-btm">
                            <div className="mv-inf-overview">
                                {movie.overview.substr(0,70)}
                            </div>
                            <div className="mv-inf-vote-avg">
                                {movie.vote_average}
                            </div>


                        </div>

                    </div>
                </div>
            </Link>


        );
    }
}

export default MoviePoster;