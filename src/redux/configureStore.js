import { createStore, combineReducers, applyMiddleware } from 'redux';

import { Reducer } from './reducer';
import { CommentReducer } from './commentReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reducer: Reducer,         
            commentReducer: CommentReducer
        }),
        applyMiddleware( thunk, logger )
    );

    return store;
}