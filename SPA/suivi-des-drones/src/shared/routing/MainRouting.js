import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import DroneListPage from '../../pages/DroneListPage';
import HomePage from '../../pages/HomePage';
import LoginPage from '../../pages/LoginPage';

const MainRouting = props => {
    return (<Suspense fallback={<div>Loading ....</div>}>
                <Routes>
                    <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                    <Route path='/drones' element={<DroneListPage></DroneListPage>}></Route>
                </Routes>
            </Suspense>);
}

export default MainRouting;