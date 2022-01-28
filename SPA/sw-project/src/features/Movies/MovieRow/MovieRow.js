import { NavLink } from "react-router-dom";

const MovieRow = props => {
    const {title, id} = props.data;
    const url = `/movies/${id}`;

    return (
        <div className="movie">
           <NavLink to={url}>{id} : {title}</NavLink> 
        </div>
    );
};

export default MovieRow;