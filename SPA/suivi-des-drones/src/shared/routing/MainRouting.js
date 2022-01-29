import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import LoginPage from '../../pages/LoginPage';

const MainRouting = props => {
    return (<Suspense fallback={<div>Loading ....</div>}>
                <Routes>
                    <Route path="/login" element={<LoginPage></LoginPage>}></Route>
                </Routes>
            </Suspense>);
}

export default MainRouting;