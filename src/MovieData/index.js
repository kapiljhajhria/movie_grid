import React from 'react';
import MovieGrid from "../MovieGrid";
import './styles.css'


export default class MoviesData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: null
        }
    }

    getApiKey() {
        return "9455f2fb0b779e4e7588ad14649658d3";
    }

    async getMovieData() {
        let data = [];
        let noOfPages = 3;
        for (let i = 1; i <= noOfPages; i++) {
            let url = "https://api.themoviedb.org/3/discover/movie?api_key=" + this.getApiKey() + "&page=" + i;
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

                    <MovieGrid allMoviesData={this.state.data}>

                    </MovieGrid>
                )}
            </div>
        );
    }
}


