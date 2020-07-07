import {
  FETCH_TIME,
  FETCH_TIME_SUCCESS,
  FETCH_TIME_PENDING,
  FETCH_TIME_ERROR 
} from "./actionTypes.js";

export const fetchTime = () => ({
  type: FETCH_TIME,
  payload: {}
});

export function fetchTimePending() {
    return {
        type: FETCH_TIME_PENDING,
    }
}

export function fetchTimeSuccess(time) {
    return {
        type: FETCH_TIME_SUCCESS,
        payload: {
          time
        }
    }
}

export function fetchTimeError(error) {
    return {
        type: FETCH_TIME_ERROR,
        payload: {
          error
        }
    }
}