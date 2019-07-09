import React from 'react';

import LoginForm from '../session/login_form';
import SignupForm from '../session/signup_form';

class Navbar extends React.Component {

  render() {
    let { signup, login, logout, currentUser, openModal, closeModal } = this.props;

    const loginLeft = (
      <div className="navbar-logo1">
        <div className="logo-text">HOOD</div>
      </div>
    )
    const loginRight = (
      <div className="nav-buttons">
        <div className="nav-button" onClick={() => openModal('login')}>LOG IN</div> 
        <div className="nav-button" onClick={() => openModal('signup')}>SIGN UP</div>
      </div>)

    const logoutLeft = (
      <div className="navbar-logo1">
        <div className="logo-text">HOOD</div>
      </div>
    )
    const logoutRight = (
      <div className="nav-buttons">
        <div className="nav-button" onClick={this.props.logout}>LOGOUT</div>
      </div>
    )

    return(
      <div className="navbar-cont">
        <div className="navbar-left-cont">
          { currentUser ? logoutLeft : loginLeft }
        </div>
        <div className="navbar-right-cont">
          { currentUser ? logoutRight : loginRight }
        </div>
      </div>
    )
  }
}

export default Navbar;