import { connect } from 'react-redux';
import React from 'react';

import EventIndex from './event_index';
import { fetchEvents } from '../../actions/event_actions';

const msp = state => {
  return {
    events: Object.values(state.entities.events),
    currentUser: state.entities.users[state.session.id],
    filters: state.ui.filters
  }
}

const mdp = dispatch => {
  return {
    fetchEvents: (filters) => dispatch(fetchEvents(filters))
  }
}

export default connect(msp, mdp)(EventIndex);