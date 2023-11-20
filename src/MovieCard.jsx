// anytime you create components in react, use .jsx file,  w/o needing to make a class
// props is an object that contains all the props passed to the component
import React from "react";
import App from "./App";

// destructure props with {movie} to avoid using "props.movie1" and instead use "movie1
const MovieCard = ({movie1}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie1.Year}</p>
            </div>

        <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
        </div>

        <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
        </div>
        </div>    
        );
    }

    export default MovieCard