import React from 'react';
import MovieGrid from "../MovieGrid";
import './styles.css'


export default class MoviesData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:false,
            data:null
        }
    }
    getApiKey(){
        return "9455f2fb0b779e4e7588ad14649658d3";
    }
    async getMovieData(){
        let tempList=[];

            let url="https://api.themoviedb.org/3/discover/movie?api_key="+this.getApiKey();
            let response = await fetch(url);
            let jsonMap= await response.json();
            let data=jsonMap['results'];

        this.setState({data:data,isLoading:true});
        // return data;
    }
    componentDidMount(){
        this.getMovieData();
    }

    render() {
        return (
            <div className={"main"}>
                {!this.state.isLoading?(
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
                ):(<div>
                    {this.state.data['title']}
                    <MovieGrid allMoviesData={this.state.data}>

                    </MovieGrid>
                </div>)}
            </div>
        );
    }
}


