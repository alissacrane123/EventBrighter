import { fetchEvents } from './event_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const REMOVE_FILTERS = 'REMOVE_FILTERS';

export const updateFilter = (filter, value) => {
  return {
    type: UPDATE_FILTER,
    filter,
    value
  }
}

export const updateFilters = filters => {
  return {
    type: UPDATE_FILTERS,
    filters
  }
}

export const removeFilters = () => {
  return {
    type: REMOVE_FILTERS
  }
}

export const fetchWithFilter = (filter, value) => (dispatch, getState) => {
  dispatch(updateFilter(filter, value));
  return fetchEvents(getState().ui.filters)(dispatch);
}

export const fetchWithFilters = filters => (dispatch, getState) => {
  dispatch(updateFilters(filters));
  return fetchEvents(getState().ui.filters)(dispatch);
}