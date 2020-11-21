import React from 'react';
import './group-preview.styles.scss'

const GroupPreview = ({name,members,...props})=>{

    return(
        <div className="groupPreviewContainer">
            <p>{name}</p>
            <p>Number of members: {members}</p>
        </div>
    )

}
export default GroupPreview;