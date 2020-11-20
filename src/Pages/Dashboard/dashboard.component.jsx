import React from 'react';
import Header from "../../Components/header/header.component";
import './dashboard.styles.scss';
import RemindersBox from "../../Components/reminders-box/reminders-box.component";
import NewsBox from "../../Components/news-box/news-box.component";

const Dashboard = () =>
{

    return(
        <div className="dashboardContainer">

            <RemindersBox/>
            <NewsBox/>
        </div>

    )
}

export default Dashboard;