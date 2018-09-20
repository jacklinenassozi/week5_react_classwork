import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link} from 'react-router-dom';
//import HomePage from './components/HomePage';
//import HyfUsers from './components/HyfUsers';
import {HomePage,HyfUsers}from './components'
import Clock from './components/Clock';

function App(){
    return(
        <div id = 'app'>
        
        <Route exact path='/' component={()=>(
            <div id='home'><h2>home</h2>
            <Link to='/about'>about</Link>
            </div>
        )} />
        <Route exact path='/about' component={HomePage} />
        <Route exact path='/users' component={HyfUsers} />
        <Route exact path='/countdown' component={Clock} />       
        </div>
    )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
//registerServiceWorker();
