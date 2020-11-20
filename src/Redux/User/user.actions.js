import UserActionTypes from "./user.types";



export const emailSignInStart = (emailAndPassword) =>({
    type: UserActionTypes.EMAIL_SING_IN_START,
    payload : emailAndPassword
});