import {combineReducers} from 'redux';
import menuReducer from './menuReducer';
import searchReducer from './searchReducer';

const headerReducer = combineReducers({
    menu: menuReducer,
    search: searchReducer
})

export default headerReducer;
