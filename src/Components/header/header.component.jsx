import React from 'react';
import "./header.styles.scss";
import {Link} from "react-router-dom";
import {auth} from "../../Firebase/firebase.utils";
import {connect} from 'react-redux';



const Header = ({currentUser,hidden,signOutStart}) =>(
	<div className="headerContainer">
		<div className="optionsContainer">
			<Link to='/dashboard' >
				DASHBOARD
			</Link>
			<Link to='/assignments' >
				ASSIGNMENTS
			</Link>
			<Link to='/schedule'>
				SCHEDULE
			</Link>
			<Link to='/groups'>
				GROUPS
			</Link>
			<Link to='/' onClick={() => auth.signOut()} > SIGN OUT </Link>
		</div>
	</div>
)

const mapStateToProps = ({user}) => ({
	currentUser : user.currentUser,
})

export default connect(mapStateToProps)(Header);