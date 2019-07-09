import React from 'react';

import LoginForm from './login_form';
import SignupForm from './signup_form';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   showLogin: false,
    //   showSignup: false
    // };
  }

  render() {
    let { modal, login, signup, closeModal, openModal, errors } = this.props;

    if (!modal) return null;

    if (modal === 'login') {
      return (
        <div className="modal-background" onClick={closeModal} >
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            {/* <div className="modal-form"> */}
              <LoginForm login={login} closeModal={closeModal} errors={errors} />
            {/* </div> */}
          </div>
        </div>
      )
    } else if (modal === 'signup') {
      return (
        <div className="modal-background" onClick={closeModal} >
          <div className="modal-child2" onClick={e => e.stopPropagation()}>
            <div className="modal-form">
              <SignupForm signup={signup} closeModal={closeModal} errors={errors}/>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Modal;