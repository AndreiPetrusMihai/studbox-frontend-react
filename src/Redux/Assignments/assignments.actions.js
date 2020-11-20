import AssignmentsTypes from "./assignments.types";



export const addAssignment = (assignment) => ({
    type : AssignmentsTypes.ADD_PRIVATE_ASSIGNMENT,
    payload: assignment
})

export const deleteAssignment = (assignmentKey) => ({
    type : AssignmentsTypes.DELETE_PRIVATE_ASSIGNMENT,
    payload: assignmentKey
})



