import MovieRow from "../MovieRow/MovieRow";

const MoviesTable = props => {
    const rows = props.movies.map(item => <MovieRow data={item} key={item.id}></MovieRow>);

    return (
        <div className="movies">
            {rows}
        </div>
    );
};

export default MoviesTable;