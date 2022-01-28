import classes from './Counter.module.css';
import { useSelector } from 'react-redux';
import Actions from '../Actions/Actions';

const Counter = props => {
    const counter = useSelector(state => state.counter); // on récupère le state qu'on veut du store

    const toggle = () => {};

    const cssMain = `${classes.counter} ${classes.centered}`;


    return (
        <>
            <main className={cssMain}>
                <h1>Counter</h1>
                <div className={ `${classes.value} ${classes.centered}`}>{counter}</div>

                <Actions></Actions>

                <button className={ classes.toggle } onClick={ toggle }>Toogle</button>
            </main>
        </>
    );
};

export default Counter;