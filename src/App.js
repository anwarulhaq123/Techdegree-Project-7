

import React, {Component} from 'react';
//Router for the Project and Nagation , 
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
//Axios to get the Data from flicker.
import axios from 'axios';
//Main  components of the Project.
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Nav from "./components/Nav";
import PhotoContainer from "./components/PhotoContainer";
import Error404 from "./components/Error404";

// Config contians the Key for Flicker API.
import apiKey from "./Config";


//App Class to handel All the Components of the project
export default class App extends Component {
    constructor() {
        super();
        this.state = { 
            images: [],
            loading: true
        };
    }

    
// Function to Search the Photos
    performSearch = (query = 'cats') => {
        this.setState({
            loading:true,
            images:[]
        });
// Getting the Data from Flicker 
        axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => { 
                this.setState({
                    images: response.data.photos.photo,
                    loading: false,
                    query: query
                });
            })

            // Error Hadling when found no Data from Flicker
            .catch(error => { 
                console.log('Error fetching and parsing data', error);
            });
    };

    //Main Page Rendring 
    render() {
        // console.log(this.state.images);
        return (
            <Router>
                <div className="container">
                    <Header/>
                    <SearchForm
                        onSearch={this.performSearch}
                    />
                    <Nav navSearch={this.performSearch}/>

                    <Switch>
                        <Route exact path="/" render={()=><Redirect to="/search/cats"/>}/>
                        <Route path="/search/:query" render={({match}) => (
                        <PhotoContainer
                           matchData={match}
                            data={this.state.images}
                            doSearch={this.performSearch}
                            page={this.state.loading}
                        />
                        )} />
                        <Route component={Error404} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

    
