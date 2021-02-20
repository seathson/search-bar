import { CHANGE_THEME } from "../types"

const initialState = {
  light: true
}

export const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, light: !state.light}
    default:
      return state
  }
};
