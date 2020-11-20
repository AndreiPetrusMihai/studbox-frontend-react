import React from 'react';
import './assignment.styles.scss';
import {deleteAssignment} from "../../Redux/Assignments/assignments.actions";
import {connect} from 'react-redux';

const Assignment = ({title,description,deadline,assignmentKey,deleteAssignment})=>{
    return (
        <div className="assignmentContainer">
            <div className="infoContainer">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>{deadline}</p>
            </div>

            <button className="buttonStyles" onClick={() => deleteAssignment(assignmentKey)}>
                X
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
    deleteAssignment : (assignmentKey) => dispatch(deleteAssignment(assignmentKey))
})


export default connect(null,mapDispatchToProps)(Assignment);