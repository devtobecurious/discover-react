import MainRouting from '../../shared/routing/MainRouting';
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <div className="container">
        <MainRouting></MainRouting>
      </div>
    </>
  );
}

export default App;
