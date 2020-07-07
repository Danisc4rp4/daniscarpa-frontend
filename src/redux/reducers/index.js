import { combineReducers } from "redux";
import { alert } from './alert.reducer';
import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { timeReducer } from "./time.reducer";
import { registration } from './registration.reducer';

export default combineReducers({
    alert,
    authentication,
    registration,
    timeReducer,
    users,
});
