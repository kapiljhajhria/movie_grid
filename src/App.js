import React from 'react';
import logo from './logo.svg';
import './App.css';
import MovieData from "./MovieData"
import './moviedatabase'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import MovieDetails from './MovieDetails'
function App() {
  return (
 <Router>
     <Switch>
         <Route path="/moviedetails" component>
             <MovieDetails>

             </MovieDetails>
         </Route>
         <Route path="/" component>
           <MovieData>

           </MovieData>
       </Route>
     </Switch>
     <div className="App">

     </div>
 </Router>
  );
}

export default App;
