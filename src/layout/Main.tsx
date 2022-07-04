import React, {Component} from 'react';
import {MoviesList} from "../components/Movies-list";

export class Main extends Component{
    state = {
        movies: [],
    }
    componentDidMount() {
        fetch('https://www.omdbapi.com/?apikey=ae284cbf&s=matrix')
            .then(res => res.json())
            .then(data => this.setState({movies: data.Search}))
    }

    render() {
    const {movies} = this.state;
    return(
        <main className='container content'>
            {movies.length ? <MoviesList movies={movies}/> : <h5>Loading..</h5>}
        </main>
    )
}
}
