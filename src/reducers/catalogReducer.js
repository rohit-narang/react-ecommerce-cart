import {combineReducers} from 'redux';
import filterReducer from './filterReducer';
import catalogproductsReducer from './catalogproductsReducer';

const catalogReducer = combineReducers({
    filter: filterReducer,
    catalogproducts: catalogproductsReducer
});

export default catalogReducer;
