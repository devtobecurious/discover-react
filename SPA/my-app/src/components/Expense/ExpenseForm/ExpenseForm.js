import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    // 1. soit des états différents
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState(0);
    // const [enteredDate, setEnteredDate] = useState(new Date());

    // 2. soit un état par composant
    const [userInput, setUserInput] = useState({
        title: '',
        amount: 0,
        date: new Date()
    });

    const titleChangedHandler = (event) => {
        // 1. setEnteredTitle(event.target.value);
        // setUserInput({
        //     title: event.target.value,
        //     ...userInput
        // });
        setUserInput(prevState => ({...prevState, title: event.target.value}));
    }

    const amountChangedHandler = (event) => {
        // 1. setEnteredAmount(event.target.value);
        // 2. bien mais on peut faire mieux 
        // setUserInput({
        //     amount: event.target.value,
        //     ...userInput
        // });
        setUserInput(prevState => ({...prevState, amount: event.target.value}));
    }

    const dateChangedHandler = (event) => {
        // 1. setEnteredDate(event.target.value);
        // setUserInput({
        //     date: event.target.value,
        //     ...userInput
        // });
        setUserInput(prevState => ({...prevState, date: event.target.value}));
    }

    const addNewOne = event => {
        event.preventDefault();

        props.onSave(userInput);

        setUserInput({ title: '', amount: 0, date: new Date()});
    };

    return (
        <form onSubmit={addNewOne}>
            <div className="controls">
                <div className='control'>
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangedHandler}></input>
                </div>

                <div className='control'>
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangedHandler}></input>
                </div>

                <div className='control'>
                    <label>Date</label>
                    <input type="date" min={new Date()} value={userInput.date} onChange={dateChangedHandler}></input>
                </div>

                <div className='actions'>
                    <button >Add</button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;