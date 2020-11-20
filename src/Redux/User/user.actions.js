import UserActionTypes from "./user.types";



export const setCurrentUser = (userData) =>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload : userData
});

