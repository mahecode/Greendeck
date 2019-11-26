import React from 'react';
import { Route, Switch } from "react-router-dom";
import { StyledNavbar } from '../components/navbar';
import Home from './Home';
import NeoSearch from './neo-search';
import Feeds from './feeds';

const MainApp = (props) => {
    return(
        <>
            <StyledNavbar />
            <main>
            <Switch>
                <Route 
                    path='/' 
                    exact 
                    render={() => <Home />} 
                />
                <Route path='/search' exact component={() => <NeoSearch />} />
                <Route path='/feeds' exact component={() => <Feeds />} />
            </Switch>
            </main>
        </>
    )
}

export default MainApp;