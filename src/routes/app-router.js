import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainApp from '../pages/main-app';

const AppRouter = (props) => {
    return (
        <div>
            <BrowserRouter>
                <Route path='/' render={routerProps => <MainApp />} />
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;