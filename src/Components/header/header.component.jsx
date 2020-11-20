import React from 'react';
import "./header.styles.scss";
import {Link} from "react-router-dom";
import {auth} from "../../Firebase/firebase.utils";
import {connect} from 'react-redux';



const Header = ({currentUser,hidden,signOutStart}) =>(
	<div className="headerContainer">
		<div className="optionsContainer">
			<Link to='/dashboard' >
				<button className="ripple">DASHBOARD</button>
			</Link>
			<Link to='/assignments' >
				<button className="ripple">ASSIGNMENTS</button>
			</Link>
			<Link to='/schedule'>
				<button className="ripple">SCHEDULE</button>
			</Link>
			<Link to='/groups'>
				<button className="ripple">GROUPS</button>
			</Link>
			<Link to='/' onClick={() => auth.signOut()} > <button className="ripple">SIGN OUT</button> </Link>
		</div>
	</div>
)

const mapStateToProps = ({user}) => ({
	currentUser : user.currentUser,
})

export default connect(mapStateToProps)(Header);
