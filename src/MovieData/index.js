import React, {useEffect, useState} from 'react';
import MovieGrid from "../MovieGrid";
import './styles.css'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default function MovieData(props) {
    const [searchQuery, setSearchQuery] = useState(props.match != null ? props.match.params.searchQuery : null,)
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    // constructor(props)
    // {
    //     super(props);
    //     this.state = {
    //         searchQuery:
    //         isLoading: false,
    //         data: null,
    //         pageNo: (props.match != null && props.page !== "search") ? parseInt(props.match.params.page) : 1,
    //     }
    // }

// https://api.themoviedb.org/3/search/movie?api_key= + apikey + &language=en-US&query= + searchTerm
    function getApiKey() {
        return "9455f2fb0b779e4e7588ad14649658d3"
    }

    let page = (props.match != null && props.page !== "search") ? parseInt(props.match.params.page) : 1

    async function getMovieData() {
        let data = [];
        let noOfPages = 1;

        for (let i = 1; i <= noOfPages; i++) {
            let url;
            if (searchQuery == null)
                url = "https://api.themoviedb.org/3/discover/movie?api_key=" + getApiKey() + "&include_video=true&page=" + page;
            else {
                url = "https://api.themoviedb.org/3/search/movie?api_key=" + getApiKey() + "&include_video=true&language=en-US&query=" + searchQuery;
            }
            let response = await fetch(url);
            let jsonMap = await response.json();
            let tempData = jsonMap['results'];
            data = data.concat(tempData);
        }
        setData(data)
        setIsLoading(true)
    }

    useEffect(() => {
        console.count("useEffect called")
        getMovieData();
        console.log("params match from component did mount ", props.match?.params || "no params")
        window.onpopstate = function () {
            console.count("button pressed")


        }
    }, [page])
    // componentDidUpdate(prevProps, prevState, snapshot) {

    // }

    return (
        !isLoading ? (
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
                <MovieGrid allMoviesData={data}>

                </MovieGrid>
                <div className="bottomButtons">
                    {page > 1 ? <Link to={`/page/${page - 1}`}>
                        <button className="prevBtn">
                            Previous
                        </button>
                    </Link> : ""}
                    <Link to={`/page/${page + 1}`}>
                        <button className="nxtBtn">
                            Next
                        </button>
                    </Link>
                </div>
            </div>
        )
    )
}


