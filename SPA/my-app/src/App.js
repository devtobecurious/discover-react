import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem/ExpenseItem';
import Card from './components/shared/Card/Card';

const App = () => {
  const expenses = [
    {
      title: 'Car',
      amount: 120.41,
      date: new Date()
    },
    {
      title: 'Food',
      price: 20,
      date: new Date()
    },
  ];

  return (
    <Card class="expenses">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ExpenseItem data={expenses[0]} />
    </Card>
  );
}

export default App;
