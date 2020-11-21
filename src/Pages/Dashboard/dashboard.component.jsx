import React from 'react';
import './dashboard.styles.scss';
import RemindersBox from "../../Components/reminders-box/reminders-box.component";
import NewsBox from "../../Components/news-box/news-box.component";
import ReminderAdder from "../../Components/reminder-adder/reminder-adder.component";
const Dashboard = () =>
{

    return(
        <div className="dashboardContainer">
            <div className="reminderSide">
                <h2>Reminders</h2>
                <RemindersBox/>
                <ReminderAdder/>
            </div>

            <div className="newsSide">
                <h2>Latest Activity</h2>
                <NewsBox/>
            </div>
        </div>
    )
}

export default Dashboard;