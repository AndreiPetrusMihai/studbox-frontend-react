import {combineReducers} from 'redux';

import userReducer from "./User/user.reducer";
import reminderReducer from "./Reminders/reminders.reducer";



const rootReducer = combineReducers({
    user: userReducer,
    reminders:reminderReducer
});


export default rootReducer;