import { useNavigate } from "react-router";
import MovieForm from "../MovieForm/MovieForm";

const MovieNew = props => {
    let navigate = useNavigate();

    const addOne = event => {
        navigate('/movies');
    };

    return (
        <div>
            <h1>Nouveau film</h1>
            <MovieForm onSave={addOne} buttonLabel="Ajouter"></MovieForm>
        </div>
    );
};

export default MovieNew;