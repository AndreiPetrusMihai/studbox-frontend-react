import React from 'react';
import './groups.styles.scss';
import GroupBox from "../../Components/group-box/group-box.component";
import GroupCreator from "../../Components/group-creator/group-creator.component";
import {connect} from 'react-redux';
import {toggleCreation} from "../../Redux/Groups/groups.actions";

const Groups = ({createMode,toggleCreation,selectedGroup}) =>{

    return(
        <div className="groupsContainer">
            <div className="groupManager">
                <GroupBox/>
                <button onClick={toggleCreation} className="invertedButtonStyles">{createMode ? ("Cancel") : ("Create Group")}</button>
            </div>
            <div className="groupActions">
                {
                    createMode ? (<GroupCreator/>) : (selectedGroup? (selectedGroup.name) : ("Select a group"))
                }
            </div>
        </div>
    )
}

const mapStateToProps = ({groups}) => ({
    createMode : groups.createMode,
    selectedGroup : groups.selectedGroup
})

const mapDispatchToProps = (dispatch) => ({
    toggleCreation : () => dispatch(toggleCreation()),
})
export default connect(mapStateToProps,mapDispatchToProps)(Groups);


