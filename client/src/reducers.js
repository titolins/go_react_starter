import { combineReducers } from 'redux'

const initialState = {}

function state(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export let tvaApp = combineReducers({state})
