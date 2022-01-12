function ExpenseDate(props) {

    return (
        <div>
            <div>{props.data.getDate()}</div>
            <div>{props.data.getMonth() + 1}</div>
            <div>{props.data.getFullYear()}</div>
        </div>
    );
}

export default ExpenseDate;