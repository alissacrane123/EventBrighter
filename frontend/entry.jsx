import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';

// testing
import { fetchEvents, fetchEvent } from './actions/event_actions';


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  // testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchEvents = fetchEvents;
  //

  ReactDOM.render(<Root store={store} />, root);
});