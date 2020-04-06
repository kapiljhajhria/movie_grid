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
        return "Your API key Here";
    }
    async getMovieData(){
        let tempList=[];
        for(let i=500;i<510;i++){
            let tempMap={};
            let url="https://api.themoviedb.org/3/movie/"+i+"?api_key="+this.getApiKey();
            let response = await fetch(url);
            let data= await response.json();
            tempMap['title']=data['title'];
            tempMap['posterurl']="http://image.tmdb.org/t/p/w185"+data["poster_path"];
            let tempGenres=[];
            for(let j=0;j<data["genres"].length;j++){
               let selectedGenre=data["genres"][j]['name'];
               tempGenres.push(selectedGenre);
            }
            tempMap["genres"]=tempGenres;
            tempMap['contentRating']=data['vote_average'];
            tempList.push(tempMap);
        }

        // console.log(data);

        this.setState({data:tempList,isLoading:true});
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


