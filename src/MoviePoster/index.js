import React from 'react'
import './styles.css'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

class MoviePoster extends React.Component {
    render() {
        return (
            <Link to="/moviedetails">
                <div className="movieCard">
                    <div className="movie-poster" >
                        {/*{this.props.movieName}*/}
                        {/*{this.props.genre}*/}
                        {/*{this.props.contentRating}*/}
                        {/*{this.props.movieName}*/}
                        <div>
                            <img className="movieimg" src={this.props.imglink} alt=""/>
                        </div>
                    </div>
                    <div className="mv-inf">
                        <div className="mv-inf-top">
                            <div className="mv-inf-title">
                                {this.props.movieName}
                            </div>
                        </div>
                        <div>
                            <hr/>
                        </div>
                        <div className="mv-inf-btm">
                            <div className="mv-inf-genre">
                                {this.props.genre}
                            </div>
                            <div className="mv-inf-ratings">
                                {this.props.contentRating}
                            </div>


                        </div>

                    </div>
                </div>
            </Link>


        );
    }
}

export default MoviePoster;