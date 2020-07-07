import { FETCH_TIME_PENDING, FETCH_TIME_SUCCESS, FETCH_TIME_ERROR } from '../actions/actionTypes';

const initialState = {
    pending: false,
    time: null,
    error: null
}

export function timeReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_TIME_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_TIME_SUCCESS:
            return {
                ...state,
                pending: false,
                time: action.payload.time
            }
        case FETCH_TIME_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export default timeReducer;