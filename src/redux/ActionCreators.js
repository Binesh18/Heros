import * as ActionTypes from './ActionTypes';

export const addComments = ( name, email, telNo ) =>({
    type: ActionTypes.ADD_COMMENTS,
    payload: {
        name: name,
        email: email,
        telNo: telNo
    }
});