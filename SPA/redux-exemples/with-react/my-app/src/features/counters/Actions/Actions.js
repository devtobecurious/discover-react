import classes from './Actions.module.css';
import { useDispatch } from 'react-redux';

const Actions = props => {
    const dispatch = useDispatch()

    const doAction = (event) => {
        dispatch({ type: event.target.id });
    }

    return (
        <>
            <div>
                <button id='increment' onClick={doAction} className={ classes.action }>+ 1</button>
                <button id='decrement' onClick={doAction} className={ classes.action }>- 1</button>
                <button id='raz' onClick={doAction} className={ classes.action }>RAZ</button>
            </div>
        </>
    );
};

export default Actions;