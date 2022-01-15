import './App.css';
import MoviesList from '../features/Movies/MoviesList/MoviesList';
import Header from '../shared/Header/Header';
import Login from '../features/User/Login/Login';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  let navigate = useNavigate();

  const login = (email, password) => {
    localStorage.setItem('isLogged', true);
    setIsLogged(true);

    console.log('login');

    navigate('/movies');
  };

  useEffect(() => {
    const userIsLogged = localStorage.getItem('isLogged');
    setIsLogged(userIsLogged);
  }, []);

  return (
    <div>    
      <Header></Header>  
      <Routes>
        <Route path="/login" element={<Login onLogin={login}></Login>}></Route>
        <Route path="/movies" element={<MoviesList></MoviesList>}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
