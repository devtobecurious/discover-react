import { useState } from "react";
import { Apis } from "../../../config/Apis";
import MoviesTable from "../MoviesTable/MoviesTable";
import MoviesService from "../Services/MoviesService";

const MoviesList = props => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const loadMovies = async (event) => {
        setIsLoading(true);
        setError(null);

        try {
            const movies = await (new MoviesService()).getAll()
            setMovies(previousList => movies);
            
        }
        catch(ex) {
            setError(ex);
        }
        setIsLoading(false);
    };

    const spinner = isLoading ? <i>Data loading ....</i> : null;
    const errorInfo = error ? <b>Something wrong !</b> : null;

    return (
        <div>
            <button onClick={ loadMovies }>Load</button>
            {spinner} {errorInfo}
            
            <MoviesTable movies={movies}></MoviesTable>
        </div>
    );
};

export default MoviesList;