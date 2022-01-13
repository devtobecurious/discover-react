import ExpenseItem from "../ExpenseItem/ExpenseItem";

const ExpenseList = props => {
     const elements = props.items.map((item, index) => <ExpenseItem data={item} key={index} onRemoveItem={ props.onRemoveOne } />);

     return (
         <div>
            { elements }
         </div>
     );
}

export default ExpenseList;