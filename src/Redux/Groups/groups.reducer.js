import GroupTypes from "./groups.types";

const INITIAL_STATE = {
    listOfGroups: [{groupKey:1,name:"Group 916",members: 25},{groupKey:2,name:"Group 913",members: 20}],
    createMode: false
}

const groupReducer = (state = INITIAL_STATE,action) =>{

    switch(action.type){
        case GroupTypes.ADD_GROUP:
            return{
                ...state,
                listOfGroups: [...state.listOfGroups,action.payload]
            }
        case GroupTypes.DELETE_GROUP:
            return{
                ...state,
                listOfGroups: state.listOfGroups.filter(group => group.groupKey!==action.payload)
            }

        case GroupTypes.TOGGLE_CREATION:
            return{
                ...state,
                createMode: !state.createMode
            }
        default:
            return state;
    }
}
export default groupReducer;