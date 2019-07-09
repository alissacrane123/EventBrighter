import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import ModalContainer from '../components/session/modal_container';
import EventIndexContainer from '../components/events/event_index_container';


const App = () => (
  <div className="app-container">
    <ModalContainer />
    <Switch>
      <Route exact path="/" component={GreetingContainer} />
      <Route path="/events" component={EventIndexContainer} />

    </Switch>
  </div>
);

export default App; 