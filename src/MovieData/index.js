import React from 'react';
import MovieGrid from "../MovieGrid";
import './styles.css'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";


export default class MoviesData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: this.props.match != null ? this.props.match.params.searchQuery : null,
            isLoading: false,
            data: null,
            pageNo:(this.props.match != null && this.props.page !== "search") ? parseInt(this.props.match.params.page) : 1,
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
            if (this.state.searchQuery == null)
                url = "https://api.themoviedb.org/3/discover/movie?api_key=" + this.getApiKey() + "&page=" + this.state.pageNo;
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
            !this.state.isLoading ? (
                <div className="App">
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
                    <div className="bottomButtons">
                        {this.state.pageNo > 1 ? <Link to={`/page/${this.state.pageNo-1}`}>
                            <button className="prevBtn" onClick={() => {
                                this.setState({pageNo: this.state.pageNo - 1, isLoading: false}
                                )
                                this.getMovieData();
                            }}>
                                Previous
                            </button>
                        </Link> : ""}
                        <Link to={`/page/${this.state.pageNo+1}`}>
                            <button className="nxtBtn" onClick={()=>{
                                this.setState({pageNo:this.state.pageNo+1,isLoading: false})
                                this.getMovieData();
                            }}>
                                Next
                            </button>
                        </Link>
                    </div>
                </div>
            )
        );
    }
}


