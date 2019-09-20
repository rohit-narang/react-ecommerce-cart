import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './views/Home';

const Routes = () => {
    return (
        <Router>
            <Route path="/" component={Home} />
        </Router>
    )
}

export default Routes;