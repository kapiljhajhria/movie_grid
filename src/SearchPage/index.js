import React from 'react'
import './styles.css'
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import MoviesData from "../MovieData";


export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div className="App">
                <div className="search-page">
                    <form onSubmit={this.handleSubmit} className="search-form">
                        <input type="text" className="searchInput" value={this.state.value}
                               onChange={this.handleChange}/>
                        <Link to={`/search/${this.state.value}`}>
                            <button className="searchbtn">
                                Search
                            </button>
                        </Link>
                    </form>

                </div>
            </div>


        );
    }
}



