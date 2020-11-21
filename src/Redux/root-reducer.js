import {combineReducers} from 'redux';
import storage from 'redux-persist/lib/storage';
import userReducer from "./User/user.reducer";
import reminderReducer from "./Reminders/reminders.reducer";
import assignmentsReducer from "./Assignments/assignments.reducer";
import {persistReducer} from 'redux-persist';
import groupReducer from "./Groups/groups.reducer";
const persistConfig = {
    key : 'user',
    storage:storage
}


const rootReducer = combineReducers({
    user: userReducer,
    reminders:reminderReducer,
    assignments : assignmentsReducer,
    groups: groupReducer
});


export default persistReducer(persistConfig,rootReducer);