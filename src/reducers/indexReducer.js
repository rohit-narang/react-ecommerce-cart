import {combineReducers} from 'redux';
import catalogReducer from './catalogReducer';
import cartReducer from './cartReducer';
import headerReducer from './headerReducer';
import loginReducer from './loginReducer';
import productReducer from './productReducer';
import paymentReducer from './paymentReducer';

const rootReducer = combineReducers({
    catalog : catalogReducer,
    cart:   cartReducer,
    header: headerReducer,
    login:  loginReducer,
    product: productReducer,
    payment: paymentReducer
});

export default rootReducer;
