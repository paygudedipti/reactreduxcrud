

import Reducer from "./reducer";

import { CombineReducer, combineReducers } from 'redux';


const RootReducer = combineReducers({
    reducer:Reducer,
});


export default RootReducer;









