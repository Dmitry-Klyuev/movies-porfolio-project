import React from 'react';
import {Movie} from './Movie';

export const MoviesList = (props) => {
    const {movies} = props;

    return (
        <div className="movies">
            {movies.map(movie => {
                return <Movie key={movie.imdbID}
                       {...movie} />
            })}
        </div>
    );
};
