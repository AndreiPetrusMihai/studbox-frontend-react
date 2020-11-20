import React from 'react';
import './reminders-box.styles.scss';
import Reminder from "../reminder/reminder.component";

const RemindersBox = () =>{
    const hardReminders = [<Reminder text="blabla" date={123}/>,<Reminder text="dasca" date={1243}/>,<Reminder text="blbbasabla" date={123}/>];
    return(
        <div className="remindersBoxContainer">
            <t>Reminders</t>
            {
                hardReminders
            }
        </div>
    )

}

export default RemindersBox;