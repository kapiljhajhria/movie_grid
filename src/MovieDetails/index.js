import React from 'react';
import './styles.css'
import MovieGrid from "../MovieGrid";

export default class MovieDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            isLoading:false,
            data:null
        }
    }
    // https://api.themoviedb.org/3/movie/102899?api_key=9455f2fb0b779e4e7588ad14649658d3
    getApiKey(){
        return "YOUR API KEY HERE";
    }
    async getMovieData(){
        let url="https://api.themoviedb.org/3/movie/"+this.state.id+"?api_key="+this.getApiKey();
        console.log('urls is:'+url);
        let response = await fetch(url);
        let data= await response.json();


        this.setState({data:data,isLoading:true});
        // return data;
    }
    componentDidMount(){
        this.getMovieData();
    }

    render() {
        const movieDetails=this.state.data;
        return (
            <div className={"main-moviedetails"}>
                {!this.state.isLoading?(
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
                ):(<div>
                    <img src={"https://image.tmdb.org/t/p/original"+movieDetails.backdrop_path} alt=""/>
                </div>)}
            </div>
        );
    }
}