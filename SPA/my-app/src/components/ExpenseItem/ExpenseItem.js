import './ExpenseItem.css';

function ExpenseItem(props) {
    const {title, amount, date} = props.data;

    return (
        <div className='expense-item'>
            <div >{date.toLocaleString()}</div>
            <h2 className='expense-item__description'>{title}</h2>
            <div>{amount} €</div>
        </div>
    );
}

export default ExpenseItem;