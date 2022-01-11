import logo from './logo.svg';
import './App.css';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
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
    <div>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <ExpenseItem data={expenses[0]} />
    </div>
  );
}

export default App;
