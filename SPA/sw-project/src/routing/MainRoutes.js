import { Route, Routes } from 'react-router';
import Home from '../features/Home/Home';
import MovieNew from '../features/Movies/MovieNew/MovieNew';
import MoviesList from '../features/Movies/MoviesList/MoviesList';
import LoginPage from '../pages/LoginPage';
import MovieDetailPage from '../pages/MovieDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

const MainRoutes = props => {
    return (<Routes>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/movies/add" element={<MovieNew></MovieNew>}></Route>
        <Route path="/movies" element={<MoviesList></MoviesList>}></Route>
        <Route path="/movies/:movieId" element={<MovieDetailPage></MovieDetailPage>}></Route>
        <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
    </Routes>);
};

export default MainRoutes;