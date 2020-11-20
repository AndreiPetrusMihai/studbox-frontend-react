import UserActionTypes from "./user.types";


const INITIAL_STATE={
    currentUser: null,
    error: null
}

const userReducer = (state=INITIAL_STATE,action) => {
    switch (action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }
        default:
            return state;
    }
}


export default userReducer;