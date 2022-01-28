import MovieForm from "../MovieForm/MovieForm";

const MovieDetail = props => {
    const saveOne = movie => {

    };

    return (
        <>
            <section>
                <h1>Film</h1>
                <MovieForm onSave={saveOne} buttonLabel="Enregistrer"></MovieForm>
            </section>
        </>
    );
};

export default MovieDetail;