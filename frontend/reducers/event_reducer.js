import { RECEIVE_EVENTS, RECEIVE_EVENT } from '../actions/event_actions';

const eventReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_EVENTS:
      return action.events;
    case RECEIVE_EVENT:
      const newEvent = { [action.event.id]: action.event };
      return Object.assign(nextState, newEvent);
    default:
      return state;
  }
}

export default eventReducer;