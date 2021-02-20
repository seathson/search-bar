import { CHANGE_EFFECT, CHANGE_THEME } from './types'

export function changeTheme() {
  return {
    type: CHANGE_THEME,
  }
}

export function changeEffect() {
  return {
    type: CHANGE_EFFECT,
  }
}