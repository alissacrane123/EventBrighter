import { UPDATE_FILTER, UPDATE_FILTERS, REMOVE_FILTERS } from '../actions/filter_actions';

const noFilters = {
  city: null,
  state: null,
  event_type: null
}

const filtersReducer = (state = noFilters , action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case UPDATE_FILTER:
      const filter = { [action.filter]: action.value };
      return Object.assign(nextState, filter);
    case UPDATE_FILTERS:
      return Object.assign(nextState, action.filters);
    case REMOVE_FILTERS:
      return noFilters;
    default:
      return state;
  }
}

export default filtersReducer;