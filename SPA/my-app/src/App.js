import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import Card from './components/shared/Components/Card/Card';
import NewExpense from './components/Expense/NewExpense/NewExpense';
import ExpenseList from './components/Expense/ExpenseList/ExpenseList';
import getDummies from './components/Expense/Services/ExpenseService';
import ExpenseChart from './components/Expense/ExpenseChart/ExpenseChart';


const App = () => {
  const [expenses, setExpenseList] = useState(getDummies());

  const pushOne = item => {
    setExpenseList(prevState => ([ { ...item, date: new Date(item.date)}, ...prevState ]));
  };

  const removeOne = id => {
    if (window.confirm('Sur ?')) {
      setExpenseList(prevState => prevState.filter(item => item.id !== id));
    }
  }

  const listElements = <ExpenseList items={expenses} onRemoveOne={ removeOne }></ExpenseList>;

  return (
    <Card class="expenses">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ExpenseChart expenses={ expenses }></ExpenseChart>
      <NewExpense onAddOne={ pushOne }></NewExpense>
      { expenses.length > 0 ? listElements : <i>No elements</i> }
    </Card>
  );
}

export default App;
