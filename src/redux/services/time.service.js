import {fetchTimePending, fetchTimeSuccess, fetchTimeError} from '../actions/time';

export function fetchTime() {
    return dispatch => {
        dispatch(fetchTimePending());
        fetch('/time')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(fetchTimeSuccess(res.time));
            return res.time;
        })
        .catch(error => {
            dispatch(fetchTimeError(error));
        })
    }
}

export default fetchTime;
