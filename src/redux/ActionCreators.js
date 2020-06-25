import * as ActionTypes from './ActionTypes';
import { HEROS } from '../shared/heros';

export const addComments = ( name, email, telNo ) =>({
    type: ActionTypes.ADD_COMMENTS,
    payload: {
        name: name,
        email: email,
        telNo: telNo
    }
});

export const fetchHeros = () => (dispatch) => {

    dispatch(herosLoading());

    setTimeout( () =>{
        dispatch(addHeros( HEROS ));
    }, 2000 );
}

export const herosLoading = () => ({
    type:ActionTypes.HEROS_LOADING
});

export const herosFailed = ( errmess ) => ({
    type: ActionTypes.HEROS_FAILED,
    payload: errmess
});

export const addHeros = ( heros ) => ({
    type: ActionTypes.ADD_HEROS,
    payload: heros
});