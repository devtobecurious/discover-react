import React from 'react';
import ExpenseForm from '../ExpenseForm/ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveOne = item => {
        const data = {
            ...item,
            id: Math.round(Math.random() * 100)
        }

        props.onAddOne(data);
    };

    return (
        <div className='new-expense'>
            <ExpenseForm onSave={saveOne}></ExpenseForm>
        </div>
    );
};

export default NewExpense;