import './App.css';
import MoviesList from '../features/Movies/MoviesList/MoviesList';
import Header from '../shared/Header/Header';
import Login from '../features/User/Login/Login';
import MovieNew from '../features/Movies/MovieNew/MovieNew';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router';
import Home from '../features/Home/Home';
import AuthenticationContext from '../store/authentication-context';

function App() {
  const [isLogged, setIsLogged] = useState(false);
  let navigate = useNavigate();

  const login = (email, password) => {
    setLoginAndRedirectToHome();
  };

  const setLoginAndRedirectToHome = () => {
    localStorage.setItem('isLogged', true);
    setIsLogged(true);

    navigate('/home');
  };

  useEffect(() => {
    const userIsLogged = localStorage.getItem('isLogged');
    setIsLogged(userIsLogged);

    if (!userIsLogged) {
      navigate('/login');
    } else {
      setLoginAndRedirectToHome();
    }
  }, []);

  return (
    <div>
      <AuthenticationContext.Provider value={ { isLoggedIn: isLogged }}>
        <Header isAuthenticated={isLogged}></Header>
        <Routes>
          <Route path="/login" element={<Login onLogin={login}></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/movies/add" element={<MovieNew></MovieNew>}></Route>
          <Route path="/movies" element={<MoviesList></MoviesList>}></Route>
        </Routes>
      </AuthenticationContext.Provider>
    </div>
  );
}

export default App;
