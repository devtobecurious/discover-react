import './App.css';
import MoviesList from '../features/Movies/MoviesList/MoviesList';
import Header from '../shared/Header/Header';
import Login from '../features/User/Login/Login';
import { useState, useEffect } from 'react';

function App() {
  
  const [isLogged, setIsLogged] = useState(false);

  const login = (email, password) => {
    localStorage.setItem('isLogged', true);
    setIsLogged(true);
  };

  useEffect(() => {
    const userIsLogged = localStorage.getItem('isLogged');  
    setIsLogged(userIsLogged);
  }, [

  ]);

  return (
    <div>
      <Header></Header>
      { !isLogged ? <Login onLogin={ login }></Login> : null }
      <MoviesList></MoviesList>
    </div>
  );
}

export default App;
