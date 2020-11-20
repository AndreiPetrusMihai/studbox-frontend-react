import React,{useState} from 'react';
import './reminder.styles.scss'



const Reminder = ({text,date}) =>
{
    const [details,setDetails] = useState({text,date},)
    return(
        <div className="reminderContainer">
            {
                details.text  + details.date
            }
        </div>
    )
}

export default Reminder;