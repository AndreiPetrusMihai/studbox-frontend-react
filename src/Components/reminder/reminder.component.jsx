import React,{useState} from 'react';
import './reminder.styles.scss'
import {deleteReminder} from "../../Redux/Reminders/reminders.actions";
import {connect} from 'react-redux';

const Reminder = ({text,date,dataKey,deleteReminder}) =>
{
    const [details,setDetails] = useState({text,date},)

    const onClickDelete = () => {
        deleteReminder(dataKey)
    }

    return(
        <div className="reminderContainer">
            <p>{details.text.concat()}</p>
            <p>{details.date}</p>

            <button onClick={onClickDelete} type='submit'>
                X
            </button>

        </div>
    )
}


const mapDispatchToProps = (dispatch) =>({
    deleteReminder : (reminderKey) => dispatch(deleteReminder(reminderKey))
})

export default connect(null,mapDispatchToProps)(Reminder);