import { CHANGE_EFFECT } from '../types';

const initialState = {
  snow: true
}

export const effectReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_EFFECT:
      return {...state, snow: !state.snow}
    default:
      return state
  }
}