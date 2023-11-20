import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
// API Key: 53638dbe
import './App.css';
import SearchIcon from './search.svg'
const API_URL = 'https://omdbapi.com?apikey=53638dbe'
const movie1 = {
        "Title": "Superman, Spiderman or Batman",
        "Year": "2011",
        "imdbID": "tt2084949",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
    }
// fetch data from API as soon as component loads 
const App = () => {
    // when you call function use 'use' it is a hook
    // use the useState hook to set the initial value of the movies array
    const [movies, setMovies] = useState([]); //initial value is 0
    const [searchTerm, setSearchTerm] = useState('');
    // function that will get movies by title, will take some time hence (async)
    const searchMovies = async (title) => {
        // will call movie API, once response received, get data from it
        const response = await fetch(`${API_URL}&s=${title}`);
        const data  = await response.json();
        setMovies(data.Search);
        // only show me the Movies array
        console.log(data.Search);
    }
    useEffect(() => {
        searchMovies('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>Magnificent Movies</h1>

            <div className="search">
                <input 
                placeholder="Search for a movie..." 
                value = {searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                
                />
                {/* use alt tag for screen-readers */}
                <img 
                    src={SearchIcon}
                    alt ="search"
                    onClick={() => searchMovies(searchTerm)}
                    />
                </div>
                {
                    movies?.length > 0 
                    ? (
                        <div className = "container">
                            {movies.map((movie) => (
                                // map each iteration of map to a movie card
                                <MovieCard movie1 = {movie} />
                            ))}
                            {/* <MovieCard movie1 = {movie1} /> */}
                        </div>
                    )
                    : (
                        <div className="empty">
                            <h2>No movies found</h2>
                        </div>
                    )
                }
               
        </div>
    );
}

export default App;