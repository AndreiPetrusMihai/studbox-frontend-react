import React, {useState} from 'react';

import './reminder-adder.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux';
import {addReminder} from "../../Redux/Reminders/reminders.actions";
import {generateUniqueID} from "web-vitals/dist/lib/generateUniqueID";

const ReminderAdder = ({addReminderAction}) =>{

    const [details,setDetails] = useState({text:'',date:''})


    const handleSubmit =  event =>{
        event.preventDefault();
        const dataKey = generateUniqueID();
        const reminder = { text : details.text , date: details.date, dataKey:dataKey};
        addReminderAction(reminder);
        setDetails({text:'',date:''})
    }

    const handleChange = event =>{
        const {value,name} = event.target;
        setDetails({...details,[name]:value});
    }

    return(
        <div className="reminderAdderContainer">

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='text'
                    type='text'
                    handleChange={handleChange}
                    value={details.text}
                    label='text'
                    required
                />
                <FormInput
                    name='date'
                    type='date'
                    value={details.date}
                    handleChange={handleChange}
                    required
                />
                <div className="reminderAdderButtonsContainer">
                    <CustomButton className="ripple"  type='submit'> Add </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addReminderAction : reminder => dispatch(addReminder(reminder))
});

export default connect(null,mapDispatchToProps)(ReminderAdder);