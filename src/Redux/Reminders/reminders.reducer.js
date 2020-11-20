import RemindersTypes from "./reminders.types";
import {act} from "@testing-library/react";


const INITIAL_STATE = {
    remindersList : []
}

const reminderReducer = (state=INITIAL_STATE,action) =>{
    switch (action.type) {
        case RemindersTypes.ADD_REMINDER:
            return {
                remindersList : [...state.remindersList,action.payload]
            }
        case RemindersTypes.DELETE_REMINDER:
            return {
                ...state,
                remindersList : state.remindersList.filter(reminder => reminder.dataKey!==action.payload)
            }
        default:
            return state;
    }
}

export default reminderReducer;