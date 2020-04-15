import React from 'react';

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
                <Route path="/search/:searchQuery" component={MovieData}/>
                <Route exact path="/movie_grid" component={MovieData}>
                </Route>
                <Route exact path="/search" component={SearchPage}/>

                <Route path="/">
                    <MovieData>

                    </MovieData>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
