// import { List } from 'immutable'
import { photoActions } from './actions';

export const initialState = {
  loading: false,
  list: [],
};
export function photoReducer(state = initialState, { payload, type }) {
  switch (type) {
    case photoActions.ADD_PHOTO:
      return { ...state, loading: true };

    case photoActions.ADD_PHOTO_FULFILLED:
      return { list: [...state.list, payload], loading: false };

    default:
      return state;
  }
}
