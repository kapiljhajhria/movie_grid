import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieData from "./MovieData"
import './moviedatabase'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import MovieDetails from './MovieDetails'
import SearchPage from "./SearchPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/moviedetails/:id" component={MovieDetails}>

                </Route>
                <Route path="/search" component={SearchPage}/>
                <Route path="/search/:searchQuery" component={MovieData}/>
                <Route path="/">
                    <MovieData>

                    </MovieData>
                </Route>
                <Route exact path="/movie_grid" component={MovieData}>
                </Route>
            </Switch>
            <div className="App">

            </div>
        </Router>
    );
}

export default App;
