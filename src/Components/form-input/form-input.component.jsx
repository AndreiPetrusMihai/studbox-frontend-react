import React from 'react';
import './form-input.styles.scss';

const FormInput = ({handleChange,label,...props}) =>(

	<div className="formContainer">
		<input className="formInputContainer" onChange={handleChange} {...props} />
		{label ? (
			<label  className={ 'formLabel '.concat(props.value.length ? 'shrink' : '')}>
				{label}
			</label>
		) : null}
	</div>

)

export default FormInput;