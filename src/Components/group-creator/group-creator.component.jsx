import './group-creator.styles.scss';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addGroup} from "../../Redux/Groups/groups.actions";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {auth} from "../../Firebase/firebase.utils";
import {generateUniqueID} from "web-vitals/dist/lib/generateUniqueID";

const GroupCreator = ({addGroup}) => {


    const [groupData,setGroupData] = useState({name:'',description:''})
    const {name,description} = groupData;

    const handleSubmit = async event =>{

        event.preventDefault();
        const newGroup={ name : groupData.name,description : groupData.description ,groupKey : generateUniqueID(),members : 1}
        addGroup(newGroup);

    }


    const handleChange = event =>{
        const {value,name} = event.target;
        setGroupData({...groupData, [name] : value });
    }

    return(
        <div className="groupCreatorContainer">
            <form onSubmit={handleSubmit}>
                <FormInput
                    name='name'
                    type='name'
                    handleChange={handleChange}
                    value={name}
                    label='Name'
                    required
                />
                <FormInput
                    name='description'
                    type='description'
                    value={description}
                    handleChange={handleChange}
                    label='Description'
                    required
                />
                <div className="signInButtonsContainer">
                    <CustomButton type='submit'> Create </CustomButton>
                </div>
            </form>

        </div>
    )

}

const mapDispatchToProps = (dispatch) =>({
    addGroup : (group) => dispatch(addGroup(group)),
})

export default connect(null,mapDispatchToProps)(GroupCreator);