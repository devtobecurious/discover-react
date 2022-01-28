import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Actions from '../Actions/Actions';

const Counter = props => {
    const counter = useSelector(state => state.counter); // on récupère le state qu'on veut du store
    const show = useSelector(state => state.show);
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch({
            type: 'toggle'
        });
    };

    const cssMain = `${classes.counter} ${classes.centered}`;

    const counterContent = (<div className=''>
        <h1>Counter</h1>
        <div className={`${classes.value} ${classes.centered}`}>{counter}</div>

        <Actions></Actions>
    </div>);

    return (
        <>
            <main className={cssMain}>
                {show && counterContent}
                <button className={classes.toggle} onClick={toggle}>Toogle</button>
            </main>
        </>
    );
};

export default Counter;