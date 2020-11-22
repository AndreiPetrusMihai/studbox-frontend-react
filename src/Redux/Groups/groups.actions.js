import GroupTypes from "./groups.types";


export const addGroup =(group) => ({
    type : GroupTypes.ADD_GROUP,
    payload:group
})

export const deleteGroup =(groupKey) => ({
    type : GroupTypes.DELETE_GROUP,
    payload:groupKey
})

export const toggleCreation = () => ({
    type : GroupTypes.TOGGLE_CREATION,
    payload: null
})

export const selectGroup = (groupKey) => ({
    type : GroupTypes.SELECT_GROUP,
    payload: groupKey
})