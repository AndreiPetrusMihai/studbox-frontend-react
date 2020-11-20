import AssignmentsTypes from "./assignments.types";

const INITIAL_STATE = {
    listOfPrivateAssignments : [],
    listOfGroupAssignments : []

}

const assignmentsReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type){
        case AssignmentsTypes.ADD_PRIVATE_ASSIGNMENT:
            return{
                ...state,
                listOfPrivateAssignments: [...state.listOfPrivateAssignments,action.payload]
            }
        case AssignmentsTypes.DELETE_PRIVATE_ASSIGNMENT:
            return {
                ...state,
                listOfPrivateAssignments: state.listOfPrivateAssignments.filter(assignment => assignment.assignmentKey!==action.payload)
            }
        default:
            return state;
    }
}

export default assignmentsReducer;