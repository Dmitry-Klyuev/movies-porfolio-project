import React from 'react';

export const Movie = (props) => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;
    return (
            <div className="card movie" id={id}>
                <div className="card-image">
                    <img src={poster} alt={title}/>
                </div>

                <div className="card-action">
                    <span className="card-title">{title}</span>
                    <p>
                        <span>{year}</span>
                        <span className="right">{type}</span>
                    </p>
                </div>
            </div>
    );
};
