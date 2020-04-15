import React from 'react';
import MoviePoster from "../MoviePoster";
import './styles.css'
import '../moviedatabase'
import moviesInfoList from "../moviedatabase";

class MoviesGrid extends React.Component {

    render() {
        return (
            <div className="moviesgrid">
                {this.props.allMoviesData.map((movie) => <MoviePoster movie={movie}/>)}

            </div>
        );
    }
}


export default MoviesGrid;