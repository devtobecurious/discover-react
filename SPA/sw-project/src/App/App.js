import { Route, Routes } from 'react-router';
import Home from '../features/Home/Home';
import MovieNew from '../features/Movies/MovieNew/MovieNew';
import MoviesList from '../features/Movies/MoviesList/MoviesList';
import LoginPage from '../pages/LoginPage';
import Header from '../shared/Header/Header';
import MovieDetailPage from '../pages/MovieDetailPage';
import './App.css';
import MainRoutes from '../routing/MainRoutes';

function App() {
  return (
    <div>
        <Header></Header>
        <MainRoutes></MainRoutes>
    </div>
  );
}

export default App;
