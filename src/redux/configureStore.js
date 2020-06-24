import { createStore, combineReducers } from 'redux';

import { Reducer } from './reducer';
import { CommentReducer } from './commentReducer';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reducer: Reducer,         
            commentReducer: CommentReducer
        })
    );

    return store;
}