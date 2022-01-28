import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import Home from '../features/Home/Home';
import MovieNew from '../features/Movies/MovieNew/MovieNew';
import MoviesList from '../features/Movies/MoviesList/MoviesList';
import LoginPage from '../pages/LoginPage';
import MovieDetailPage from '../pages/MovieDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

const Movies = React.lazy(() => import('../features/Movies/MoviesList/MoviesList'));

const MainRoutes = props => {
    return (<Suspense fallback={<div>Loading ....</div>}>
        <Routes>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/movies/add" element={<MovieNew></MovieNew>}></Route>
            <Route path="/movies" element={<Movies></Movies>}></Route>
            <Route path="/movies/:movieId" element={<MovieDetailPage></MovieDetailPage>}></Route>
            <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
    </Suspense>);
};

export default MainRoutes;