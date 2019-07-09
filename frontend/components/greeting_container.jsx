import { connect } from 'react-redux';
import Greeting from './greeting';

import { login, logout, signup } from '../actions/session_actions';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
})

const mdp = dispatch => ({
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout()),
  signup: (user) => dispatch(signup(user))
})

export default connect(msp, mdp)(Greeting);