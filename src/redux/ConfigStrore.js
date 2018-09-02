import {createStore, applyMiddleware} from 'redux';
import asyncReducer from './asyncReducer';
import thunk from 'redux-thunk';

export default function configureStore() {
    return createStore(
        asyncReducer,
        applyMiddleware(thunk)
    );
}