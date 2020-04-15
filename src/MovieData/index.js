import React from 'react';
import MovieGrid from "../MovieGrid";
import './styles.css'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import SearchPage from "../SearchPage";

export default class MoviesData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.match != null ? this.props.match.params.searchQuery : null,
            isLoading: false,
            data: null
        }
    }

// https://api.themoviedb.org/3/search/movie?api_key= + apikey + &language=en-US&query= + searchTerm
    getApiKey() {
        return "9455f2fb0b779e4e7588ad14649658d3";
    }

    async getMovieData() {
        let data = [];
        let noOfPages = 1;
        for (let i = 1; i <= noOfPages; i++) {
            let url;
            if (this.state.searchQuery === null)
                url = "https://api.themoviedb.org/3/discover/movie?api_key=" + this.getApiKey() + "&page=" + i;
            else {
                url = "https://api.themoviedb.org/3/search/movie?api_key=" + this.getApiKey() + "&language=en-US&query=" + this.state.searchQuery;
            }
            let response = await fetch(url);
            let jsonMap = await response.json();
            let tempData = jsonMap['results'];
            data = data.concat(tempData);
        }
        this.setState({data: data, isLoading: true});
    }

    componentDidMount() {
        this.getMovieData();
    }

    render() {
        return (
            <div className={"main"}>
                {!this.state.isLoading ? (
                    <div className={"loadingScreen"}>
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
                ) : (
                    <div className="page">
                        <Link to={`/search`}>
                            <button className="searchbtn">
                                Search
                            </button>
                        </Link>
                        <MovieGrid allMoviesData={this.state.data}>

                        </MovieGrid>
                    </div>


                )}
            </div>
        );
    }
}


