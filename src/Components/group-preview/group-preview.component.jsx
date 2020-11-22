import React from 'react';
import './group-preview.styles.scss'
import {selectGroup} from "../../Redux/Groups/groups.actions";
import {connect} from 'react-redux';



const GroupPreview = ({name,members,selectGroup,groupKey,...props})=>{

    return(
        <div className="groupPreviewContainer" onClick={() => selectGroup(groupKey)}>
            <p>{name}</p>
            <p>Number of members: {members}</p>
        </div>
    )

}

const mapDispatchToProps = (dispatch) =>({
    selectGroup : (groupKey) => dispatch(selectGroup(groupKey))
})

export default connect(null,mapDispatchToProps)(GroupPreview);