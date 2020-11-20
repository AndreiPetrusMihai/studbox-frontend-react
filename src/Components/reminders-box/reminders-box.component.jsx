import React from 'react';
import './reminders-box.styles.scss';
import Reminder from "../reminder/reminder.component";
import {connect} from "react-redux";

const RemindersBox = ({remindersList}) =>{


    // eslint-disable-next-line no-unused-vars


    return(
        <div className="remindersBoxContainer">

            <div className="scrollable">
                    {
                        remindersList.map(reminder => <Reminder key={reminder.dataKey} dataKey={reminder.dataKey} text={reminder.text} date={reminder.date}/>)
                    }
            </div>

        </div>
    )

}

const mapStateToProps = ({reminders}) =>({
    remindersList : reminders.remindersList,
});


export default connect(mapStateToProps)(RemindersBox);