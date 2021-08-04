import {createStore,combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import shopReducer from './reducers/ShopReducers';




const reducer  = combineReducers({
    shop : shopReducer,
    })

const store = createStore(reducer,composeWithDevTools());

export default store;