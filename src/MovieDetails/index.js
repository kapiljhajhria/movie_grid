import React from 'react';
import './styles.css'
import MovieGrid from "../MovieGrid";

export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            isLoading: false,
            data: null
        }
    }

    // https://api.themoviedb.org/3/movie/102899?api_key=9455f2fb0b779e4e7588ad14649658d3
    getApiKey() {
        return "9455f2fb0b779e4e7588ad14649658d3";
    }

    async getMovieData() {
        let url = "https://api.themoviedb.org/3/movie/" + this.state.id + "?api_key=" + this.getApiKey();
        console.log('urls is:' + url);
        let response = await fetch(url);
        let data = await response.json();


        this.setState({data: data, isLoading: true});
        // return data;
    }

    componentDidMount() {
        this.getMovieData();
    }

    render() {
        let movieDetails = this.state.data;
        return (
            !this.state.isLoading ? (
                <div className={"loadingScreen-moviedetails"}>
                    <div className="lds-spinner">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            ) : (<div className="screen">
                <div className="black-overlay">

                </div>
                <div className="background-img">
                    <img className="bg-img" src={"https://image.tmdb.org/t/p/original" + movieDetails.backdrop_path}
                         alt=""/>
                </div>
                <div className="content">
                    <div className="poster-img">
                        <img src={"https://image.tmdb.org/t/p/original" + movieDetails.poster_path} alt=""/>
                    </div>

                    <div className="mov-inf">
                        <div className="mov-name">
                            {movieDetails.title}

                        </div>
                        <div className="mov-tag">
                            {movieDetails.tagline}
                        </div>
                        <div className="mov-overview">
                            {movieDetails.overview}
                        </div>
                        <div className="mov-genres">
                            {movieDetails.genres.map((el) => <div className="genres">
                                {el['name']}
                            </div>)}
                        </div>
                    </div>

                </div>
            </div>)
        );
    }
}