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
  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/movies/add" element={<MovieNew></MovieNew>}></Route>
          <Route path="/movies" element={<MoviesList></MoviesList>}></Route>
        </Routes>
    </div>
  );
}

export default App;
