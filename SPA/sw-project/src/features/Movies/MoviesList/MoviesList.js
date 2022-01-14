import { useState } from "react";
import { Apis } from "../../../config/Apis";
import MoviesTable from "../MoviesTable/MoviesTable";
import MoviesService from "../Services/MoviesService";

const MoviesList = props => {
    const [movies, setMovies] = useState([]);

    const loadMovies = async (event) => {
        const movies = await (new MoviesService()).getAll()
        setMovies(previousList => movies);
    };

    return (
        <div>
            <button onClick={ loadMovies }>Load</button>
            <MoviesTable movies={movies}></MoviesTable>
        </div>
    );
};

export default MoviesList;