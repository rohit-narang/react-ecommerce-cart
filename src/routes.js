import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './views/Home';
import Catalog from './views/ProductListContainer';
const Routes = () => {
    return (
        <Router>
            <Route path="/" exact component={Home} />
            <Route path="/:category" component={Catalog} />
        </Router>
    )
}

export default Routes;