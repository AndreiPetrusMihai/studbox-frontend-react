import React from 'react';
import {connect }from 'react-redux';
import './group-box.styles.scss'
import GroupPreview from "../group-preview/group-preview.component";

const GroupBox = ({listOfGroups}) => {
    return(
        <div className="groupBoxContainer">
            {
                listOfGroups.map((group) => (<GroupPreview key={group.groupKey} name={group.name} members={group.members} groupKey={group.groupKey}/>))
            }
        </div>
    )
}

const mapStateToProps = ({groups}) => ({
    listOfGroups : groups.listOfGroups
})

export default connect(mapStateToProps)(GroupBox);