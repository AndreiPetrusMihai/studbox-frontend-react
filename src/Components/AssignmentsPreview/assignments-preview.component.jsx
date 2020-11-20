import React from 'react';
import './assignments-preview.styles.scss'
import {connect} from 'react-redux';
import Assignment from "../assignment/assignment.component";



const AssignmentsPreview = ({listOfPrivateAssignments}) =>{

    return(
        <div className="assignmentsPreviewContainer">
            <div className="privateBox">
                <h1>PRIVATE</h1>
                <div className="scrollable">
                    {
                        listOfPrivateAssignments.map(assignment =>
                            <Assignment title={assignment.title} deadline={assignment.deadline} assignmentKey={assignment.assignmentKey} key={assignment.assignmentKey} description={assignment.description}/>)
                    }
                </div>
            </div>
            <div className="groupBox">
                <h1>GROUP</h1>
                <div className="scrollable">

                </div>
            </div>


        </div>
    )
}


const mapStateToProps = ({assignments}) =>({
    listOfPrivateAssignments: assignments.listOfPrivateAssignments
})
export default connect(mapStateToProps)(AssignmentsPreview);
