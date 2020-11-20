import React from 'react';
import './assignments.styles.scss'
import AssignmentsAdder from "../../Components/assignments-adder/assignments-adder.component";
import AssignmentsPreview from "../../Components/AssignmentsPreview/assignments-preview.component";

const Assignments = ()=>{

    return(
        <div className="assignmentsContainer">
            <AssignmentsAdder/>
            <AssignmentsPreview/>
        </div>
    )

}

export default Assignments;