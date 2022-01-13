import './ExpenseItem.css';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import Card from '../../shared/Card/Card';
import React, { useState } from 'react';

function ExpenseItem(props) {
    let { id, title, amount, date } = props.data;
    const [title2, setTitle] = useState(title);

    console.log('reload ?');

    const clickHandler = () => {
        console.log(`hello`);
        setTitle('Alors ?');
    };

    const clickToRemoveHandler = () => {
        props.onRemoveItem(id);
    }

    return (
        <Card className='expense-item'>
            <div >
                <ExpenseDate data={date}></ExpenseDate>
            </div>
            <h2 className='expense-item__description'>{title2}</h2>
            <div>{amount} €</div>
            <button onClick={ clickHandler }>Change title</button>
            <button onClick={ clickToRemoveHandler }>[ - ]</button>
        </Card>
    );
}

export default ExpenseItem;