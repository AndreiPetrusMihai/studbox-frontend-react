import RemindersTypes from "./reminders.types";


export const addReminder = (reminder) => {
    return {
        type : RemindersTypes.ADD_REMINDER,
        payload:reminder
    }
}

export const deleteReminder = (reminderKey) => {
    return {
        type : RemindersTypes.DELETE_REMINDER,
        payload:reminderKey
    }
}