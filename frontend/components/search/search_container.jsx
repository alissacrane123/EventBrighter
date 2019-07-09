import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React from 'react';

import Search from './search';
import { fetchEvents } from '../../actions/event_actions';
import { fetchWithFilters } from '../../actions/filter_actions';

const msp = state => {
  return {
    events: Object.values(state.entities.events)
  }
}

const mdp = dispatch => {
  return {
    fetchEvents: (filters) => dispatch(fetchEvents(filters)),
    fetchWithFilters: (filters) => dispatch(fetchWithFilters(filters))
  }
}

export default withRouter(connect(msp, mdp)(Search));