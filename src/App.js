import React from 'react';
import './App.css';
import{connect} from 'react-redux';
import {Switch,Route,Redirect} from 'react-router-dom';
import {setCurrentUser} from "./Redux/User/user.actions";
import WelcomePage from "./Pages/WelcomePage/welcome-page.component";
import {createUserProfileDocument,auth} from "./Firebase/firebase.utils";
import Dashboard from "./Pages/Dashboard/dashboard.component";
import Header from "./Components/header/header.component";



class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setCurrentUser } = this.props;

        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                    });
                });
            }
            else{
                setCurrentUser(userAuth);
            }
        });
    }
    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }
    render(){
        return (
            <div className="App">

                {this.props.currentUser ? (<Header/>) : null}
                <Switch className="routeContainers">
                    <Route exact path='/' render={() => this.props.currentUser ?
                        (<Redirect to='/dashboard' />
                        ) : (
                            <WelcomePage />)}/>
                    <Route exact path='/dashboard' render={() => !this.props.currentUser ?
                        (<Redirect to='/' />
                        ) : (
                            <Dashboard />)}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default  connect(mapStateToProps,mapDispatchToProps)(App);
