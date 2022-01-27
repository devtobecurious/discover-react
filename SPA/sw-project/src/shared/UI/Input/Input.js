import classes from './Input.css';

const Input = props => {
    const cssContainer = `${classes.control}`;

    return (
        <div className={cssContainer}>
            <label for={props.id}>{props.label}</label>
            <input id={props.id} type={props.type} value={props.value} onChange={props.onChange}></input>
        </div>
    );
};

export default Input;