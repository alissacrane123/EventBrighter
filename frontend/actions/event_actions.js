import * as eventAPIUtil from  '../util/event_api_util';

export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_EVENT =  'RECEIVE_EVENT';

export const receiveEvents = events => {
  return {
    type: RECEIVE_EVENTS,
    events
  }
}

export const receiveEvent = event => {
  return  {
    type: RECEIVE_EVENT,
    event 
  }
}

export const fetchEvents = filters => dispatch => {
  return (
    eventAPIUtil.fetchEvents(filters).then(events => dispatch(receiveEvents(events)))
  )
}

export const fetchEvent = id => dispatch (
  eventAPIUtil.fetchEvent(id).then(event => dispatch(receiveEvent(event)))
)