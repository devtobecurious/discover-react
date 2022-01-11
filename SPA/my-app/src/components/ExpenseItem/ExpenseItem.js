import './ExpenseItem.css';

function ExpenseItem(props) {
    const expenseDate = new Date();
    const expenseTitle = 'Dépense';
    const amount = 250.20;

    return (
        <div className='expense-item'>
            <div >{expenseDate.toLocaleString()}</div>
            <h2 className='expense-item__description'>{expenseTitle}</h2>
            <div>{amount} €</div>
        </div>
    );
}

export default ExpenseItem;