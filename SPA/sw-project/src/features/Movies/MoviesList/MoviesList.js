import { useState } from "react";
import { Apis } from "../../../config/Apis";
import MoviesTable from "../MoviesTable/MoviesTable";
import MoviesService from "../Services/MoviesService";

const MoviesList = props => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadMovies = async (event) => {
        setIsLoading(true);

        const movies = await (new MoviesService()).getAll()
        setIsLoading(false);
        setMovies(previousList => movies);
    };

    const spinner = isLoading ? <i>Data loading ....</i> : null;

    return (
        <div>
            <button onClick={ loadMovies }>Load</button>
            {spinner}
            <MoviesTable movies={movies}></MoviesTable>
        </div>
    );
};

export default MoviesList;