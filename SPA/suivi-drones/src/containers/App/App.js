import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Authentication from '../../features/users/authentication/authentication';
import Header from '../../shared/components/header';

function App() {
  return (
    <div >
      <header className="App-header">
        <Header></Header>
      </header>
      <Authentication></Authentication>
    </div>
  );
}

export default App;
