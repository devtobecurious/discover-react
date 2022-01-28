import classes from './Actions.module.css';
import { useDispatch } from 'react-redux';

const Actions = props => {
    const dispatch = useDispatch();

    const doAction = (event) => {
        dispatch({ type: event.target.id, value: parseInt(event.target.dataset.value) });
    }

    return (
        <>
            <div>
                <button id='increase' data-value='1' onClick={doAction} className={ classes.action }>+ 1</button>
                <button id='increase' data-value='5' onClick={doAction} className={ classes.action }>+ 5</button>
                <button id='decrement' onClick={doAction} className={ classes.action }>- 1</button>
                <button id='raz' onClick={doAction} className={ classes.action }>RAZ</button>
            </div>
        </>
    );
};

export default Actions;