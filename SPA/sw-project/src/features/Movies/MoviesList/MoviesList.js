import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Apis } from "../../../config/Apis";
import MoviesTable from "../MoviesTable/MoviesTable";
import MoviesService from "../Services/MoviesService";

const MoviesList = props => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        loadMovies();
    }, []);

    const loadMovies = async (event) => {
        setIsLoading(true);
        setError(null);

        try {
            const movies = await (new MoviesService()).getAll();
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
            <Link to="/movies/add">Nouveau</Link>
            <button onClick={ loadMovies }>Reload</button>
            {spinner} {errorInfo}
            
            <MoviesTable movies={movies}></MoviesTable>
        </div>
    );
};

export default MoviesList;