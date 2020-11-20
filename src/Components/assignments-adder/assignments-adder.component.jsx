import React, {useState} from 'react';

import './assignments-adder.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux';
import {addAssignment} from "../../Redux/Assignments/assignments.actions";
import {generateUniqueID} from "web-vitals/dist/lib/generateUniqueID";

const AssignmentsAdder = ({addAssignmentAction}) =>{

    const [details,setDetails] = useState({title:'',description:'',deadline:''})

    const handleSubmit = event =>{
        event.preventDefault();
        const dataKey = generateUniqueID();
        const assignment = { title : details.title , deadline: details.deadline,description: details.description, assignmentKey:dataKey};
        addAssignmentAction(assignment);
        setDetails({title:'',description:'',deadline:''})
    }

    const handleChange = event =>{
        const {value,name} = event.target;
        setDetails({...details,[name]:value});
    }

    return(
        <div className="assignmentAdderContainer">
            <h3 className="assignmentAdderTitle">Add assignment</h3>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='title'
                    type='text'
                    handleChange={handleChange}
                    value={details.title}
                    label='Text'
                    required
                />
                <FormInput
                    name='description'
                    type='text'
                    value={details.description}
                    handleChange={handleChange}
                    label='Description'
                />
                <FormInput
                    name='deadline'
                    type='date'
                    value={details.deadline}
                    handleChange={handleChange}
                    required
                />
                <div className="assignmentAdderButtonsContainer">
                    <CustomButton type='submit'> Add </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addAssignmentAction : assignment => dispatch(addAssignment(assignment))
});

export default connect(null,mapDispatchToProps)(AssignmentsAdder);