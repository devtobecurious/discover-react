import MovieDetail from "../features/Movies/MovieDetail/MovieDetail";
import { useParams } from 'react-router-dom';

const MovieDetailPage = props => {
    let id = 0;
    const params = useParams();

    id = parseInt(params.movieId);

    return (
        <>
            <h1>Details du film {id}</h1>
            <MovieDetail id={id}></MovieDetail>
        </>
    );
};

export default MovieDetailPage;