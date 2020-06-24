import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const CommentReducer = (state = COMMENTS , action ) => {
    switch(action.type){

        case ActionTypes.ADD_COMMENTS:
            var comment = action.payload;
            comment.id = state.length;
            return state.concat(comment);

        default:
            return state;
            
    }
}