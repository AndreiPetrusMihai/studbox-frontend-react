import UserActionTypes from "./user.types";



export const setCurrentUser = (userData) =>({
    type: UserActionTypes.SET_CURRENT_USER,
    payload : userData
});

export const signUpStart = (newUserData) => ({
    type:UserActionTypes.SIGN_UP_START,
    payload : newUserData
})

export const signInStart = (newUserData) => ({
    type:UserActionTypes.SIGN_IN_START,
    payload : newUserData
})

export const signUpSuccess = (userRefAndData) => ({
    type:UserActionTypes.SIGN_UP_SUCCESS,
    payload: userRefAndData
})

export const signUpFailure = (error) =>({
    type : UserActionTypes.SIGN_UP_FAILURE,
    payload : error
})

export const signInSuccess = (user) => ({
    type : UserActionTypes.SIGN_IN_SUCCESS,
    payload : user
})

export const signInFailure = (error) => ({
    type : UserActionTypes.SIGN_IN_FAILURE,
    payload : error
})