const MovieRow = props => {
    const {title, id} = props.data;

    return (
        <div className="movie">
            {id} : {title}
        </div>
    );
};

export default MovieRow;