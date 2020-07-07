import {
    LOGIN_USER,
  } from "./actionTypes";

export const userPostFetch = user => ({
    type: LOGIN_USER,
    payload: {}
  });
  
export const loginUser = userObj => ({
    type: LOGIN_USER,
    payload: userObj
});
  