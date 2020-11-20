import React from 'react';
import "./custom-button.styles.scss";

const CustomButton = ({children,inverted,...props}) =>(
	<button className={"customButton " + inverted ? "invertedButtonStyles":"buttonStyles"}>
		{children}
	</button>
)

export default CustomButton;