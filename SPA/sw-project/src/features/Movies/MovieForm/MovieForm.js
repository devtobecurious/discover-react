const MovieForm = props => {
    return (
        <form>
            <div>
                <input type="text" />
                <button onClick={props.onSave}>{props.buttonLabel}</button>
            </div>
        </form>
    );
};

export default MovieForm;