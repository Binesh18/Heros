import * as ActionTypes from './ActionTypes';

export const Reducer = (state = { isLoading: true, errMess: null, heros:[] } , action) => {
    switch(action.type){

        case ActionTypes.HEROS_LOADING:
            return { ...state, isLoading: true, errMess: null, heros: [] };

        case ActionTypes.HEROS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };

        case ActionTypes.ADD_HEROS:
            return { ...state, isLoading: false, errMess: null, heros: action.payload }

        default:
            return state;
    }
    
};