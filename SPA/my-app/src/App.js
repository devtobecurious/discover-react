import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem/ExpenseItem';
import Card from './components/shared/Card/Card';
import NewExpense from './components/Expense/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    {
      title: 'Car',
      amount: 120.41,
      date: new Date()
    },
    {
      title: 'Food',
      amount: 20,
      date: new Date()
    },
  ];

  const elements = expenses.map(item => <ExpenseItem data={item} />);

  const pushOne = item => {
    console.info('pushOne', item);

  };

  return (
    <Card class="expenses">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <NewExpense onAddOne={ pushOne }></NewExpense>

      { elements }

    </Card>
  );
}

export default App;
