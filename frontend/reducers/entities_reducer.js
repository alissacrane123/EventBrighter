import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import eventReducer from './event_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  events: eventReducer
});

export default entitiesReducer;