import { connect } from 'react-redux';
import Navbar from './navbar';

import { login, signup } from '../../actions/session_actions';
import { closeModal, openModal } from '../../actions/modal_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
  login: (user) => dispatch(login(user)),
  signup: (user) => dispatch(signup(user)),
  openModal: (modal) => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
})

export default connect(msp, mdp)(Navbar);