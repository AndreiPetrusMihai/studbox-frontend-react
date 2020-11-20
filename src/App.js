import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import WelcomePage from "./Pages/WelcomePage/welcome-page.component";

function App() {
  return (
    <div className="App">
        <WelcomePage/>
    </div>
  );
}
export default App;
