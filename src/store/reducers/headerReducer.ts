import { SET_HEADER } from '../actions/actionsTypes';
import { IActionHeader } from '../actions/interfaces';

// const initialState = {
//   header: 'First'
// }

export const mainReducer = (state = {}, action: IActionHeader) => {
    console.log('Reducer calls');
    switch (action.type) {
        case SET_HEADER:
            return {
                ...state,
                header: action.payload,
            };
        default:
            return state;
    }
};
