import {combineReducers} from 'redux';

import userReducer from "./User/user.reducer";
import reminderReducer from "./Reminders/reminders.reducer";
import assignmentsReducer from "./Assignments/assignments.reducer";


const rootReducer = combineReducers({
    user: userReducer,
    reminders:reminderReducer,
    assignments : assignmentsReducer
});


export default rootReducer;