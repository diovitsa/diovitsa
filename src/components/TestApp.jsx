import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserList from './UsersListPage/UsersList';
import LoginPage from './LoginPage/LogInPage';

export default class TestApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path={ process.env.PUBLIC_URL + '/' } component={LoginPage}/>
          <Route path={ process.env.PUBLIC_URL + '/list' } component={UserList}/>
        </div>
      </Router>
    );
  }
}


