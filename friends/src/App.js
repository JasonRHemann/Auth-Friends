import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Login from './components/Login'
import Friends from './components/Friends'
import PrivateRoute from './components/PrivateRoute'
import AddFriend from './components/AddFriend';


function App() {
  return (
    <Router>
    <div className="App">
      <ul>
        <li>
      <Link to="/login">Login</Link>
        </li>
        <li>
      <Link to="/friends">Friends</Link>
        </li>
        <li>
      <Link to="/addFriends"> add Friend</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/friends" component={Friends} />
        <Route path="/login" component={Login} />
        <Route path="/addFriends" component={AddFriend}/>
        <Route component={Login} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
