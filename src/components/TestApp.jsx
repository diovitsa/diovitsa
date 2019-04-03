import React from "react";
import { HashRouter as Router } from "react-router-dom";
import UserList from './UsersListPage/UsersList';
import LoginPage from './LoginPage/LogInPage';
import { ProtectedListRoute } from '../ProtectedListRoute';
import { SignInRoute } from '../SignInRoute';


export default class TestApp extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <SignInRoute exact path='/' component={LoginPage}/>
          <ProtectedListRoute exact path='/list' component={UserList}/>
        </div>
      </Router>
    );
  }
}


